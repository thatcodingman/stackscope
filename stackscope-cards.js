// StackScope — category card renderer
// Reads REPORTS (loaded via <script> before this file) and builds
// cards using the same .cat-card styling as the homepage grid.

function reportCardHTML(r) {
  const href = r.live ? `reports/${r.slug}.html` : "#";
  const tabText = r.live ? "Live report" : "In progress";
  const tabClass = r.live ? "" : "soon";
  const metaRight = r.live ? "View →" : "Notify me";

  return `
    <a href="${href}" class="cat-card is-visible">
      <span class="tab ${tabClass}">${tabText}</span>
      <h3>${r.title}</h3>
      <p class="sentiment">${r.summary}</p>
      <div class="meta"><span>${r.toolCount} tools tracked</span><span>${metaRight}</span></div>
    </a>`;
}

/**
 * Renders up to `count` other reports (excluding currentSlug).
 * Used at the bottom of a report page ("Other categories").
 */
function renderRelatedReports(containerSelector, currentSlug, count = 3) {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  const others = REPORTS.filter(r => r.slug !== currentSlug).slice(0, count);
  container.innerHTML = others.map(reportCardHTML).join("")
    || `<p style="color:var(--ink-soft); grid-column: 1/-1;">Nothing else published yet.</p>`;
}
