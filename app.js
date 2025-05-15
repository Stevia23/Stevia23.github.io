
const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
styleSwitcherToggle.addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open');
});


window.addEventListener('scroll', () => {
    if(document.querySelector('.style-switcher').classList.contains('open')) {
        document.querySelector('.style-switcher').classList.remove('open');
    }
});

const alternateStyles = document.querySelectorAll('.alternate-style');
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute('title')) {
            style.removeAttribute('disabled');
        } else {
            style.setAttribute('disabled', 'true');
        }
    });
}


const dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click', () => {
    dayNight.querySelector('i').classList.toggle('fa-sun');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});


window.addEventListener('load', () => {
    if(localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
        dayNight.querySelector('i').classList.add('fa-sun');
    } else {
        dayNight.querySelector('i').classList.add('fa-moon');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav a');
    const sections = document.querySelectorAll('.section');
    const aside = document.querySelector('.aside');
    const navToggler = document.querySelector('.nav-toggler');

  
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.querySelector('#home').classList.add('active');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
          
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            
            if(targetSection) {
                
                navLinks.forEach(link => link.classList.remove('active'));
                this.classList.add('active');
                
                sections.forEach(section => section.classList.remove('active'));
                targetSection.classList.add('active');
                
             
                if(aside.classList.contains('open')) {
                    aside.classList.remove('open');
                    navToggler.classList.remove('open');
                }
            }
        });
    });
   
    navToggler.addEventListener('click', () => {
        aside.classList.toggle('open');
        navToggler.classList.toggle('open');
    });

    // кнопка
    document.querySelector('.hire-me')?.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector('#contact');
        if(targetSection) {
          
            navLinks.forEach(link => link.classList.remove('active'));
            document.querySelector('.nav a[href="#contact"]').classList.add('active');
            
            sections.forEach(section => section.classList.remove('active'));
            targetSection.classList.add('active');
            
          
            if(aside.classList.contains('open')) {
                aside.classList.remove('open');
                navToggler.classList.remove('open');
            }
        }
    });
});

