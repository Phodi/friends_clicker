class Sprite {
  img = null //image object
  img_url = null

  centered = false

  x = 0
  y = 0

  //actual top-left position to make the sprite centered
  __draw_x1 = 0
  __draw_y1 = 0
  __draw_x2 = 0
  __draw_y2 = 0

  scale_x = 1
  scale_y = 1

  //sprite's original scale
  img_width = 0
  img_height = 0

  //the scale sprite will be draw as
  draw_width = 0
  draw_height = 0

  constructor(img_url, init_x = 0, init_y = 0) {
    this.img_url = img_url
    this.x = init_x
    this.y = init_y
  }

  calcDrawCoord() {
    this.draw_width = this.img_width * this.scale_x
    this.draw_height = this.img_height * this.scale_y

    if (this.centered) {
      this.__draw_x1 = this.x - this.draw_width / 2
      this.__draw_y1 = this.y - this.draw_height / 2
    } else {
      this.__draw_x1 = this.x
      this.__draw_y1 = this.y
    }
    this.__draw_x2 = this.draw_width
    this.__draw_y2 = this.draw_height
  }

  setPos(x, y, centered = false) {
    this.x = x
    this.y = y
    this.centered = centered
  }

  setScale(x, y) {
    this.scale_x = x
    this.scale_y = y
  }

  preload(p5) {
    this.img = p5.loadImage(this.img_url)
  }

  setup(p5) {
    this.img_width = this.img.width
    this.img_height = this.img.height

    this.calcDrawCoord()
    p5.image(
      this.img,
      this.__draw_x1,
      this.__draw_y1,
      this.__draw_x2,
      this.__draw_y2
    )
  }

  draw(p5) {
    this.calcDrawCoord()
    p5.image(
      this.img,
      this.__draw_x1,
      this.__draw_y1,
      this.__draw_x2,
      this.__draw_y2
    )
  }
}

export default Sprite
