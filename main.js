const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.height = window.innerHeight
canvas.width = window.innerWidth
canvas.style = "background-color:#556479;"
//resize the window

window.addEventListener("resize", (e) => {
  e.preventDefault()
  canvas.height = window.innerHeight
  canvas.width = window.innerWidth
})

let RandomNum = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

// basic canvas template

//setup game engine 

/* 
TODO: 
  add objects
  add gravity
  basic pick and throw 
*/
class object {
  constructor(x, y, c) {
    this.x = x
    this.y = y
    this.xsp = 0
    this.ysp = 0
    this.color = c
  }
  draw() {
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.rect(this.x, this.y, 2, 2)
    ctx.fill()
  }
  walk() {
    let dir = RandomNum(-1, 4)
    if (dir === 0) {
      this.ysp = -1
    } else if (dir === 1) {
      this.ysp = 1
    } else if (dir === 2) {
      this.xsp = -1
    } else if (dir === 3) {
      this.xsp = 1
    }
  }
  update() {
    this.x += this.xsp
    this.y += this.ysp
  }
  limit() {
    this.x = clamp(this.x, 0, canvas.width)
    this.y = clamp(this.y, 0, canvas.height)
  }
}
let w = canvas.width
let h = canvas.height



let walkerA = new object((w / 2) - 200, h / 2, "#fff")
let walkerB = new object(w / 2, h / 2, "#a2cffe")
let walkerC = new object((w / 2) + 200, h / 2, "#b7dadd")
//game loop
setInterval(() => {
  walkerA.draw()
  walkerA.walk()
  walkerA.update()
  walkerA.limit()


  walkerB.draw()
  walkerB.walk()
  walkerB.update()
  walkerB.limit()


  walkerC.draw()
  walkerC.walk()
  walkerC.update()
  walkerC.limit()
}, 17)
