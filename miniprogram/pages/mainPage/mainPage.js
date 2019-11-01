// miniprogram/pages/mainPage/mainPage.js
Page({

  /**
   * Page data.
   */
  data: {
    // [swiper] image slider
    imgSliderUrls: [
      'https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80',
      'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg',
      'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg',
      'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg',
      'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg'
    ]
  },

  /**
   * [canvas] Load cssa logo.
   */
  // loadCanvasCssaLogo() {
    // When canvas is not supported.
    // if (!wx.createCanvasContext) {
    //   getApp().onError('Feature [canvas] not supported! Please update WeChat!')
    //   return
    // }

    // wx.getSystemInfo({
    //   success(res) {
    //     console.log(res)

    //     const screenWidth = res.screenWidth ?
    //       res.screenWidth : res.windowWidth
    //     const scaleFactor = screenWidth / 20
    //     const cc = wx.createCanvasContext("cssa-logo")

    //     cc.setStrokeStyle("#C00")
    //     cc.setLineWidth(10)
    //     cc.setLineCap("round")
    //     cc.setLineJoin("round")

    //     cc.rect(.5 * scaleFactor, .5 * scaleFactor, 19 * scaleFactor, 19 * scaleFactor)
    //     cc.moveTo(18 * scaleFactor, 2 * scaleFactor)
    //     cc.lineTo(2 * scaleFactor, 2 * scaleFactor)
    //     cc.lineTo(2 * scaleFactor, 14 * scaleFactor)
    //     cc.lineTo(18 * scaleFactor, 14 * scaleFactor)
    //     cc.moveTo(10 * scaleFactor, 2 * scaleFactor)
    //     cc.lineTo(10 * scaleFactor, 6 * scaleFactor)
    //     cc.lineTo(18 * scaleFactor, 6 * scaleFactor)
    //     cc.lineTo(18 * scaleFactor, 18 * scaleFactor)
    //     cc.moveTo(2 * scaleFactor, 18 * scaleFactor)
    //     cc.lineTo(10 * scaleFactor, 18 * scaleFactor)
    //     cc.lineTo(10 * scaleFactor, 10 * scaleFactor)
    //     cc.moveTo(2 * scaleFactor, 10 * scaleFactor)
    //     cc.lineTo(18 * scaleFactor, 10 * scaleFactor)
    //     cc.stroke()
    //     cc.draw()
    //   }
    // })
  // },

  /**
   * Lifecycle, called on render finished.
   */
  onReady() {
    // this.loadCanvasCssaLogo()
  },

  /**
   * Called when an error callback was executed.
   */
  onError(msg) {
    getApp().onError(msg)
  }
})