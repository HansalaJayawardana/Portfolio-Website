let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    reset: true,
    distance: '20px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .projects-box, .contact-container', { origin: 'bottom' });

ScrollReveal().reveal('.home-content h1 ', { origin: 'left' });
ScrollReveal().reveal('.about-content h3 ', { origin: 'right' });

ScrollReveal().reveal('.home-content p, .about-content ', { origin: 'right' });


const typed = new Typed('.multiple-text', {
    strings: ['Front-end Developer', 'Back-end Developer', 'MobileApp Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    
    if (name && email && message) {
      alert('Thank you for your message, ' + name + '!');
      event.target.reset();
    } else {
      alert('Please fill in all fields.');
    }
  });