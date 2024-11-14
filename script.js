document.querySelectorAll('a[href^="#"').fotEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntiView({
            behavior: 'smooth'
        })
    })
})