'use strict'
//Video
const videos = document.querySelectorAll('.video');

const videoPlaying = () => {
   videos.forEach(video => {
      video.addEventListener('mouseover', () => {
         video.play()
      });
      video.addEventListener('mouseout', () => {
         video.pause()
      });
   })
}

videoPlaying();

//Sidenav
const navbar = document.querySelector('.navbar');
const navbarLinks = document.querySelectorAll('.navbar__list-link');
const menuButton = document.querySelector('.menu');
const targets = document.querySelectorAll('.target');
const wrappers = document.querySelectorAll('.wrapper');
const sections = document.querySelectorAll('section');

const navbarScroll = () => {
   wrappers.forEach((wrapper, i) => {
      if (window.pageYOffset >= wrapper.offsetTop - 100) {
         navbarLinks.forEach(navbarLink => {
            navbarLink.classList.remove('change');
         })
         navbarLinks[i].classList.add('change');
      } 
   });
}

navbarScroll();

window.addEventListener('scroll', () => {
   navbarScroll();
})
window.addEventListener('resize', () => {
   window.location.reload();
})

const navbarWork = () => {
   navbar.inert = true;

   menuButton.addEventListener('click', () => {
      targets.forEach(item => item.classList.toggle('change'));
      navbar.inert = !navbar.inert;
   });

   wrappers.forEach(item => item.addEventListener('click', () => {
      targets.forEach(item => item.classList.remove('change'));
      navbar.inert = true;
   }));
}

navbarWork();