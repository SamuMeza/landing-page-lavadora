const navBar = document.getElementById('navBar')
const navList = document.querySelector('.nav-list')
const SideBar = document.getElementById('sider-Bar')

if (window.innerWidth >= 720) {
  navList.style.transform = 'rotate(-90deg)'

  navBar.innerHTML = `<a class="sidebar-item" href="/index.html">Inicio</a>
    <a class="sidebar-item" href="/index.html#section2">Sobre el Servicio</a>
    <a class="sidebar-item" href="/index.html#section3">Servicios Ofrecidos</a>
    <a class="sidebar-item" href="/index.html#section4">Nuestros Beneficios</a>
    <a class="sidebar-item" href="/index.html#section5">Solicita tu Reparación</a>
  `
}