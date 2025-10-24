// Add page loading class for smooth initial transition
document.body.classList.add('page-loading');

document.addEventListener("DOMContentLoaded", () => {
  // Add error handling at the start
  if (!document.body) {
    console.error('DOM not ready');
    return;
  }

  // Remove loading class for smooth fade in
  requestAnimationFrame(() => {
    document.body.classList.remove('page-loading');
    document.body.classList.add('page-loaded');
  });

  const navLinks = document.querySelectorAll(".nav [data-page]");
  const toggle = document.getElementById("mode-toggle");
  const modeLabel = document.getElementById("mode-label");
  const toTopButton = document.getElementById("to-top");
  const navCollapse = document.getElementById("primaryNav");

  // Safety checks
  if (!navLinks || navLinks.length === 0) {
    console.warn('No navigation links found');
  }

  const MODE_TEXT = {
    light: "Light theme",
    dark: "Dark theme",
  };

  let labelTimeout = null;

  function setModeLabel(isDark, animate = false) {
    if (!modeLabel) return;
    const nextText = isDark ? MODE_TEXT.dark : MODE_TEXT.light;

    if (!animate) {
      modeLabel.textContent = nextText;
      return;
    }

    if (labelTimeout) {
      clearTimeout(labelTimeout);
    }

    modeLabel.classList.add("is-transitioning");
    labelTimeout = setTimeout(() => {
      modeLabel.textContent = nextText;
      modeLabel.classList.remove("is-transitioning");
      labelTimeout = null;
    }, 450);
  }

  function applyTheme(isDark, animateLabel = false) {
    document.body.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setModeLabel(isDark, animateLabel);
  }

  // Theme initialization with safety
  if (toggle) {
    const savedTheme = localStorage.getItem("theme");
    const startInDarkMode = savedTheme === "dark";
    toggle.checked = startInDarkMode;
    applyTheme(startInDarkMode, false);

    toggle.addEventListener("change", () => {
      applyTheme(toggle.checked, true);
    });
  }

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

  // Scroll to top functionality
  function updateToTopVisibility() {
    if (!toTopButton) return;
    const shouldShow = window.scrollY > 260;
    toTopButton.classList.toggle("visible", shouldShow);
  }

  function scrollToTop(isSmooth = false) {
    const supportsSmooth = "scrollBehavior" in document.documentElement.style;
    if (isSmooth && supportsSmooth) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }

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

    // Observe cards for reveal animations
    document.querySelectorAll(".reveal-on-scroll, .card").forEach((element) => {
      observer.observe(element);
    });
  }

  // Add keyboard navigation support
  document.querySelectorAll('.btn-contact, .project-card a').forEach((button) => {
    button.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        button.click();
      }
    });
  });

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

  // Prefers reduced motion - disable animations
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (prefersReducedMotion.matches) {
    document.querySelectorAll('.card, .nav, .page-shell, header').forEach((el) => {
      el.style.animation = 'none';
    });
  }

  // Event listeners with safety
  if (toTopButton) {
    toTopButton.addEventListener("click", () => {
      scrollToTop(true);
    });
  }

  window.addEventListener("scroll", updateToTopVisibility, { passive: true });
  updateToTopVisibility();
});