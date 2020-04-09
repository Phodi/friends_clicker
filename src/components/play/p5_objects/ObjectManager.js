class ObjectManager {
  constructor() {
    this.objList = []
  }

  addObj(obj) {
    this.objList.push(obj)
  }
  preload = (p5) => {
    this.objList.forEach((obj) => {
      if ("preload" in obj) obj.preload(p5)
    })
  }
  setup(p5) {
    this.objList.forEach((obj) => {
      if ("setup" in obj) obj.setup(p5)
    })
  }
  draw(p5) {
    this.objList.forEach((obj) => {
      if ("draw" in obj) obj.draw(p5)
    })
  }
  mousePressed(p5) {
    this.objList.forEach((obj) => {
      if ("mousePressed" in obj) obj.mousePressed(p5)
    })
  }
}

export default ObjectManager
