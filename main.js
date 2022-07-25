window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
    // pega o valor do scroll na possição Y e soma mas a altura da tela innerHeigth e divide ao meio
    // linha alvo
    const targetLine = scrollY + innerHeight / 2

    // verificar se a seção passou da linha
    // quais dados vou precisar:

    // vamos pegar o topo do id=home
    // o topo da seção
    const sectionTop = section.offsetTop
    // a altura da seção
    const sectionHeight = section.offsetHeight

    // o topo da seção chegou ou ultrapassou a linha alvo
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop


    // informações dos dados e da lógica

    // verificar se a base está abaixo da linha alvo
    // quais dados vou precisar?

    // a seção termina onde?
    const sectionEndsAt = sectionTop + sectionHeight

    // o final da seção passou da linha alvo
    const sectionEndOassedTargetline = sectionEndsAt <= targetLine

    // limites da seção
    const sectinBoudaries = sectionTopReachOrPassedTargetline && !sectionEndOassedTargetline

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectinBoudaries) {
        menuElement.classList.add('active')
    }

}












function showNavOnScroll() {
    const navigation = document.querySelector('#navigation')
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll() {
    // const navigation = document.querySelector('#navigation')
    if (scrollY > 550) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

// Abri o menu
function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}


ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700
}).reveal(`
  #home,
  #home img,
  #home .stats,
  #services header,
  #services .card
  #about,
  #about header,
  #about .content`)