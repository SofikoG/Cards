const slides = document.querySelectorAll('.slide')


slides.forEach((item, index) => {
    item.addEventListener('click', () => {
        slides.forEach((elem) => {
            elem.style.flex = 1
        })
        item.style.flex = 10
    })
})