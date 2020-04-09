import Clickable from "../Clickable"
class Button extends Clickable {
  //Centered is forced true to accomodate click resizing effect
  onClick = null
  text = ""
  textSize = 16
  font = null
  font_y = 0

  //Click response
  pressed = false
  b_scale = 0.1 //Rate that button will grow
  _onClick = () => {
    this.pressed = true
  }

  constructor(
    img_url,
    init_x = 0,
    init_y = 0,
    font = null,
    font_y = 0,
    init_text = "Text",
    init_textSize = 16
  ) {
    super(img_url, init_x, init_y)
    this.text = init_text
    this.textSize = init_textSize
    this.font = font
    this.font_y = font_y
    this.n_x_scale = 1
    this.n_y_scale = 1
  }

  __drawText(p5) {
    if (this.font != null) p5.textFont(this.font)
    p5.textAlign(p5.CENTER)
    p5.textSize(this.textSize)
    if (this.centered) {
      p5.text(this.text, this.x, this.y + this.font_y)
    } else {
      p5.text(
        this.text,
        this.x + this.draw_width / 2,
        this.y + +this.font_y + this.draw_height / 2
      )
    }
  }

  setup(p5) {
    super.setup(p5)
    this.__drawText(p5)
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
    this.__drawText(p5)
    this.pressed = false
  }
}

export default Button
