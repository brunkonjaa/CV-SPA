# CV-SPA - Bruno Suric

**Live Demo:** [https://brunkonjaa.github.io/CV-SPA/](https://brunkonjaa.github.io/CV-SPA/)

A responsive, Bootstrap-powered CV now organised as a multi-page experience. Each section loads in its own directory, reducing scroll fatigue while keeping the custom indigo/red colour palette intact.

---

**What This Project Is**

A front-end CV built with **HTML**, **CSS**, **Bootstrap 5**, and a touch of **JavaScript**. Pages include Home, Education, Experience, Skills, Additional, Summary, Projects, and a dedicated Cover Letter inside documents/.

---

**Key Features**

- **Dark / Light Mode** — persists preference via localStorage.
- **Modular Navigation** — shared Bootstrap navbar across all pages with active-link highlighting.
- **Side-by-Side Layouts** — Bootstrap grids keep cards aligned on desktop while stacking gracefully on mobile.
- **Project Catalogue** — multi-column gallery linking to exams, repos, and study material.
- **Cover Letter Page** — integrates PDF download and portrait within the same visual system.

---

**File Structure**

`
css/style.css       # Colour palette, textures, and component tweaks
js/app.js           # Theme toggle, navbar collapse, to-top control
images/myphoto.png  # Portrait used on the cover letter page
pages/education.html
pages/experience.html
pages/skills.html
pages/additional.html
pages/summary.html
pages/projects.html
cover_letter/index.html    # Cover letter page with Go Home button
index.html                 # Home landing page
`

---

**Running Locally**

1. git clone https://github.com/brunkonjaa/CV-SPA.git
2. Open index.html (or any page in pages/ directly).
3. Enjoy — no build tooling required.

---

**Deployment**

Hosted on **GitHub Pages** (branch main, folder /). The redirect handles the new folder layout while keeping the existing live URL: [https://brunkonjaa.github.io/CV-SPA/](https://brunkonjaa.github.io/CV-SPA/).

---

**Development Notes**

- Bootstrap utilities tame layout/spacing; bespoke CSS handles theming and textures.
- JavaScript now focuses on theming, navbar collapse, and optional reveal animations — no SPA view switching.
- Assets live under dedicated css/, js/, and images/ directories for easier caching and future expansion.

---

**About the Author**

I’m **Bruno Suric**, currently pursuing the **Higher Diploma in Science in Computing (Software Development)** at the *National College of Ireland* and holder of a **Level 7 Diploma in Cyber Security (Distinction, 86%)** from *City Colleges Dublin*.

---

**Credits**

Created by **Bruno Suric**, 2025. Educational use and forks welcome — please retain attribution.

