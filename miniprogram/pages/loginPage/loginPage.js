// pages/loginPage/loginPage.js
Page({

  /**
   * Data in page
   */
  data: {
    nickName: "Nick Name Here!"
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
})