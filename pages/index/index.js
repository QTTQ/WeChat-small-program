const API_URL="https://api.douban.com/v2/movie/top250";
Page({
  data:{
    title:"加载中..",
    movies:[]
  },
  onLoad:function(){
    var that=this;
    wx.showToast({
      title:"加载中。。",
      icon:"loading",
      duration:10000
    });
    wx.request({
      url: API_URL, //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/text'
      },
      success: function(res) {
        wx.hideToast();
        var data=res.data;
        console.log(res.data);
        that.setData({
          title:data.title,
          movies:data.subjects

        });
      }
    });
  }
})

