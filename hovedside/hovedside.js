document.addEventListener('DOMContentLoaded', () => {
    // Wrap sections for full-height display
    document.querySelectorAll('.info-section').forEach(section => {
        const wrapper = document.createElement('div');
        wrapper.className = 'section-wrapper';
        section.parentNode.insertBefore(wrapper, section);
        wrapper.appendChild(section);
    });

    // Intersection Observer for sections
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Update navigation
                const id = entry.target.id;
                document.querySelectorAll('nav a').forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, {
        threshold: 0.3
    });

    document.querySelectorAll('.info-section').forEach(section => {
        sectionObserver.observe(section);
    });

    // Smooth scroll with animation pause
    let isScrolling = false;
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (!isScrolling) {
                isScrolling = true;
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });

                // Reset scrolling flag after animation
                setTimeout(() => {
                    isScrolling = false;
                }, 1000);
            }
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!isScrolling) {
            const currentSection = document.querySelector('.info-section.active');
            let targetSection;

            if (e.key === 'ArrowDown' || e.key === 'PageDown') {
                targetSection = currentSection.parentElement.nextElementSibling?.querySelector('.info-section');
            } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
                targetSection = currentSection.parentElement.previousElementSibling?.querySelector('.info-section');
            }

            if (targetSection) {
                isScrolling = true;
                targetSection.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => {
                    isScrolling = false;
                }, 1000);
            }
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Enhanced card animations
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('card-visible');
            }
        }, {
            threshold: 0.1
        });
    });

    cards.forEach(card => {
        observer.observe(card);
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Enhance event cards with animations
    const eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
            card.style.backgroundColor = '#f8fafc';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.backgroundColor = '';
        });
    });

    // Add animation for event cards on scroll
    const eventObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.1 });

    eventCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = `translateX(${index % 2 === 0 ? '-' : ''}50px)`;
        card.style.transition = 'all 0.5s ease';
        eventObserver.observe(card);
    });

    // Add scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
});
