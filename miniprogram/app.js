//app.js
App({

  /**
   * Called when an error callback was executed.
   */
  onError(msg) {
    wx.showModal({
      title: 'Error',
      content: msg
    })
  }
})