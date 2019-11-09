//mainPage.js
Page({

  /**
   * Data in page
   */
  data: {
  },

  onLoad() {
    const res = wx.getSystemInfoSync()
    if (!res) {
      getApp().onError("wx.getSystemInfoSync() return nothing")
    }

    this.setData({
      winWidth: res.windowWidth,
      winHeight: res.windowHeight,
    })


    const imgHeight = 1350
    const btnHeight = 255
    const scaleFactor = res.windowHeight * 9 / 10 / 1350
    const aspectRatio = 5 / 9 // 1350:750
    const btnAspectRatio = 40 / 51 // 200:255

    const _imgHeight = scaleFactor * imgHeight
    const _imgWidth = _imgHeight * aspectRatio
    const _btnHeight = scaleFactor * btnHeight
    const _btnWidth = _btnHeight * btnAspectRatio

    this.setData({
      imgHeight: _imgHeight,
      imgWidth: _imgWidth,
      btnHeight: _btnHeight,
      btnWidth: _btnWidth,
      btnMarginRight: _imgWidth * 90 / 750,
      btnMarginTop1: _imgHeight * 270 / 1350,
      btnMarginTop2: _imgHeight * 270 / 1350 + 280,
      btnMarginTop3: _imgHeight * 270 / 1350 + 280 * 2,
    })
  },

  onBgImgClicked(event) {
    console.log(123)
    console.info(event)
  }
})
