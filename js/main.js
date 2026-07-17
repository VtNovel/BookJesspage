/* ============================================================
   1. GLOBAL CONFIGURATION MATRIX
   Replace the placeholder fields below with real assets, copy,
   and Shopify direct-checkout permalinks. Adding a new object to
   BOOK_CATALOG is the only step needed to add a new book to the
   site — the carousel and center showcase pick it up automatically.
   ============================================================ */
const BOOK_CATALOG = [
  {
    id: 'book-1',
    title: 'The Forgotten Witch',
    hookCopy: 'She buried her power to survive. Now the past won’t stay buried either.',
    coverImage: 'assets/covers/book-1-cover.webp',
    subBookImgs: [],
    purchaseLinks: {
      ebook: 'https://your-store.myshopify.com/cart/00000000:1',
      paperback: 'https://your-store.myshopify.com/cart/00000001:1',
      hardcover: 'https://your-store.myshopify.com/cart/00000002:1'
    }
  },
  {
    id: 'book-2',
    title: 'The Widow’s Grimoire',
    hookCopy: 'One spell can undo a lifetime of silence — if she’s brave enough to speak it.',
    coverImage: 'assets/covers/book-2-cover.webp',
    subBookImgs: [],
    purchaseLinks: {
      ebook: 'https://your-store.myshopify.com/cart/00000010:1',
      paperback: 'https://your-store.myshopify.com/cart/00000011:1',
      hardcover: 'https://your-store.myshopify.com/cart/00000012:1'
    }
  },
  {
    id: 'book-3',
    title: 'Ashes of the Highland Coven',
    hookCopy: 'Every coven has a secret. Hers is the reason the moor still burns.',
    coverImage: 'assets/covers/book-3-cover.webp',
    subBookImgs: [],
    purchaseLinks: {
      ebook: 'https://your-store.myshopify.com/cart/00000020:1',
      paperback: 'https://your-store.myshopify.com/cart/00000021:1',
      hardcover: 'https://your-store.myshopify.com/cart/00000022:1'
    }
  },
  {
    id: 'book-4',
    title: 'The Last Binding',
    hookCopy: 'To break the curse, she must become the very thing she was taught to fear.',
    coverImage: 'assets/covers/book-4-cover.webp',
    subBookImgs: [],
    purchaseLinks: {
      ebook: 'https://your-store.myshopify.com/cart/00000030:1',
      paperback: 'https://your-store.myshopify.com/cart/00000031:1',
      hardcover: 'https://your-store.myshopify.com/cart/00000032:1'
    }
  }
];

let CURRENT_CENTER_BOOK_ID = 'book-1';

function getBookById(id) {
  return BOOK_CATALOG.find((book) => book.id === id);
}

function setBackgroundCover(el, book) {
  el.style.backgroundImage = 'none';
  el.textContent = book.title;

  if (!book.coverImage) return;

  const probe = new Image();
  probe.onload = () => {
    el.style.backgroundImage = `url('${book.coverImage}')`;
    el.textContent = '';
  };
  probe.src = book.coverImage;
}

/* ---------- 2. HERO SHOWCASE ---------- */
function renderHero() {
  const book = getBookById(CURRENT_CENTER_BOOK_ID);
  if (!book) return;

  document.getElementById('hero-title').textContent = book.title;
  document.getElementById('hero-hook').textContent = book.hookCopy;

  const cover = document.getElementById('hero-cover');
  setBackgroundCover(cover, book);

  const heroCta = document.getElementById('hero-cta');
  heroCta.href = book.purchaseLinks.ebook;

  const stickyCta = document.getElementById('sticky-cta-link');
  stickyCta.href = book.purchaseLinks.ebook;
}

/* ---------- 5. UNIVERSE CATALOG CAROUSEL ---------- */
function renderCatalog() {
  const track = document.getElementById('catalog-track');
  track.innerHTML = '';

  BOOK_CATALOG
    .filter((book) => book.id !== CURRENT_CENTER_BOOK_ID)
    .forEach((book) => {
      const item = document.createElement('button');
      item.type = 'button';
      item.className = 'catalog-item';
      item.setAttribute('role', 'listitem');
      item.setAttribute('aria-label', `Show ${book.title} in the center showcase`);
      item.dataset.bookId = book.id;

      const cover = document.createElement('div');
      cover.className = 'catalog-item__cover';
      setBackgroundCover(cover, book);

      const title = document.createElement('p');
      title.className = 'catalog-item__title';
      title.textContent = book.title;

      item.appendChild(cover);
      item.appendChild(title);
      item.addEventListener('click', () => selectCenterBook(book.id));

      track.appendChild(item);
    });
}

/* ---------- 6. DIRECT PURCHASE UTILITY MATRIX ---------- */
function renderPurchaseRows() {
  const book = getBookById(CURRENT_CENTER_BOOK_ID);
  if (!book) return;

  document.getElementById('purchase-heading').textContent = `Get ${book.title}`;

  const rows = [
    { label: 'Get Kindle / E-Book', href: book.purchaseLinks.ebook },
    { label: 'Get Paperback Edition', href: book.purchaseLinks.paperback },
    { label: 'Get Deluxe Hardcover', href: book.purchaseLinks.hardcover }
  ];

  const container = document.getElementById('purchase-rows');
  container.innerHTML = '';

  rows.forEach(({ label, href }) => {
    const row = document.createElement('a');
    row.className = 'purchase-row';
    row.href = href;
    row.target = '_blank';
    row.rel = 'noopener';

    const text = document.createElement('span');
    text.textContent = label;

    const arrow = document.createElement('span');
    arrow.className = 'purchase-row__arrow';
    arrow.setAttribute('aria-hidden', 'true');
    arrow.textContent = '→';

    row.appendChild(text);
    row.appendChild(arrow);
    container.appendChild(row);
  });
}

/* ---------- STATE TRANSITION ---------- */
function selectCenterBook(bookId) {
  if (!getBookById(bookId) || bookId === CURRENT_CENTER_BOOK_ID) return;

  CURRENT_CENTER_BOOK_ID = bookId;
  renderHero();
  renderCatalog();
  renderPurchaseRows();

  document.getElementById('hero').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderAll() {
  renderHero();
  renderCatalog();
  renderPurchaseRows();
}

document.addEventListener('DOMContentLoaded', renderAll);
