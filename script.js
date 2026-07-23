// Auto Slider

const slides = [
    "images/slide1.jpg",
    "images/slide2.jpg",
    "images/slide3.jpg",
    "images/slide4.jpg"
];

let current = 0;

const slider = document.getElementById("slide");

function autoSlider() {
    current++;

    if (current >= slides.length) {
        current = 0;
    }

    slider.style.opacity = "0";

    setTimeout(() => {
        slider.src = slides[current];
        slider.style.opacity = "1";
    }, 300);
}

// প্রতি ৩ সেকেন্ডে ছবি পরিবর্তন হবে
setInterval(autoSlider, 3000);
