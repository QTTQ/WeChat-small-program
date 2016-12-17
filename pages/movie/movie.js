// pages/mvoie/mvoie.js

const API_URL = 'https://api.douban.com/v2/movie/subject/';

Page({
  data: {
    loadingHide: false,
    movie: {}
  },
  onLoad:function (params){
  	console.log(API_URL+params.id);
  	var that = this;
  	wx.request({
      url: API_URL + params.id, 
      data: {},
      header: {
          'Content-Type': 'application/text'
      },
      success: function(res) {	
        that.setData({
        	loadingHide:true,
        	movie: res.data
        });
      }
    })
  }
})
