import { IMAGES } from '../consts'

const slideshow = document.querySelector('#slideshow') as HTMLDialogElement
const covers = document.querySelectorAll<HTMLDivElement>('[data-cover]')
const allSlides = document.querySelectorAll<HTMLImageElement>('[data-slide]')
const allThumbnails = document.querySelectorAll<HTMLImageElement>('[data-thumbnail]')
const closeButton = document.querySelector('#slide-close') as HTMLButtonElement
const previousButton = document.querySelector('#slide-previous') as HTMLButtonElement
const nextButton = document.querySelector('#slide-next') as HTMLButtonElement

let project: keyof typeof IMAGES
let current = 0
let max = 0
let timer: number | null = null
let thumbnails: HTMLImageElement[] = []
let slides: HTMLImageElement[] = []

closeButton.addEventListener('click', () => {
  slideshow.close()
})

previousButton.addEventListener('click', () => {
  if (current <= 0) {
    current = max
  } else {
    current--
  }
  updateImage()
})

nextButton.addEventListener('click', () => {
  if (current >= max) {
    current = 0
  } else {
    current++
  }
  updateImage()
})

slideshow.addEventListener('close', () => {
  document.documentElement.removeAttribute('style')
})

covers.forEach(cover => {
  cover.addEventListener('click', openGallery)
})

slideshow.addEventListener('mousemove', resetOpacityTimer)
slideshow.addEventListener('click', resetOpacityTimer)

function openGallery(event: Event) {
  const { dataset } = event.currentTarget as HTMLElement
  project = dataset.cover as keyof typeof IMAGES

  thumbnails = Array.from(allThumbnails)
    .filter(thumb => thumb.dataset.thumbnail?.startsWith(project))

  slides = Array.from(allSlides)
    .filter(slide => slide.dataset.slide?.startsWith(project))

  current = 0
  max = IMAGES[project].length - 1

  allThumbnails.forEach(thumb => thumb.classList.add('hidden'))

  thumbnails.forEach((thumb, index) => {
    thumb.classList.remove('hidden')

    thumb.onclick = () => {
      current = index
      updateImage()
    }
  })

  updateImage()

  resetOpacityTimer()
  slideshow.showModal()
  document.documentElement.style.overflow = 'hidden'
}

function updateImage() {
  const unselected = ['cursor-pointer', 'ring-transparent']
  const selected = ['ring-green-400', 'pointer-events-none']

  thumbnails
    .forEach(slide => {
      slide.classList.remove(...selected)
      slide.classList.add(...unselected)
    })

  const currentThumbnail = thumbnails[current] as HTMLImageElement
  currentThumbnail.classList.remove(...unselected)
  currentThumbnail.classList.add(...selected)

  // show and hide slides
  allSlides.forEach(slide => slide.classList.add('hidden'))
  slides[current].classList.remove('hidden')
}

function resetOpacityTimer() {
  if (timer !== null) {
    clearTimeout(timer)
  }

  const controls = nextButton.parentElement as HTMLDivElement
  const invisible = ['opacity-0', 'pointer-events-none']
  const visible = ['opacity-100', 'transition-opacity']
  
  timer = setTimeout(() => {
    controls.classList.add(...invisible)
    controls.classList.remove(...visible)
    closeButton.classList.add(...invisible)
    closeButton.classList.remove(...visible)
    timer = null
  }, 500)
  
  controls.classList.remove(...invisible)
  controls.classList.add(...visible)
  closeButton.classList.remove(...invisible)
  closeButton.classList.add(...visible)
}
