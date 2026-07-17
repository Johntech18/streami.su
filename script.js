const trending = [
  { title: 'Silent Orbit', year: '2026', genre: 'Sci-Fi', bg: 'linear-gradient(135deg,#5448ff,#292d60)' },
  { title: 'Cipher Run', year: '2025', genre: 'Action', bg: 'linear-gradient(135deg,#00b8d9,#12435c)' },
  { title: 'Afterglow', year: '2024', genre: 'Drama', bg: 'linear-gradient(135deg,#ff6a88,#632355)' },
  { title: 'Fracture Point', year: '2026', genre: 'Thriller', bg: 'linear-gradient(135deg,#9a84ff,#34315e)' },
  { title: 'Monsoon City', year: '2025', genre: 'Mystery', bg: 'linear-gradient(135deg,#00d3b8,#12514b)' }
];

const releases = [
  { title: 'Northline', details: 'Movie · 1h 49m', bg: 'linear-gradient(135deg,#9a84ff,#1f223f)' },
  { title: 'Tempest', details: 'Series · 8 Episodes', bg: 'linear-gradient(135deg,#5ed5ff,#15324f)' },
  { title: 'City of Sand', details: 'Movie · 2h 02m', bg: 'linear-gradient(135deg,#ffc26f,#5c3f1d)' },
  { title: 'Aurora Files', details: 'Series · 10 Episodes', bg: 'linear-gradient(135deg,#7f97ff,#22316e)' }
];

function cardTemplate(item, subtitle) {
  return `
    <article class="card">
      <div class="poster" style="background:${item.bg}"></div>
      <h3>${item.title}</h3>
      <p class="meta">${subtitle}</p>
    </article>`;
}

document.querySelector('.cards').innerHTML = trending
  .map((item) => cardTemplate(item, `${item.genre} · ${item.year}`))
  .join('');

document.querySelector('.releases').innerHTML = releases
  .map((item) => cardTemplate(item, item.details))
  .join('');

const modal = document.getElementById('trailerModal');
document.getElementById('openTrailer').addEventListener('click', () => {
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
});

document.getElementById('closeTrailer').addEventListener('click', () => {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }
});
