// ===== Retro DOS Portfolio - JavaScript =====

// Navigation between sections
function navigateTo(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Update menu active state
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-section') === sectionId) {
            item.classList.add('active');
        }
    });
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Menu item click handlers
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = item.getAttribute('data-section');
        navigateTo(sectionId);
    });
});

// Skills tabs functionality
const tabBtns = document.querySelectorAll('.tab-btn');
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        
        // Remove active from all tabs and panels
        tabBtns.forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.skills-panel').forEach(p => p.classList.remove('active'));
        
        // Add active to clicked tab and corresponding panel
        btn.classList.add('active');
        const panel = document.getElementById(tabId + '-panel');
        if (panel) {
            panel.classList.add('active');
        }
    });
});

// Typing animation
const typedTextElement = document.querySelector('.typed-text');
const texts = [
    'Senior Software Engineer',
    'Hardware Engineer', 
    'Full-Stack Developer',
    'Robotics Enthusiast',
    'Drone Builder',
    'Problem Solver'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
    if (!typedTextElement) return;
    
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typedTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typedTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500;
    }

    setTimeout(typeText, typingSpeed);
}

// Start typing animation
typeText();

// Update time in status bar
function updateTime() {
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
}

// Update time every second
setInterval(updateTime, 1000);
updateTime();

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    // Number keys for navigation
    if (e.key === '1') navigateTo('home');
    if (e.key === '2') navigateTo('about');
    if (e.key === '3') navigateTo('skills');
    if (e.key === '4') navigateTo('experience');
    if (e.key === '5') navigateTo('contact');
    
    // Letter shortcuts
    if (e.key.toLowerCase() === 'a') navigateTo('about');
    if (e.key.toLowerCase() === 's') navigateTo('skills');
    if (e.key.toLowerCase() === 'c') navigateTo('contact');
    if (e.key.toLowerCase() === 'h') navigateTo('home');
    if (e.key.toLowerCase() === 'e') navigateTo('experience');
    
    // F1 for help (prevent default)
    if (e.key === 'F1') {
        e.preventDefault();
        alert('KEYBOARD SHORTCUTS:\\n\\n1-5: Navigate sections\\nH: Home\\nA: About\\nS: Skills\\nE: Experience\\nC: Contact\\n\\nVisit: github.com/Qurbonsaid');
    }
});

// Console Easter Egg
console.log('%c░▒▓█ QURBONSAID RAYIMOV █▓▒░', 'font-size: 20px; font-weight: bold; color: #00ffff; background: #000080; padding: 10px;');
console.log('%cSenior Software & Hardware Engineer', 'font-size: 14px; color: #ffff00;');
console.log('%c📧 qurbonsaid.r@gmail.com', 'font-size: 12px; color: #00ff00;');
console.log('%c🌐 the-watcher.uz', 'font-size: 12px; color: #00ff00;');

// Initialize first panel as active
document.addEventListener('DOMContentLoaded', () => {
    const firstPanel = document.getElementById('software-panel');
    if (firstPanel) {
        firstPanel.classList.add('active');
    }
});