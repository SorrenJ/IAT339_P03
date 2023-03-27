const section = document.querySelector("section")

const callback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {

        entry.target.classList.add("anime")
 
    }
    })
}

const options ={}

const myObserver = new IntersectionObserver(callback, options)
myObserver.observe(section)
