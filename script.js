document.addEventListener('DOMContentLoaded', () => {
    // Select all necessary elements once
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const mobileMenu = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const contactForm = document.getElementById('contactForm');
    const allButtonsAndCards = document.querySelectorAll('[data-page], .project-card');

    // Page navigation function
    let showPage = function(pageId) {
        pages.forEach(page => page.classList.remove('active'));
        navLinks.forEach(link => link.classList.remove('active'));
        
        const activePage = document.getElementById(pageId);
        const activeLink = document.querySelector(`.nav-link[data-page="${pageId}"]`);

        if (activePage) activePage.classList.add('active');
        if (activeLink) activeLink.classList.add('active');
        
        // Close mobile menu on navigation
        navMenu.classList.remove('active');
        window.scrollTo(0, 0); // Scroll to top on page change
    };

    // --- Page-specific animations ---
    const originalShowPage = showPage;
    showPage = function(pageId) {
        originalShowPage(pageId);
        
        setTimeout(() => {
            if (pageId === 'projects') {
                document.querySelectorAll('.metric-number').forEach(metric => {
                    const target = parseInt(metric.getAttribute('data-value') || metric.textContent);
                    animateCounter(metric, target);
                });
            }
            if (pageId === 'about') {
                animateSkillBars();
            }
        }, 100);
    };

    // --- Event Listeners ---
    // Page switching for nav links, CTA buttons, and project cards
    allButtonsAndCards.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = element.getAttribute('data-page') || 'projects'; // Default to projects for project cards
            showPage(pageId);
        });
    });

    // Mobile menu toggle
    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Contact form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        
        if (!name || !email) {
            alert('Please fill in all required fields.');
            return;
        }
        
        alert(`Thank you, ${name}! Your message has been received. I'll get back to you within 24 hours to discuss your marketing goals.`);
        e.target.reset();
    });

    // --- Interactive Animations & Effects ---

    // Animate metrics counters
    function animateCounter(element, target, duration = 1500) {
        let start = 0;
        const final_text = element.getAttribute('data-target');
        const increment = target / (duration / 16);
        
        const updateCounter = () => {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = final_text;
            }
        };
        updateCounter();
    }

    // Animate skill bars on 'About' page
    function animateSkillBars() {
        document.querySelectorAll('.skills-list li').forEach((skill, index) => {
            skill.style.opacity = '0';
            skill.style.transform = 'translateX(-20px)';
            setTimeout(() => {
                skill.style.opacity = '1';
                skill.style.transform = 'translateX(0)';
            }, index * 100);
        });
    }

    // Add ripple effect to project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const ripple = document.createElement('div');
            const rect = card.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            ripple.classList.add('ripple');
            
            card.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Floating action button for quick contact
    function createFloatingButton() {
        const floatingBtn = document.createElement('div');
        floatingBtn.innerHTML = '💬';
        floatingBtn.classList.add('floating-btn');
        
        floatingBtn.addEventListener('click', () => {
            showPage('contact');
            floatingBtn.style.animation = 'bounce 0.6s ease';
            setTimeout(() => floatingBtn.style.animation = 'pulse 2s infinite', 600);
        });
        
        document.body.appendChild(floatingBtn);
    }
    // Add CSS for floating button and ripple dynamically
    const dynamicStyles = `
        .floating-btn {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #DC143C, #FF6B35);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            cursor: pointer;
            box-shadow: 0 4px 20px rgba(220, 20, 60, 0.3);
            z-index: 1000;
            transition: all 0.3s ease;
            animation: pulse 2s infinite;
        }
        .floating-btn:hover {
             transform: scale(1.1);
             box-shadow: 0 6px 25px rgba(220, 20, 60, 0.4);
        }
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 107, 53, 0.3);
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.innerText = dynamicStyles;
    document.head.appendChild(styleSheet);


    // Set up metric counter data targets on load
    document.querySelectorAll('.metric-number').forEach(metric => {
        const text = metric.textContent;
        let value = parseInt(text.replace(/[^0-9.]/g, ''));
        if (text.toLowerCase().includes('k')) value *= 1000;
        metric.setAttribute('data-value', value);
    });

    // Initialize features
    createFloatingButton();
});