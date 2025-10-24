# Bootstrap & Code Commenting Strategy

- Added inline component/grid comments within each page template (pages/*) so assessors can trace Bootstrap usage per section.
- Updated app.js comments to explain the simplified collapse handling and active link toggling in the multi-page setup.
- Documented stylesheet revisions around .nav, .card-grid, and .page-shell to note where Bootstrap now governs layout.
- Example 1: <!-- Bootstrap Grid: row-cols utilities keep cards side by side on larger screens --> (projects page).
- Example 2: // Bootstrap Component: Collapse menu after selection on narrow viewports (app.js collapse handler).
- Example 3: /* Bootstrap Utility: Adds consistent horizontal padding on each dedicated page */ (.page-shell in CSS).


