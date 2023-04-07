// const animateText = document.querySelector('.typing-demo');
// const section = document.querySelector('.wrapper');
// const options ={
//     root: null,
//     threshold: 0.5,
//     // rootMargin: "-150px"
    
//     };
    
// const observer = new IntersectionObserver(entries => {
//   if (entries[0].isIntersecting) {
//     animateText.style.opacity = 1;
//     animateText.style.animation = 'typing 2s steps(22), blink .5s step-end infinite alternate;';
//   } else {
//     animateText.style.opacity = 0;
//     animateText.style.animation = 'none';
//   }
// });

// observer.observe(section);

const typing = document.querySelectorAll('.typing-demo');

const options1 ={
root: null,
threshold: 0.5,
// rootMargin: "-150px"

};


const myObserver1 = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => { 
        if (!entry.isIntersecting){
            return;
        }
        console.log(entry);
        entry.target.classList.toggle("active-type");
        observer.unobserve(entry.target);
    });
}, options1);

typing.forEach (div => { 
    myObserver1.observe(div);
});


