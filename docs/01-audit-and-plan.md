# Audit of Existing Sections & Planned Changes

- **Architecture:** Original single-page app split into dedicated folders (`pages/*` and `documents/*`) to reduce scrolling and streamline edits
- **Home:** Combine introductory hero with summary highlights presented in a responsive two-column grid
- **Education:** Retain academic entries, present in responsive multi-column Bootstrap layout
- **Experience:** Maintain chronology while arranging roles in paired columns for quick scanning
- **Skills:** Expand competency groups into six cards displayed side by side on desktop
- **Additional:** Surface interests, community, and certifications within a two-by-two grid
- **Summary:** Restore dedicated summary page mirroring the original SPA section for assessors who expect it
- **Projects:** Keep full project catalogue but render via Bootstrap `row-cols` utilities for balanced rows
- **Cover Letter:** Integrate supplied document inside `documents/cover-letter/` with shared styling and PDF download
- **Assets:** Relocate CSS, JS, and imagery under `css/`, `js/`, and `images/` to enforce a clean separation

