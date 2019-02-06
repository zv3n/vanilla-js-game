export default class Counter {
  playersPoints = 0
  birdsPoints = 0

  constructor() {
    this.el = this.render()
    this.update()
  }

  render() {
    const el = document.createElement('div')
    el.className = 'counter'
    document.body.insertAdjacentElement('beforeend', el)
    return el
  }

  addPlayersPoint() {
    this.playersPoints++
    this.update()
  }

  addBirdsPoint() {
    this.birdsPoints++
    this.update()
  }

  update() {
    this.el.innerHTML = this.playersPoints + ' : ' + this.birdsPoints
  }
}
