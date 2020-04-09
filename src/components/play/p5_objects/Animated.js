class Animated {
  frames = [] //image objects
  img_urls = []

  curFrame = 0

  //deltatime
  _dtAcc = 0
  speed = 0 //how many ms between frame

  centered = false

  x = 0
  y = 0

  //actual top-left position to make the sprite centered
  _draw_x1 = 0
  _draw_y1 = 0
  _draw_x2 = 0
  _draw_y2 = 0

  scale_x = 1
  scale_y = 1

  //sprite's original scale
  img_width = 0
  img_height = 0

  //the scale sprite will be draw as
  draw_width = 0
  draw_height = 0

  constructor(img_urls, speed = -1, init_x = 0, init_y = 0) {
    this.img_urls = img_urls
    this.x = init_x
    this.y = init_y
    this.speed = speed
  }

  setFrame(target_frame) {
    if (target_frame >= this.frames.length || target_frame < 0) {
      this.curFrame = 0
    } else {
      this.curFrame = target_frame
    }
  }

  advanceFrame() {
    this.curFrame++
    if (this.curFrame >= this.frames.length) this.curFrame = 0
  }

  calcDrawCoord() {
    this.draw_width = this.img_width * this.scale_x
    this.draw_height = this.img_height * this.scale_y

    if (this.centered) {
      this._draw_x1 = this.x - this.draw_width / 2
      this._draw_y1 = this.y - this.draw_height / 2
    } else {
      this._draw_x1 = this.x
      this._draw_y1 = this.y
    }
    this._draw_x2 = this.draw_width
    this._draw_y2 = this.draw_height
  }

  setPos(x, y, centered = false) {
    this.x = x
    this.y = y
    this.centered = centered
    this.calcDrawCoord()
  }

  setScale(x, y) {
    this.scale_x = x
    this.scale_y = y
    this.calcDrawCoord()
  }

  preload(p5) {
    this.frames = this.img_urls.map((url) => p5.loadImage(url))
  }

  setup(p5) {
    if (this.curFrame < 0) this.curFrame = 0
    if (this.curFrame >= this.frames.length) this.curFrame = 0

    this.img_width = this.frames[0].width
    this.img_height = this.frames[0].height

    this.calcDrawCoord()
    p5.image(
      this.frames[this.curFrame],
      this._draw_x1,
      this._draw_y1,
      this._draw_x2,
      this._draw_y2
    )
  }

  draw(p5) {
    if (this.curFrame < 0) this.curFrame = 0
    this.calcDrawCoord()
    p5.image(
      this.frames[this.curFrame],
      this._draw_x1,
      this._draw_y1,
      this._draw_x2,
      this._draw_y2
    )
    this._dtAcc += p5.deltaTime
    if (this._dtAcc >= this.speed) {
      this._dtAcc = 0
      if (this.speed >= 0) this.advanceFrame()
    }
  }
}

export default Animated
