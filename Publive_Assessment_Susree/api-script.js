async function fetchFeed() {
  const loader = document.getElementById('loader');
  const feedContainer = document.getElementById('feed');
  try {
    const response = await fetch('https://demo-brands.publive.io/rss');
    const text = await response.text();

    // Simulate parsed content (XML parsing is skipped for brevity)

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, 'text/xml');

    const items = xmlDoc.getElementsByTagName('item');
    for (let i = 0; i < items.length; i++) {
      const title = items[i].getElementsByTagName('title')[0].textContent;
      const description =
        items[i].getElementsByTagName('description')[0].textContent;
      const link = items[i].getElementsByTagName('link')[0].textContent;
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <button onclick="window.open('${link}', '_blank')">Open in New Tab</button>
      `;
      feedContainer.appendChild(card);
    }
    loader.style.display = 'none';
  } catch (err) {
    loader.innerText = 'Failed to load feed.';
  }
}

fetchFeed();
