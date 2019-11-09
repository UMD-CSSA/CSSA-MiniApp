//mainPage.js
Page({

  /**
   * Data in page
   */
  data: {
    model:''
  },

  onLoad() {
    wx.getSystemInfo({
      success:res => {
        this.setData({
          model:res.model,
          winWidth : res.windowWidth,
          winHeight : res.windowHeight,
          })
      },
      fail:res =>{
        this.setData({
          model:NONE
        })
      },
      complete: res =>{
        model = this.setData.model;
        if(model == "iPhone 6" || model == "iPhone 7" || model == "iPhone8"){
          console.log("THis is a iphone 6 or 7 or 8")
        }else{
          this.setData({
            imgHeight: res.windowHeight * 0.9,
            imgWidth: (res.windowHeight * 0.9) / 1350 * 750,
            btnHeight: 230 / 750 * (res.windowHeight),
            btnRight: 80 / 375 * ((res.windowHeight * 0.9) / 1350 * 750),
            btnMarginTop: 270 / 740 * (res.windowHeight)
          })
        }
        console.log("curr width: " + res.windowWidth),
        console.log("btnHeight: " + 380 / 375 * res.windowWidth)
      }
    })
  },
  naviToSetting: function(event) {
    wx.navigateTo({
      url:"pages/loginPage/loginPage"
      })
    }
})
