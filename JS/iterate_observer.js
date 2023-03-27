var options = {
    //  root: document.querySelector('.section'),
    // rootMargin: '0px',
    threshold: 0.25 // trigger only when element comes into view completely
};
var ob = new IntersectionObserver((entries, observer) => {
  entries[0].target.classList.toggle('anime');
  console.log(entries[0].isIntersecting);
}, options);

// var callback = (entries, observer) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {

//         entry[0].target.classList.add("anime")
 
//     }
//     })
// }


// observe all sections, when coming into view, change color
document.querySelectorAll('.section').forEach((item) => {
  ob.observe(item);

  
});
