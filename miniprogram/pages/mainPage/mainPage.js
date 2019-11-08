//mainPage.js
Page({

  /**
   * Data in page
   */
  data: {
  },

  onLoad() {
    wx.getSystemInfo({
      success:res => {
        this.setData({
          winWidth : res.windowWidth,
          winHeight : res.windowHeight,
          /*ajusted img height and width are defined here. We preserve aspect ratio*/
          imgHeight: res.windowHeight * 0.9, 
          imgWidth: (res.windowHeight * 0.9) / 1350 *750, 
          })
        console.log("Img Height: " + this.setData.imgHeight + " Img Width: " + this.setData.imgWidth)
      }
    })
  }
})
