"use strict";
const softSkillsAnimation = document.querySelectorAll('.soft-skills');
const animationImg = document.querySelectorAll('.img-fluid');
const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-animation');
            }
            else {
                entry.target.classList.remove('scroll-animation')

            }

        })
    },
    { threshold: 0.5
    });
//
softSkillsAnimation.forEach((elements) =>{
    observer.observe(elements);
});
animationImg.forEach((elements) => {
    observer.observe(elements);
});


//cursor
document.addEventListener('mousemove', function(event) {
    const circleCursor = document.querySelector('.circle-cursor');
    circleCursor.style.left = event.clientX + 'px';
    circleCursor.style.top = event.clientY + 'px';
});

