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

    console.warn(res.windowWidth)
    console.warn(res.windowHeight)

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
      winWidth: res.windowWidth,
      winHeight: res.windowHeight,
      imgHeight: _imgHeight,
      imgWidth: _imgWidth,
      btnHeight: _btnHeight,
      btnWidth: _btnWidth,
      btnMarginRight: _imgWidth * 3 / 25, // 90 / 750,
      btnMarginTop1: _imgHeight / 5, // * 270 / 1350,
      btnMarginTop2: _imgHeight / 5 + _btnHeight * 11 / 10,
      btnMarginTop3: _imgHeight / 5 + _btnHeight * 11 / 5,
      btnMarginTop4: _imgHeight / 5 + _btnHeight * 11 / 10 * 3,
    })
  },
  onClicked(event) {
    if (!event.detail)
      getApp().onError("evemt.detail not found!")

    // console.info(event.detail)
    const x = event.detail.x
    const y = event.detail.y

    if (this.data.winWidth - x < this.data.btnMarginRight + this.data.btnWidth
      && this.data.winWidth - x > this.data.btnMarginRight) {

      if (y < this.data.btnMarginTop2 && y > this.data.btnMarginTop1) {
        wx.navigateTo({
          url: '../departmentIntro/departmentIntro',
        })
      }

      else if (y < this.data.btnMarginTop3 && y > this.data.btnMarginTop2) {
        wx.navigateTo({
          url: '../handbook/handbook',
        })
      }

      else if (y < this.data.btnMarginTop4 && y > this.data.btnMarginTop3) {
        console.warn("Button 3!")
      }
    }
  },
  /* Color Ball*/ 
  loadColorBall(){
    const ctx = wx.createCanvasContext("colorBall")
    const res = wx.getSystemInfoSync()
    const winHeight = res.windowHeight
    const winWidth = res.windowWidth
    /* ball constructor */ 
    var Ball = function (x, y, vx, vy, radius, color) {
      this._x = x
      this._y = y
      this.x = x
      this.y = y
      this.vx = vx
      this.vy = vy
      this.radius = radius
      this.color = color
    }
    // ball position
    Ball.prototype.draw = function () {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
      ctx.fillStyle = this.color
      ctx.fill()
    }
    // ball move
    Ball.prototype.run = function (t) {
      if (this.x > canvas.width || this.y < 0) {
        this.x = this._x
        this.y = this._y
      }
      this.x += t * this.vx
      this.y += t * this.vy
      this.draw()
    }
    
  }
})

