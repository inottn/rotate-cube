class Cube {
  constructor(options) {
    this.initCube(options)
  }

  handleOptions(options) {
    this.el = options.el
    this.perspective = options.perspective || 2000
    this.sideLength = options.sideLength
    this.duration = options.duration || '2s'
    this.surface = options.surface
    this.useHTMLString = options.useHTMLString || false

    this.handleSurfaceOptions(this.surface)
  }

  handleSurfaceOptions(surfaceOptions) {
    for (let i = 0; i < 6; i++) {
      this.surface[i].text = surfaceOptions[i].text || ''
    }
  }

  createCube() {
    let template = `
      <div class="cube">
        <div class="cube-surface cube-surface-1"></div>
        <div class="cube-surface cube-surface-2"></div>
        <div class="cube-surface cube-surface-3"></div>
        <div class="cube-surface cube-surface-4"></div>
        <div class="cube-surface cube-surface-5"></div>
        <div class="cube-surface cube-surface-6"></div>
      </div>
    `

    this.el.innerHTML += template
    this.cube = this.el.lastElementChild
    this.cubeSurfaces = this.cube.children

    
    for (let i = 0, len = this.cubeSurfaces.length; i < len; i++) {
      if (this.surface[i].useHTMLString || (this.surface[i].useHTMLString === undefined && this.useHTMLString)) {
        this.cubeSurfaces[i].innerHTML = this.surface[i].text
      } else {
        this.cubeSurfaces[i].innerText = this.surface[i].text
      }
    }
  }

  setCubeStyle() {   
    this.cube.style.width = this.sideLength
    this.cube.style.height = this.sideLength
    this.cube.style.transition = `transform ${this.duration}`
  }

  setCubeSurfaceStyle() {
    let cubeSurfaces = this.cube.children

    for (let i = 0, len = cubeSurfaces.length; i < len; i++) {
      cubeSurfaces[i].style.width = this.sideLength
      cubeSurfaces[i].style.height = this.sideLength
    }

    cubeSurfaces[0].style.transform = `translateZ(${parseFloat(this.sideLength) / 2}px)`
    cubeSurfaces[1].style.transform = `rotateY(-90deg) translateZ(${parseFloat(this.sideLength) / 2}px)`
    cubeSurfaces[2].style.transform = `rotateX(90deg) translateZ(${parseFloat(this.sideLength) / 2}px)`
    cubeSurfaces[3].style.transform = `rotateX(-90deg) translateZ(${parseFloat(this.sideLength) / 2}px)`
    cubeSurfaces[4].style.transform = `rotateY(90deg) translateZ(${parseFloat(this.sideLength) / 2}px)`
    cubeSurfaces[5].style.transform = `rotateY(180deg) translateZ(${parseFloat(this.sideLength) / 2}px)`
    
    for (let i = 0, len = cubeSurfaces.length; i < len; i++) {
      if (this.surface[i].background) {
        for (let option in this.surface[i].background) {
          if (this.surface[i].background.hasOwnProperty(option)) {
            let a = option.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase())
            
            cubeSurfaces[i].style['background' + a] = this.surface[i].background[option]
          }
        }
      }
    }
  }

  initCube(options) {
    this.handleOptions(options)
    this.createCube()
    this.setCubeStyle()
    this.setCubeSurfaceStyle()
  }

  rotate(x, y, z) {
    this.cube.style.transition = ''
    this.cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`
  }

  rotateAn(x, y, z) {
    this.cube.style.transition = `transform ${this.duration}`
    this.cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`
  }
}