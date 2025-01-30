import { initTooltips } from 'flowbite'
import { REM, GAP } from '../consts'

let running = true
const carousel = document.querySelector('#carousel') as HTMLElement
const imgs = document.querySelectorAll('[data-logo]') as NodeListOf<HTMLImageElement>

carousel.addEventListener('mouseenter', () => {
  running = false
})

carousel.addEventListener('mouseleave', () => {
  running = true
  requestAnimationFrame(animate)
})

imgs.forEach((img, index) => {
  img.style.left = `${GAP * index + REM}px`
  img.style.transition = 'filter 300ms'
})

requestAnimationFrame(animate)

setTimeout(() => {
  initTooltips()
})

function animate() {
  if (!running) return

  imgs.forEach(img => {
    const { right } = img.getBoundingClientRect()
    const left = parseInt(img.style.left)
  
    if (right > 0) {
      img.style.left = `${left - 1}px`
      return
    }
  
    img.style.left = `${2992}px`
  })

  requestAnimationFrame(animate)
}
