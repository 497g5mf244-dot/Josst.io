const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primaryNav');
if(navToggle){
  navToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
}

const revealEls = document.querySelectorAll('.reveal');
if(revealEls.length && 'IntersectionObserver' in window){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => observer.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in-view'));
}
