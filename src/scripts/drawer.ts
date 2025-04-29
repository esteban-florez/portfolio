const drawer = document.querySelector('#drawer')
const openBtn = document.querySelector('#drawer-open')

openBtn?.addEventListener('click', () => {
  drawer?.classList.remove('-translate-x-full')
})

window.addEventListener('click', (event: MouseEvent) => {
  const target = event.target as HTMLElement

  if (target.id === 'drawer-open') return

  const isCloseClick = target.dataset.drawerLink
    || !drawer?.contains(target)

  if (!isCloseClick) return
  drawer?.classList.add('-translate-x-full')
})
