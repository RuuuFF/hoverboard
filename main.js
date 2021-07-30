const Hoverboard = {
  container: document.getElementById('container'),
  colors: ['#ff0000', '#ff8700', '#ffd300', '#deff0a', '#a1ff0a', '#0aff99', '#0aefff', '#147df5', '#580aff', '#be0aff'],
  SQUARES: 500,

  getRandomColor() {
    return Hoverboard.colors[Math.floor(Math.random() * Hoverboard.colors.length)]
  },

  setColor(element) {
    const color = Hoverboard.getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
  },

  removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
  },

  createSquares() {
    for (let i = 0; i < Hoverboard.SQUARES; i++) {
      const square = document.createElement('div')
      square.classList.add('square')
    
      square.addEventListener('mouseover', () => Hoverboard.setColor(square))
      square.addEventListener('mouseout', () => Hoverboard.removeColor(square))
    
      Hoverboard.container.appendChild(square)
    }
  }
}

Hoverboard.createSquares()