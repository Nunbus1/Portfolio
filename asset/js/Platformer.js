const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024
canvas.height = 576

const gravity = 0.2

class Player {
  constructor(position) {
    this.position = position
    this.velocity = {
      x: 0,
      y: 1,
    }
    this.height = 100
  }

  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, 100, this.height)
  }

  update() {
    this.draw();

    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    if (this.position.y + this.height + this.velocity.y < canvas.height) 
        this.velocity.y += gravity
    else this.velocity.y = 0
  }
}

const player = new Player({
  x: 0,
  y: 0,
})

const keys = {
    d: {
        pressed : false,
    },
    q: {
        pressed : false,
        
    },
    Space: {
        pressed : false,
    },
}

function animate() {
  window.requestAnimationFrame(animate)
  c.fillStyle = "grey"
  c.fillRect(0, 0, canvas.width, canvas.height)

  player.update()

  player.velocity.x = 0
  if(keys.d.pressed)
    player.velocity.x = 5
  else if(keys.q.pressed)
    player.velocity.x = -5
    
}

animate()

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = true
            break
        case 'q':
            keys.q.pressed = true
            break
        case ' ':
            player.velocity.y = -10
            break            
    }
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = false
            break
        case 'q':
            keys.q.pressed = false
            break
                 
    }
})