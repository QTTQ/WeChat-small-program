// pages/mvoie/mvoie.js
const API_URL="https://api.douban.com/v2/movie/subject/";
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
      //  console.log(options);
      wx.request({
        url: API_URL+"options.id",
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
          'content-type': 'application/text'
        }, // 设置请求的 header
        success: function(res){
          // success
          console.log(res.data)
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
   
  }
   
})