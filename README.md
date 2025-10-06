# CV-SPA - Bruno Suric

**Live Demo:** [https://brunkonjaa.github.io/CV-SPA/](https://brunkonjaa.github.io/CV-SPA/)

An interactive single-page CV built entirely with **HTML**, **CSS**, and **JavaScript**.  
No frameworks, no libraries, no nonsense - just clean, deliberate structure and a touch of developer stubbornness.

---

**What This Project Is**

This is not a traditional CV; it’s an *interactive web application* that behaves like a minimalist Single Page Application (SPA).  
Each section (Home, Education, Experience, Skills, Additional, Referees, Summary, Projects) is dynamically displayed using JavaScript view switching - no reloads, no frameworks.

The goal: to showcase not just what I’ve learned, but *how I build*.

---

**Key Features**

- **Dark / Light Mode** - remembers your preference using `localStorage`.  
  Because comfort shouldn’t end when you open a CV.  
- **Smooth Section Switching** - seamless transitions handled with URL hashes and simple DOM logic.  
- **Reveal-on-Scroll Animations** - powered by the native `IntersectionObserver` API for smooth, efficient motion.  
- **Responsive Design** - fully functional on mobile, tablet, or desktop.  
- **Project Showcase Grid** - a structured, clickable gallery linking to my live exams, labs, and study materials.

---

**File Structure**

index.html # Page structure: sections for all content views
style.css # Custom color palette, transitions, layout, dark mode
app.js # Navigation, scroll reveal, theme persistence


Together, they form a small but complete front-end project - elegant, efficient, and fully self-contained.

---

**Running Locally**

1. Clone the repository:
git clone https://github.com/brunkonjaa/CV-SPA.git

2. Open the folder
3. Double-click `index.html` or open it in any browser

No build steps, no server - it just works

---

**Deployment**

Hosted via **GitHub Pages**.  
In `Settings → Pages`, the site is set to deploy from:
- **Branch:** `main`
- **Folder:** `/ (root)`

Once saved, GitHub automatically builds and publishes to:  
[https://brunkonjaa.github.io/CV-SPA/](https://brunkonjaa.github.io/CV-SPA/)

---

**Development Insights**

- CSS variables make theme switching painless and scalable
- IntersectionObserver provides animation precision without performance cost
- Static HTML projects can still feel dynamic when structure and motion are balanced
- Always remove your phone number before deploying anything public

---

**About the Author**

I’m **Bruno Suric**, currently studying the **Higher Diploma in Science in Computing (Software Development)** at the *National College of Ireland*.  
I hold a **Level 7 Diploma in Cyber Security (Distinction, 86%)** from *City Colleges Dublin*.  

This CV SPA project reflects both disciplines - software design precision with cybersecurity awareness.  
Because a good developer knows how things are built, and a good security professional knows how they fail.

---

**Credits**

Created by **Bruno Suric**, 2025.  
Written entirely by hand in Notepad++.
Educational use and forks are welcome - just be kind enough not to claim authorship.
