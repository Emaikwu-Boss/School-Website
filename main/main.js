// CHANGE NAV BAR STYLE ON SCROLL


window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 0)
})