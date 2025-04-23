const drawer = document.querySelector('#drawer')
const openBtn = document.querySelector('#drawer-open')
const closeBtn = document.querySelector('#drawer-close')

openBtn?.addEventListener('click', () => {
  drawer?.classList.remove('-x-translate-full')
})

closeBtn?.addEventListener('click', () => {
  drawer?.classList.add('-x-translate-full')
})
