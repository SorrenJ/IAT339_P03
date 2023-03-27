var options = {
    //  root: document.querySelector('.section'),
    // rootMargin: '0px',
    threshold: 1 // trigger only when element comes into view completely
};
var ob = new IntersectionObserver((entries, observer) => {
  entries[0].target.classList.toggle('slideleft');
}, options);

// observe all sections, when coming into view, change color
document.querySelectorAll('.slideleftInitial').forEach((item) => {
  ob.observe(item);
});
