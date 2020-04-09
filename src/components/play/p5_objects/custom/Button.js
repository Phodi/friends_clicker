import Clickable from "../Clickable"
class Button extends Clickable {
  onClick = null
  text = ""
  textSize = 16
  font = null
  font_y = 0

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

  draw(p5) {
    super.draw(p5)
    this.__drawText(p5)
  }
}

export default Button
