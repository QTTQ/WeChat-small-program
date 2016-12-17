// pages/search/search.js
// 获取应用实例

var app = getApp()
/*
	接口说明：
		https://api.douban.com/v2/movie/search?q=搜索内容
*/
const API_URL = 'https://api.douban.com/v2/movie/search'

Page({
  data:{
  	loadingHide:true,
  	movies:[]
  },
  search:function (e){
  	if (!e.detail.value) return
  	this.setData({loadingHide:false});
  	var that = this;
  	wx.request({
      url: API_URL + "?q=" + e.detail.value, 
      data: {},
      header: {
          'Content-Type': 'application/text'
      },
      success: function(res) {
      	// console.log(res.data);
        that.setData({
        	loadingHide:true,
        	movies: res.data.subjects
        });
      }
    })
  }
})
