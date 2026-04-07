const mobileBtn = document.querySelector('.btn-mobile');
const navLinks = document.getElementById('nav-links');
const icon = mobileBtn.querySelector('i');
const header = document.getElementById('header')
const linkNavbar = document.querySelector('.link-navbar')
const navBar = document.querySelector('.navbar ul')
const navBarLi = document.querySelector('.navbar li')

var lastScrollTop = 0;
var scrollTop = 0;

linkNavbar.addEventListener('click', () => {
    mobileBtn.click()
    header.style.top ='-130px'
})

mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});

window.addEventListener('scroll', () =>{
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        header.style.top ='-130px'
    } else {
        header.style.top = '0'

    }
    lastScrollTop = scrollTop;



    if (window.scrollY > 0) {
        header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
      

    } else {
        header.style.boxShadow = 'none'


    }
})



