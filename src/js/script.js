const mobileBtn = document.querySelector('.btn-mobile');
const navLinks = document.getElementById('nav-links');
const icon = mobileBtn.querySelector('i');
const header = document.getElementById('header')
const linkNavbar = document.querySelector('.link-navbar')

mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});

window.addEventListener('scroll', () =>{
    if (window.scrollY > 0) {
        header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none'
    }
})
linkNavbar.addEventListener('click', () => {
    mobileBtn.click()
})