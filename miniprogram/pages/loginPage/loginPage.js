// pages/loginPage/loginPage.js
Page({

  /**
   * 页面的初始数据
   */
  // data: {},

  onGotUserInfo(response) {
    console.warn(response.detail)
    this.setData({
      avatarUrl: response.detail.userInfo.avatarUrl,
      nickName: response.detail.userInfo.nickName
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.login({
      success(response) {
        console.warn(response)
        // if (res.code) {
        // wx.request({
        //   url: 'https://test.com/onLogin',
        //   data: {
        //     code: res.code
        //   }
        // })
        // } else {
        // console.log('登录失败！' + res.errMsg)
        // }
      }
    })
  },
})