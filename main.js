let imglist = Array.from(document.querySelectorAll('.item img'))
// console.log(imglist);
let lightboxContainer = document.querySelector('.boxlight-container')
let exitSlide = document.querySelector('.exit')
let boxlight = document.querySelector('.boxlight')
let nextSlide = document.querySelector('.next')
let prevSlide = document.querySelector('.prev')

for (i = 0; i < imglist.length; i++) {
    imglist[i].addEventListener('click', function (e) {

        lightboxContainer.classList.remove('d-none')
        let imgSrc = e.target.getAttribute('src');
        currentIndex = imglist.indexOf(e.target)
        console.log(currentIndex);
        boxlight.style.backgroundImage = `url(${imgSrc})`
        // console.log(imgSrc);
    })

}


function exit() {
    lightboxContainer.classList.add('d-none')

}

function next() {
    currentIndex++
    if (currentIndex > imglist.length - 1) {
        currentIndex = 0
    }
    let imgSrc = imglist[currentIndex].getAttribute('src')
    boxlight.style.backgroundImage = `url(${imgSrc})`

}

function prev() {

    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imglist.length - 1
    }

    let imgSrc = imglist[currentIndex].getAttribute('src')
    boxlight.style.backgroundImage = `url(${imgSrc})`

}



exitSlide.addEventListener('click', exit)
nextSlide.addEventListener('click', next)
prevSlide.addEventListener('click', prev)


