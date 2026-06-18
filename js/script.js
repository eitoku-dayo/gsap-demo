gsap.registerPlugin(ScrollTrigger);

const strands = document.querySelectorAll('.strand');
const crosses = document.querySelectorAll('.cross');

[...strands, ...crosses].forEach(path => {
    const len = path.getTotalLength();
    path.style.strokeDasharray = len;
    path.style.strokeDashoffset = len;
});

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.animation',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
    }
});

strands.forEach((path, i) => {
    tl.to(path, {
        strokeDashoffset: 0,
        duration: 1,
        ease: 'power1.out',
    }, i * 0.15);
});

crosses.forEach((path, i) => {
    tl.to(path, {
        strokeDashoffset: 0,
        duration: 0.4,
        ease: 'none',
    }, 1.4 + i * 0.06);
});

tl.to('#js-footer__info', {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: 'power2.out',
}, 3.0);
