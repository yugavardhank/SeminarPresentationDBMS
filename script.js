// DOM Elements
const landingPage = document.getElementById('landing-page');
const presentationPage = document.getElementById('presentation-page');
const thankYouPage = document.getElementById('thank-you-page');
const startButton = document.getElementById('start-presentation');
const downloadButton = document.getElementById('download-report');
const backToHomeButton = document.getElementById('back-to-home');
const finishPresentationButton = document.getElementById('finish-presentation');
const backFromThanksButton = document.getElementById('back-from-thanks');

// Constants
const PRESENTATION_URL = 'https://www.canva.com/design/DAGYhuFXEXQ/YPR260B2tbHEOlbqV8c3wQ/view?embed';
const REPORT_URL = 'https://drive.google.com/file/d/1EYzeH7MH1fDF69TrBSMEz-yIOm-4Zl7V/view?usp=sharing'; // Replace with actual report URL

// Page Navigation
function showPage(pageToShow) {
    [landingPage, presentationPage, thankYouPage].forEach(page => {
        page.classList.remove('active');
    });
    pageToShow.classList.add('active');
}

// Confetti Animation
function triggerConfetti() {
    const colors = ['#1e3c72', '#ffffff', '#ffd700'];
    const particleCount = 100;
    
    // Launch from left
    confetti({
        particleCount,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 },
        colors: colors
    });
    
    // Launch from right
    confetti({
        particleCount,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.8 },
        colors: colors
    });
}

// Navigation Functions
function navigateToPresentation() {
    showPage(presentationPage);
    setTimeout(triggerConfetti, 300);
}

function navigateToHome() {
    showPage(landingPage);
}

function navigateToThankYou() {
    showPage(thankYouPage);
    triggerConfetti();
}

function downloadReport() {
    window.open(REPORT_URL, '_blank');
}

// Event Listeners
startButton.addEventListener('click', navigateToPresentation);
downloadButton.addEventListener('click', downloadReport);
backToHomeButton.addEventListener('click', navigateToHome);
finishPresentationButton.addEventListener('click', navigateToThankYou);
backFromThanksButton.addEventListener('click', navigateToHome);