// miniprogram/pages/activitylist/activity1/activity1.js
var app = getApp();
var WxAutoImage = require('../WxAutoImage.js');
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (e) {
    console.log(WxAutoImage.wxAutoImageCal(e))
  },
})