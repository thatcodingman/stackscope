// StackScope — comparison table sorting + gentle scroll reveal

document.addEventListener('DOMContentLoaded', () => {
  initTableSort();
  initScrollReveal();
});

/* ---- sortable comparison table ---- */
function initTableSort() {
  const table = document.querySelector('table.compare');
  if (!table) return;
  const headers = table.querySelectorAll('thead th[data-sort]');
  const tbody = table.querySelector('tbody');

  headers.forEach((th) => {
    th.setAttribute('tabindex', '0');
    th.setAttribute('role', 'button');
    th.setAttribute('aria-label', `Sort by ${th.textContent.trim()}`);

    const trigger = () => sortByColumn(table, tbody, th, headers);
    th.addEventListener('click', trigger);
    th.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); trigger(); }
    });
  });
}

function sortByColumn(table, tbody, th, headers) {
  const type = th.getAttribute('data-sort');
  const index = Array.prototype.indexOf.call(th.parentElement.children, th);
  const rows = Array.from(tbody.querySelectorAll('tr'));

  const currentDir = th.getAttribute('data-dir') === 'asc' ? 'desc' : 'asc';
  headers.forEach((h) => { h.removeAttribute('data-dir'); h.querySelector('.arrow')?.remove(); });
  th.setAttribute('data-dir', currentDir);

  const arrow = document.createElement('span');
  arrow.className = 'arrow';
  arrow.textContent = currentDir === 'asc' ? '\u2191' : '\u2193';
  th.appendChild(arrow);

  rows.sort((a, b) => {
    const cellA = a.children[index];
    const cellB = b.children[index];
    let valA = cellA.getAttribute('data-value') ?? cellA.textContent.trim();
    let valB = cellB.getAttribute('data-value') ?? cellB.textContent.trim();

    if (type === 'number') {
      valA = parseFloat(valA) || 0;
      valB = parseFloat(valB) || 0;
      return currentDir === 'asc' ? valA - valB : valB - valA;
    }
    return currentDir === 'asc'
      ? String(valA).localeCompare(String(valB))
      : String(valB).localeCompare(String(valA));
  });

  rows.forEach((row) => tbody.appendChild(row));
}

/* ---- scroll reveal for category cards ---- */
function initScrollReveal() {
  const cards = document.querySelectorAll('.cat-card');
  if (!cards.length) return;

  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    cards.forEach((c) => c.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('is-visible'), i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  cards.forEach((c) => observer.observe(c));
}
