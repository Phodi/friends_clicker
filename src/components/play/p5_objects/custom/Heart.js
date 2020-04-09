import Animated from "../Animated"
class Heart extends Animated {
  //Centered is forced true to accomodate click resizing effect

  //Click response
  pressed = false
  b_scale = 0.1 //Rate that button will grow
  _onClick = () => {
    this.advanceFrame()
    this.pressed = true
  }

  //Clickable components
  onClick = null
  mousePressed(p5) {
    if (this.centered) {
      if (
        p5.mouseX >= this.x - this.draw_width / 2 &&
        p5.mouseX <= this.x + this.draw_width / 2
      ) {
        if (
          p5.mouseY >= this.y - this.draw_height / 2 &&
          p5.mouseY <= this.y + this.draw_height / 2
        ) {
          if (this.onClick) this.onClick()
          if (this._onClick) this._onClick()
        }
      }
    } else {
      if (p5.mouseX >= this.x && p5.mouseX <= this.x + this.draw_width) {
        if (p5.mouseY >= this.y && p5.mouseY <= this.y + this.draw_height) {
          if (this.onClick) this.onClick()
          if (this._onClick) this._onClick()
        }
      }
    }
  }

  constructor(img_urls, init_x = 0, init_y = 0) {
    super(img_urls, -1, init_x, init_y)
    this.n_x_scale = 1
    this.n_y_scale = 1
  }

  setPos(x, y, centered = true) {
    super.setPos(x, y, true)
  }

  setScale(x, y) {
    this.n_x_scale = x
    this.n_y_scale = y
    super.setScale(x, y)
  }

  draw(p5) {
    super.draw(p5)
    if (this.pressed) {
      this.scale_x += this.b_scale
      this.scale_y += this.b_scale
    } else {
      this.scale_x = this.n_x_scale
      this.scale_y = this.n_y_scale
    }
    this.pressed = false
  }
}

export default Heart
