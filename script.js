/**
 * Froiland Dilan Portfolio - Custom Scripts
 * Extracted and hardened for CSP A+ Grade
 */

// Initialize Lucide Icons
if (typeof lucide !== 'undefined') {
    lucide.createIcons();
}

// Project Data for Modal
const projectsData = {
    interncare: {
        title: "InternCare",
        category: "SIA Project • 3 Months",
        image: "interncare.png",
        description: "An internship monitoring and evaluation system for LPU Cavite students. This project was developed for the System Integration and Architecture (SIA) subject over 3 months, including data gathering and documentation. It won Overall Champion in the Website Exhibit and Best Paper in defense.",
        tech: ["HTML", "PHP", "CSS", "MySQL", "JavaScript"],
        link: "https://drive.google.com/file/d/1rcIFzlC0CzGLLTLzclnYhun6qv6HGUWM/view?usp=sharing",
        linkText: "Click to know more"
    },
    cra4hfit: {
        title: "Cra4hFit",
        category: "Fitness Tracking App",
        image: "cra4shfit.png",
        description: "An exercise guide for beginners, pros, and advanced users. It includes daily routines, workout plans for each day, and a tracking system to monitor completion. Developed using HTML, CSS, PHP, and SQL database.",
        tech: ["HTML", "CSS", "PHP", "SQL"],
        link: "#",
        linkText: "View Details"
    },
    deadclearing: {
        title: "Dead Clearing",
        category: "Cross-Platform FPS Game",
        image: "dead  clearing.png",
        description: "A 3D FPS game made using free assets from Unity and itch.io. Developed in almost 1 month, it received a perfect score. The game is cross-platform, supporting Windows, Mac, Linux, and Android.",
        tech: ["Unity", "C#"],
        link: "https://drive.google.com/drive/folders/1m3ZHW1k4V-Nr1tcG8kAEYE6C1wTAVGME?usp=sharing",
        linkText: "Want to play? Click here"
    }
};

/**
 * Modal Logic
 */
function openProjectModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    const modalBody = document.getElementById('modal-content-body');
    if (!modalBody) return;

    modalBody.innerHTML = `
        <div class="space-y-6">
            <div class="aspect-video w-full rounded-2xl overflow-hidden border border-white/20 shadow-lg">
                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">
            </div>
            <div>
                <div class="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">${project.category}</div>
                <h2 class="text-3xl font-bold text-slate-900 mb-4">${project.title}</h2>
                <p class="text-slate-700 leading-relaxed mb-6 font-medium">${project.description}</p>
                
                <div class="flex flex-wrap gap-2 mb-8">
                    ${project.tech.map(t => `<span class="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-500 uppercase">${t}</span>`).join('')}
                </div>

                ${project.link !== '#' ? `
                    <a href="${project.link}" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all">
                        ${project.linkText} <i data-lucide="external-link" class="w-4 h-4"></i>
                    </a>
                ` : ''}
            </div>
        </div>
    `;
    
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.classList.add('visible');
    }
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.classList.remove('visible');
    }
}

/**
 * Journey Logic
 */
function toggleTimeline() {
    const card = document.getElementById('journey-card');
    const btnText = document.getElementById('btn-text');
    const icon = document.getElementById('timeline-icon');
    
    if (!card) return;

    card.classList.toggle('show-timeline');
    
    if (card.classList.contains('show-timeline')) {
        if (btnText) btnText.innerText = 'Back to Journey';
        if (icon) icon.style.transform = 'rotate(180deg)';
    } else {
        if (btnText) btnText.innerText = 'Journey Year';
        if (icon) icon.style.transform = 'rotate(0deg)';
    }
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

/**
 * Theme Logic
 */
function toggleThemeControls() {
    const controls = document.getElementById('theme-controls');
    const arrow = document.getElementById('theme-toggle-arrow');
    if (controls) controls.classList.toggle('expanded');
    if (arrow) arrow.classList.toggle('active');
}

function setTheme(theme) {
    const body = document.body;
    const btns = document.querySelectorAll('.theme-btn');
    
    body.classList.add('theme-switching');

    setTimeout(() => {
        btns.forEach(btn => btn.classList.remove('active'));

        if (theme === 'it') {
            body.classList.add('it-theme');
            const itBtn = document.querySelector('.btn-it');
            if (itBtn) itBtn.classList.add('active');
        } else {
            body.classList.remove('it-theme');
            const originalBtn = document.querySelector('.btn-original');
            if (originalBtn) originalBtn.classList.add('active');
        }
        
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }, 300);

    setTimeout(() => {
        body.classList.remove('theme-switching');
    }, 600);
}

// Event Listeners Setup
document.addEventListener('DOMContentLoaded', () => {
    // Theme Switcher
    const themeArrow = document.getElementById('theme-toggle-arrow');
    if (themeArrow) {
        themeArrow.addEventListener('click', toggleThemeControls);
    }

    const originalBtn = document.querySelector('.btn-original');
    if (originalBtn) {
        originalBtn.addEventListener('click', () => setTheme('original'));
    }

    const itBtn = document.querySelector('.btn-it');
    if (itBtn) {
        itBtn.addEventListener('click', () => setTheme('it'));
    }

    // Project Cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project-id');
            openProjectModal(projectId);
        });
    });

    // Modal Close
    const modalCloseBtn = document.querySelector('#project-modal button');
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeProjectModal);
    }

    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeProjectModal();
            }
        });
    }

    // Journey Toggle
    const journeyBtn = document.querySelector('#journey-card button');
    if (journeyBtn) {
        journeyBtn.addEventListener('click', toggleTimeline);
    }

    // Navbar Logic
    const navbar = document.getElementById('navbar');
    window.addEventListener('mousemove', (e) => {
        if (e.clientY <= 80) {
            if (navbar) navbar.classList.add('visible');
        } else if (e.clientY > 150) {
            if (navbar) navbar.classList.remove('visible');
        }
    });

    // Navigation Active State and Smooth Scroll
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');

                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        const navHeight = 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - navHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Scroll Reveal Observer
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.15
    });

    document.querySelectorAll('.reveal').forEach(section => {
        revealObserver.observe(section);
    });

    // Initial Active Theme Button
    const initialOriginalBtn = document.querySelector('.btn-original');
    if (initialOriginalBtn) initialOriginalBtn.classList.add('active');
});
