const config = {
    // this means that we are firing the event when it comes in the view.
    root: null, 
    rootMargin: '0px',
    threshold: 0.5
}

//initalizing the observer
let observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        //if creation for avoiding the load of the intersection observer OnLOad
        if (entry.isIntersecting) {
            isLeaving = true;
            // 1. This is image load logic when our element comes into view
            var imageName = entry.target.childNodes[1].attributes[0].nodeValue;
            var id = entry.target.childNodes[1].attributes[1].nodeValue;
            document.getElementById(id).setAttribute("src", imageName);
            entry.target.setAttribute("src", imageName);
            //1. END
        } else if (isLeaving) {
            isLeaving = false;
        }
    })
}, config);

//creating observer for each image element
const imgData = document.querySelectorAll(".sub");
imgData.forEach(image => {
    observer.observe(image);
})