//index.js
const app = getApp()

Page({
  onLoad(){
    wx.getSystemInfo({
    success(res) {
      var winWidth = res.windowWidth;
      var winHeight = res.windowHeight;
    }
  })
  }
})
