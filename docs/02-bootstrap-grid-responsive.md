# Bootstrap Grid & Responsive Enhancements

- Wrapped each standalone page in `container-xxl` to keep content widths consistent post refactor.
- Converted legacy CSS grid constructs to Bootstrap `row`/`col` layouts across Home, Education, Experience, Skills, Additional, Summary, and Projects pages.
- Used `row-cols` utilities (e.g., `row-cols-1 row-cols-md-2 row-cols-xl-3`) to hold cards side by side on desktops while stacking gracefully on small screens.
- Applied shared spacing utilities (`py-5`, `g-4`, `mb-4`) so vertical rhythm matches between pages without custom breakpoints.
- Employed flex utilities on the Home contact buttons and cover letter sidebar to keep actionable items aligned in compact rows.
