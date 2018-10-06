const options1 = {
  el: document.querySelector('.cube-container1'),
  sideLength: '120px',
  surface: [{text: '1'}, {text: '2'}, {text: '3'}, {text: '4'}, {text: '5'}, {text: '6',}]
}

const options2 = {
  el: document.querySelector('.cube-container2'),
  sideLength: '120px',
  surface: [
    {
      background: {image: 'url(./imgs/cube1.png)', size: 'cover'}
    }, {
      background: {image: 'url(./imgs/cube2.png)', size: 'cover'}
    }, {
      background: {image: 'url(./imgs/cube3.png)', size: 'cover'}
    }, {
      background: {image: 'url(./imgs/cube4.png)', size: 'cover'}
    }, {
      background: {image: 'url(./imgs/cube5.png)', size: 'cover'}
    }, {
      background: {image: 'url(./imgs/cube6.png)', size: 'cover'}
    }
  ]
}

let cube1 = new Cube(options1),
    cube2 = new Cube(options2)

let input = document.getElementsByTagName('input'),
    random = document.querySelector('.random-btn'),
    reset = document.querySelector('.reset-btn'),
    span = document.getElementsByTagName('span')

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener('input', () => {
    let x = input[0].value,
        y = input[1].value,
        z = input[2].value

    cube1.rotate(x, y, z)
    cube2.rotate(x, y, z)
    span[0].innerText = `rotateX : ${x}deg`
    span[1].innerText = `rotateY : ${y}deg`
    span[2].innerText = `rotateZ : ${z}deg`
  })
}

random.addEventListener('click', () => {
  let x = Math.round(Math.random() * 1600) + 400,
      y = Math.round(Math.random() * 1600) + 400,
      z = Math.round(Math.random() * 1600) + 400

  cube1.rotateAn(x, y, z)
  cube2.rotateAn(x, y, z)
  input[0].value = x
  input[1].value = y
  input[2].value = z
  span[0].innerText = `rotateX : ${x}deg`
  span[1].innerText = `rotateY : ${y}deg`
  span[2].innerText = `rotateZ : ${z}deg`
})

reset.addEventListener('click', () => {
  cube1.rotateAn(0, 0, 0)
  cube2.rotateAn(0, 0, 0)
  input[0].value = 0
  input[1].value = 0
  input[2].value = 0
  span[0].innerText = 'rotateX : 0deg'
  span[1].innerText = 'rotateY : 0deg'
  span[2].innerText = 'rotateZ : 0deg'
})