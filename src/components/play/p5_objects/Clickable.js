import Sprite from "./Sprite"
class Clickable extends Sprite {
  onClick = null
  _onClick = null
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
}

export default Clickable
