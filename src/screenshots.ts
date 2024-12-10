const IMAGES = {
  novaship: ['register', 'profile', 'internship', 'offers'],
  todo: ['light', 'dark'],
  uptavs: ['stats', 'dashboard', 'courses', 'profile', 'payments'],
} as const

const screenshots = document.querySelectorAll<HTMLDivElement>('[data-images]')
const modal = document.querySelector('#gallery') as HTMLDialogElement
const galleryImage = document.querySelector('#gallery-image') as HTMLImageElement
const slides = document.querySelector('#gallery-slides') as HTMLDivElement
const slideTemplate = document.querySelector('#slide-template') as HTMLTemplateElement
const closeButton = document.querySelector('#gallery-close') as HTMLButtonElement
const previousButton = document.querySelector('#gallery-previous') as HTMLButtonElement
const nextButton = document.querySelector('#gallery-next') as HTMLButtonElement

let folder: keyof typeof IMAGES
let current = 0
let max = 0
let timer: number | null = null
const url = (filename: string) => `/projects/${folder}/${filename}.png`

closeButton.addEventListener('click', () => {
  modal.close()
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

modal.addEventListener('close', () => {
  document.documentElement.removeAttribute('style')
})

screenshots.forEach(screenshot => {
  screenshot.addEventListener('click', openGallery)
})

modal.addEventListener('mousemove', () => {
  console.log('resetting')
  resetOpacityTimer()
})

modal.addEventListener('click', () => {
  console.log('resetting')
  resetOpacityTimer()
})

async function openGallery(event: Event) {
  const { dataset } = event.currentTarget as HTMLElement
  folder = dataset.images as keyof typeof IMAGES 

  const slideImages = IMAGES[folder].map((filename, index) => {
    const fragment = slideTemplate.content.cloneNode(true) as DocumentFragment
    const slideImage = fragment.children[0] as HTMLImageElement

    slideImage.src = url(filename)
    slideImage.addEventListener('click', () => {
      current = index
      updateImage()
    })

    return slideImage
  })

  slides.replaceChildren(...slideImages)

  current = 0
  max = IMAGES[folder].length - 1

  updateImage()

  resetOpacityTimer()
  modal.showModal()
  document.documentElement.style.overflow = 'hidden'
}

function updateImage() {
  const unselected = ['cursor-pointer', 'ring-transparent']
  const selected = ['ring-green-400', 'pointer-events-none']

  Array.from(slides.children)
    .forEach(slide => {
      slide.classList.remove(...selected)
      slide.classList.add(...unselected)
    })

  const currentSlide = slides.children.item(current) as HTMLImageElement

  currentSlide.classList.remove(...unselected)
  currentSlide.classList.add(...selected)

  const filename = IMAGES[folder][current]
  galleryImage.src = url(filename)
}

function resetOpacityTimer() {
  if (timer !== null) {
    clearTimeout(timer)
  }
  
  const controls = slides.parentElement as HTMLDivElement
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
