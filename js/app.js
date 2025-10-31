// js/app.js | per-line comments added
// Notes: Bootstrap usage on pages via CDN. See https://getbootstrap.com/docs/5.3/
// 
// FIXED: Removed duplicate DOMContentLoaded event listener that was causing code to run twice
// WHY: Having two identical listeners wastes memory and can cause bugs with double clicks and theme toggles
// js/app.js | line 1
// Add page loading class for smooth initial transition
document.body.classList.add('page-loading');
// js/app.js | line 2

document.addEventListener("DOMContentLoaded", () => {
// js/app.js | line 3
  // Add error handling at the start
  if (!document.body) {
    console.error('DOM not ready');
    return;
  }
// js/app.js | line 4

  // Remove loading class for smooth fade in
  requestAnimationFrame(() => {
    document.body.classList.remove('page-loading');
    document.body.classList.add('page-loaded');
  });
// js/app.js | line 5

  const navLinks = document.querySelectorAll(".nav [data-page]");
  const toggle = document.getElementById("mode-toggle");
  const modeLabel = document.getElementById("mode-label");
  const toTopButton = document.getElementById("to-top");
  const navCollapse = document.getElementById("primaryNav");
// js/app.js | line 6

  // Safety checks
  if (!navLinks || navLinks.length === 0) {
    console.warn('No navigation links found');
  }
// js/app.js | line 7

  const MODE_TEXT = {
    light: "Light theme",
    dark: "Dark theme",
  };
// js/app.js | line 8

  let labelTimeout = null;
// js/app.js | line 9

  function setModeLabel(isDark, animate = false) {
    if (!modeLabel) return;
    const nextText = isDark ? MODE_TEXT.dark : MODE_TEXT.light;
// js/app.js | line 10

    if (!animate) {
      modeLabel.textContent = nextText;
      return;
    }
// js/app.js | line 11

    if (labelTimeout) {
      clearTimeout(labelTimeout);
    }
// js/app.js | line 12

    modeLabel.classList.add("is-transitioning");
    labelTimeout = setTimeout(() => {
      modeLabel.textContent = nextText;
      modeLabel.classList.remove("is-transitioning");
      labelTimeout = null;
    }, 450);
  }
// js/app.js | line 13

  function applyTheme(isDark, animateLabel = false) {
    document.body.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setModeLabel(isDark, animateLabel);
  }
// js/app.js | line 14

  // Theme initialization with safety
  if (toggle) {
    const savedTheme = localStorage.getItem("theme");
    const startInDarkMode = savedTheme === "dark";
    toggle.checked = startInDarkMode;
    applyTheme(startInDarkMode, false);
// js/app.js | line 15

    toggle.addEventListener("change", () => {
      applyTheme(toggle.checked, true);
    });
  }
// js/app.js | line 16

  // Navigation handling
  const currentPage = document.body.dataset.page;
  if (navLinks && currentPage) {
    navLinks.forEach((linkEl) => {
      const linkTarget = linkEl.getAttribute("data-page");
      const isActiveLink = linkTarget === currentPage;
      if (linkEl.classList.contains("nav-link")) {
        linkEl.classList.toggle("active", isActiveLink);
        linkEl.toggleAttribute("aria-current", isActiveLink);
      }
// js/app.js | line 17

      linkEl.addEventListener("click", () => {
        if (window.bootstrap && navCollapse && navCollapse.classList.contains("show")) {
          try {
            const collapseInstance = bootstrap.Collapse.getOrCreateInstance(navCollapse);
            collapseInstance.hide();
          } catch (error) {
            console.warn('Could not collapse navbar:', error);
          }
        }
      });
    });
  }
// js/app.js | line 18

  // Scroll to top functionality
  function updateToTopVisibility() {
    if (!toTopButton) return;
    const shouldShow = window.scrollY > 260;
    toTopButton.classList.toggle("visible", shouldShow);
  }
// js/app.js | line 19

  function scrollToTop(isSmooth = false) {
    const supportsSmooth = "scrollBehavior" in document.documentElement.style;
    if (isSmooth && supportsSmooth) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }
// js/app.js | line 20

  // Intersection Observer with safety
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
// js/app.js | line 21

    // Observe cards for reveal animations
    document.querySelectorAll(".reveal-on-scroll, .card").forEach((element) => {
      observer.observe(element);
    });
  }
// js/app.js | line 22

  // Add keyboard navigation support
  document.querySelectorAll('.btn-contact, .project-card a').forEach((button) => {
    button.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        button.click();
      }
    });
  });
// js/app.js | line 23

  // Add smooth scroll behavior
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
// js/app.js | line 24

  // Prefers reduced motion - disable animations
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (prefersReducedMotion.matches) {
    document.querySelectorAll('.card, .nav, .page-shell, header').forEach((el) => {
      el.style.animation = 'none';
    });
  }
// js/app.js | line 25

  // Event listeners with safety
  if (toTopButton) {
    toTopButton.addEventListener("click", () => {
      scrollToTop(true);
    });
  }
// js/app.js | line 26

  window.addEventListener("scroll", updateToTopVisibility, { passive: true });
  updateToTopVisibility();
});