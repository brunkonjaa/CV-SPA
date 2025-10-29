# Accessibility, Optimization, and Deployment Notes

- Each page keeps headings and shared nav so screen readers encounter consistent structure
- Active nav link and aria-current attributes remain in sync via the updated script for reliable orientation
- Toggler focus styles and collapse auto-hide continue to protect keyboard users from focus traps on mobile
- No new network dependencies beyond Bootstrap CDN; assets consolidated under css/, js/, and images/ to optimise caching
- Root index.html now mirrors the Home page directly, so GitHub Pages visitors see content immediately while still accessing section folders

