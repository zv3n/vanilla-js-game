export default class Bird {
  //shortcut fuer Standartwerte -> ist eigetlich im constructor this.defaultConfig usw.
  defaultConfig = {
    color: 'black',
    speed: 2 + Math.random() * 8,
    position: 0,
  }
  constructor(config) {
    config = { ...this.defaultConfig, ...config }
    const { color, speed, position, removeBird } = config

    this.color = color
    this.position = position
    this.removeBrid = removeBird
    this.speed = speed
    this.el = this.render()
    this.addClickHandler()
  }

  addClickHandler() {
    this.el.addEventListener('click', () => console.log('bird was shot'))
  }

  update() {
    this.position = this.position + this.speed
    if (this.position > window.innerWidth) {
      this.removeBrid(this)
      this.el.remove()
    } else {
      this.el.style.left = this.position + 'px'
    }
  }

  render() {
    const el = document.createElement('div')
    el.className = 'bird'
    el.style.background = this.color
    document.body.insertAdjacentElement('beforeend', el)
    return el
  }
}
