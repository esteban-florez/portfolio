const IMAGES = {
  novaship: ['register', 'profile', 'internship', 'offers'],
  todo: ['light', 'dark'],
  uptavs: ['stats', 'dashboard', 'courses', 'profile', 'payments'],
} as const

let folder: keyof typeof IMAGES
let current = 0
const screenshots = document.querySelectorAll<HTMLDivElement>('[data-images]')
const modal = document.querySelector('#gallery') as HTMLDialogElement
const closeButton = document.querySelector('#close-gallery') as HTMLButtonElement
const previousButton = document.querySelector('#previous') as HTMLButtonElement
const nextButton = document.querySelector('#next') as HTMLButtonElement

previousButton.addEventListener('click', () => {
  current--
  console.log(current)
  updateImage()
})

nextButton.addEventListener('click', () => {
  current++
  console.log(current)
  updateImage()
})

closeButton.addEventListener('click', () => {
  modal.close()
  document.documentElement.removeAttribute('style')
})

screenshots.forEach(screenshot => {
  screenshot.addEventListener('click', openGallery)
})

async function openGallery(event: Event) {
  const { dataset } = event.currentTarget as HTMLElement
  folder = dataset.images as keyof typeof IMAGES 
  
  updateImage()

  modal.showModal()
  document.documentElement.style.overflow = 'hidden'
}

function updateImage() {
  const imgElement = modal.children[0] as HTMLImageElement
  const filename = IMAGES[folder][current]
  imgElement.src = `/projects/${folder}/${filename}.png`
}
