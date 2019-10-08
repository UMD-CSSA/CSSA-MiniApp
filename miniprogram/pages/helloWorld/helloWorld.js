// pages/helloWorld/helloWorld.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btnCount: 1,
    btnBaseText: 'click me ',
    btnText: 'click me!'
  },

  buttonTap() {
    var btnCount = this.data.btnCount + 1
    var btnText = this.data.btnBaseText + btnCount

    this.setData({
      btnCount: btnCount,
      btnText: btnText
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 监听用户滑动页面事件
   */
  onPageScroll(options) {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})