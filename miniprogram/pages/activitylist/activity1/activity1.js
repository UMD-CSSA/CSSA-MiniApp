// miniprogram/pages/activitylist/activity1/activity1.js
var app = getApp();
var WxAutoImage = require('../../util/WxAutoImage.js');
Page({
  data: {

  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
  },
  cusImageLoad: function (e) {
    var that = this;
    that.setData(WxAutoImage.wxAutoImageCal(e));
  }
})