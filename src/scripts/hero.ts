const greeting = document.querySelector('#greeting') as HTMLElement
const nameEl = document.querySelector('#name') as HTMLElement
const title = document.querySelector('#title') as HTMLElement
const heroText = document.querySelector('#hero-text') as HTMLElement

fadeIn(greeting, 1, 0)
fadeIn(nameEl, 1, .5)
fadeIn(title, 1, .5)
fadeIn(heroText, 0.25, 1.5, false)

function fadeIn(element: HTMLElement, duration: number, delay: number, translate = true) {
  element.style.opacity = '0'
  if (translate) {
    element.style.transform = 'translateY(-2rem)'
  }

  requestAnimationFrame(() => {
    element.style.transition 
      = `opacity ${duration}s ${delay}s, transform ${duration}s ${delay}s`

    element.style.opacity = '1'
    if (translate) {
      element.style.transform = ''
    }
  })
}
