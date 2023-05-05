"use strict";
const softSkillsAnimation = document.querySelectorAll('.soft-skills')

const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-animation')
            }
            else {
                entry.target.classList.remove('scroll-animation')
            }

        })
    },
    { threshold: 0.5
    });
//
for (let i = 0; i < softSkillsAnimation.length; i++) {
    const elements = softSkillsAnimation[i];

    observer.observe(elements);
}

