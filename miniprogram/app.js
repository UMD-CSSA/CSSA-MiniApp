//app.js
App({

  /**
   * Called when an error callback was executed.
   */
  onError(msg) {
    console.error(msg)
    wx.showModal({
      title: 'Error',
      content: msg
    })
  }
})