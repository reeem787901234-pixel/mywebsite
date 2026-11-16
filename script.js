
// Slider
let offers = document.querySelector(".offers-items");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

let index = 0;
let totalSlides = offers.children.length;

next.addEventListener("click", function () {
    if (index < totalSlides - 1) {
        index++;
        offers.style.transform = `translateX(-${index * 100}%)`;
    }
});

prev.addEventListener("click", function () {
    if (index > 0) {
        index--;
        offers.style.transform = `translateX(-${index * 100}%)`;
    }
});


// Scroll To Top
let btnTop = document.getElementById("btn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 700) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
};

btnTop.addEventListener("click", function () {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

// Gallery Slider


let gallery = document.querySelector(".img-gallery");
let galleryNext = document.querySelector(".gallery-next");
let galleryPrev = document.querySelector(".gallery-prev");

let galleryIndex = 0;
let totalImages = gallery.children.length;

function updateGallery() {
    gallery.style.transform = `translateX(-${galleryIndex * 100}%)`;
}

galleryNext.addEventListener("click", function () {
    if (galleryIndex < totalImages - 1) {
        galleryIndex++;
        updateGallery();
    }
});

galleryPrev.addEventListener("click", function () {
    if (galleryIndex > 0) {
        galleryIndex--;
        updateGallery();
    }
});
