// miniprogram/pages/users/users.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    test: '<view class="navbars"> < view class= "navbar" > <navigator url="../index/index" hover-class="navigator-hover"><view class="nav_img"><icon class="iconfont icon-shouye"></icon></view><view class="nav_text"> \n Mainpage</view></navigator></view><view class="navbar"><navigator url="../users/users" hover-class="navigator-hover"><view class="nav_img"><icon class="iconfont icon-fenleiorguangchangorqita"></icon></view><view class="nav_text"> \n Users</view></navigator></view><view class="navbar"><navigator url="../activities/activities" hover-class="navigator-hover"><view class="nav_img"><icon class="iconfont icon-shezhi"></icon></view><view class="nav_text"> \n Activities</view></navigator></view> </view>'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var curr_test = data.test;
    this.setData({
      test: curr_test
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})