// pages/loginPage/loginPage.js
Page({

  /**
   * Data in page
   */
  data: {
    nickName: "Nick Name Here!"
  },

  /**
     * Lifecycle, called on render finished.
     */
  onReady() {
    this.loadCanvasCssaLogo()
  },

  /**
   * Called when an error callback was executed.
   */
  onError(msg) {
    getApp().onError(msg)
  },
  /**
   * Callback listener of the login button.
   *
   * @param {object} eventInfo Info of the triggered event (ignore it).
   */
  onLoginClicked(eventInfo) {
    // Log click event to console
    console.info('onLoginClicked() >>>')
    console.info(eventInfo)

    // Begin WeChat Login
    wx.login({
      success(response) {
        // Log to console
        console.info('wx.login()->success() >>>')
        console.info(response)

        // If succeeded / code exists
        if (response.code) {
          // Notify developers that login succeeded
          // Shall be removed before release
          wx.showModal({
            title: 'WeChat Login',
            content: 'Success! Code = ' + response.code,
          })

          // Notify CSSA Server
          wx.request({
            url: 'https://wxapp.umd-cssa.org/api/v0/login',
            // url: 'http://127.0.0.1:6006/api/v0/login',
            data: {
              code: response.code
            }
          })

        } else {
          // Log error
          getApp().onError('wx.login() failed >>>')
          getApp().onError(response.errMsg)
        }
      }
    })
  },

  /**
   * **IMPORTANT!** User info must be fetched from WeChat server in this way
   * (through a button with `open-type="getUserInfo"` and bind a function to
   * `bindgetuserinfo` field)!!!!!!
   *
   * @param {object} response The response returned from WeChat server.
   */
  onUserInfoReturned(response) {
    // Log trigger event to console
    console.info('onGotUserInfo() >>>')
    console.info(response)

    // If succeeded / user info exists
    if (response.detail.userInfo)
      // Update corresponding fields
      this.setData({
        avatarUrl: response.detail.userInfo.avatarUrl,
        nickName: response.detail.userInfo.nickName
      })

    else
      // Log error
      getApp().onError('onGotUserInfo() failed!')
  },
  loadCanvasCssaLogo() {
    // When canvas is not supported.
    if (!wx.createCanvasContext) {
      getApp().onError('Feature [canvas] not supported! Please update WeChat!')
      return
    }

    wx.getSystemInfo({
      success(res) {
        console.log(res)

        const screenWidth = res.screenWidth ?
          res.screenWidth : res.windowWidth
        const scaleFactor = screenWidth / 20
        const cc = wx.createCanvasContext("cssa-logo")

        cc.setStrokeStyle("#C00")
        cc.setLineWidth(10)
        cc.setLineCap("round")
        cc.setLineJoin("round")

        cc.rect(.5 * scaleFactor, .5 * scaleFactor, 19 * scaleFactor, 19 * scaleFactor)
        cc.moveTo(18 * scaleFactor, 2 * scaleFactor)
        cc.lineTo(2 * scaleFactor, 2 * scaleFactor)
        cc.lineTo(2 * scaleFactor, 14 * scaleFactor)
        cc.lineTo(18 * scaleFactor, 14 * scaleFactor)
        cc.moveTo(10 * scaleFactor, 2 * scaleFactor)
        cc.lineTo(10 * scaleFactor, 6 * scaleFactor)
        cc.lineTo(18 * scaleFactor, 6 * scaleFactor)
        cc.lineTo(18 * scaleFactor, 18 * scaleFactor)
        cc.moveTo(2 * scaleFactor, 18 * scaleFactor)
        cc.lineTo(10 * scaleFactor, 18 * scaleFactor)
        cc.lineTo(10 * scaleFactor, 10 * scaleFactor)
        cc.moveTo(2 * scaleFactor, 10 * scaleFactor)
        cc.lineTo(18 * scaleFactor, 10 * scaleFactor)
        cc.stroke()
        cc.draw()
      }
    })
  },
})