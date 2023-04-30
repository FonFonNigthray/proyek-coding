const navMenu = document.querySelector('.nav_menu');
const navToggle = document.querySelector('.menu_toggle');
const navClose = document.querySelector('.menu_close');
const btn = document.getElementById('dark-mode-btn')
const nav = document.getElementById('nav')
const footer = document.querySelector('footer-main')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.style.top = '-300px';
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.style.top = '';
    })
}


// darkmode button 



btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')

    if(btn.innerText == 'Dark Mode'){
        btn.innerText = 'Light Mode'
        btn.style.backgroundColor = '#ff8dc7'
    }
    else{
        btn.innerText = 'Dark Mode'
        btn.style.backgroundColor = '#8d0b3d'
    }        
})

// scroll up button
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 450) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp);
