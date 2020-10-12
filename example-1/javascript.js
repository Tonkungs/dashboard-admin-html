let mainNav = document.getElementById('main-nav')
let mainAside = document.getElementById('aside-menu')
let mainbars = document.getElementById('bars')
let maintimes = document.getElementById('times')


mainNav.addEventListener('click', () => {
    if (!mainAside.style.left || mainAside.style.left != '0px') {
        mainAside.classList.toggle("aside-show")
        mainbars.classList.toggle("icon-hide")
        maintimes.classList.toggle("icon-hide")
    } else {
        mainAside.classList.toggle("aside-show")
        mainbars.classList.toggle("icon-hide")
        maintimes.classList.toggle("icon-hide")
    }
})