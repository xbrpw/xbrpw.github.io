function randomPick(array) {
  return array[
    Math.floor(
      Math.random() * array.length
    )
  ]
}

// Use random emoji from list
const emoji = '😂 😱 😍 😘 😜 😎 🤠 😸 🦁 🐸 🌞 🌝 😧'.split(' ')

document.querySelector('h2').textContent = randomPick(emoji)

// Set random background gradient
const colors =  [
  {bg1: 'pink', bg2: 'red'},
  {bg1: 'orange', bg2: 'orangered'},
  {bg1: 'yellow', bg2: 'chocolate'},
  {bg1: 'springgreen', bg2: 'green'},
  {bg1: 'lightskyblue', bg2: 'blue'},
  {bg1: 'mediumpurple', bg2: 'indigo'},
  {bg1: 'plum', bg2: 'purple'},
]

Object.entries(
  randomPick(colors)
).forEach(([key, value]) => 
  document.body.style.setProperty(`--${key}`, value)
)

// Add sunglasses
setTimeout(() =>
  document.querySelector('h1').style.top = '47.5%',
  750
)

// Update scaling factor on window load and resize
Array('load', 'resize').forEach(event =>
  window.addEventListener(event, e => {
    document.body.style.setProperty(
      '--innerWidth',
      Math.min(innerWidth, innerHeight)
    )
  })
)