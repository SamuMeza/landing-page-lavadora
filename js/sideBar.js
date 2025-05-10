// Obtener elementos del DOM para el menu desplegable
const body = document.querySelector('body')
const navList = document.querySelector('.nav-list')
const menu = document.querySelector('.nav-item')
const sidebar = document.querySelector('.sidebar')
const sidebarItems = document.querySelectorAll('.sidebar-item')

// Evento click para el menu desplegable
menu.addEventListener('click', () => {
  sidebar.classList.toggle('hideSidebar')

  // Si el sidebar se oculta
  if(sidebar.classList.contains('hideSidebar')){
    menu.innerText = '|||'
    navList.style.transform = 'rotate(0deg)'
    body.style.overflow = 'auto'
  }else{

    // Si el sidebar se muestra
    menu.innerText = 'X'
    navList.style.transform = 'rotate(90deg)'
    body.style.overflow = 'hidden'
  }
})

// Evento para cerrar el sidebar si se hace click en un enlace
sidebarItems.forEach(item => {
  item.addEventListener('click', () => {
    if (!sidebar.classList.contains('hideSidebar')) {
      sidebar.classList.add('hideSidebar')
      menu.innerText = '|||'
      navList.style.transform = 'rotate(0deg)'
      body.style.overflow = 'auto'
    }
  })
})