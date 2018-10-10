let isExtended = false
const nav = document.getElementById("toggle-nav")
const toggleNav = () => {
    if (!isExtended) {
        nav.classList.add('extended')
        document.body.classList.add('nav-open')
    } else {
        nav.classList.remove('extended')
        document.body.classList.remove('nav-open')
    }
    isExtended = !isExtended
}
for (item of document.getElementsByTagName('a')) {
    item.addEventListener('click' , e => {
        if (isExtended) toggleNav()
    })
}
// document.body.addEventListener('click', (e) => {
//     if (isExtended && !e.target.classList.contains('nav-swipe-wrapper')) {
//         toggleNav()
//     }
// })
