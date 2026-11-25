  // Scroll Animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 100);
                }
            });
        }, observerOptions);
        document.querySelectorAll('.fade-in').forEach((el) => {
            observer.observe(el);
        });

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const href = this.getAttribute('href');
                if (href === '#' || href === '#top') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    return;
                }
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Parallax effect for hero image
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero-image');
            if (hero) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });

        // Sizes the open book relative to the screen.
// FILL_H = how much of the screen height the open page fills; FILL_W = how much of the width the two-page spread may fill.
          const FILL_H = 0.4;
          const FILL_W = 0.22;

          const fitOpenBook = () => {
            const scale = Math.min(innerHeight * FILL_H / 200, innerWidth * FILL_W / 300, 1.6);
            document.documentElement.style.setProperty('--open-scale', scale.toFixed(2));
          };
          fitOpenBook();
          addEventListener('resize', fitOpenBook);
