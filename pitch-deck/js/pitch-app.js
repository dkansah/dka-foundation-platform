// Current slide tracking
let currentSlide = 1;
const totalSlides = 8;

// Initialize
window.addEventListener('load', function() {
    showSlide(currentSlide);
    updateProgress();
});

// Show specific slide
function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    
    if (n > totalSlides) currentSlide = totalSlides;
    if (n < 1) currentSlide = 1;
    
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide - 1].classList.add('active');
    
    document.getElementById('slideCounter').textContent = `${currentSlide} / ${totalSlides}`;
    updateProgress();
}

// Change slide
function changeSlide(n) {
    currentSlide += n;
    showSlide(currentSlide);
}

// Update progress bar
function updateProgress() {
    const percentage = (currentSlide / totalSlides) * 100;
    document.getElementById('progressFill').style.width = percentage + '%';
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') changeSlide(-1);
    if (event.key === 'ArrowRight') changeSlide(1);
});

// Auto-play (optional)
let autoPlayEnabled = false;
let autoPlayInterval;

function toggleAutoPlay() {
    autoPlayEnabled = !autoPlayEnabled;
    if (autoPlayEnabled) {
        autoPlayInterval = setInterval(() => changeSlide(1), 5000);
    } else {
        clearInterval(autoPlayInterval);
    }
}
