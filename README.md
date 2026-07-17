# BookJesspage

Mobile-first, modular landing page for the Forgotten Witch universe (Jessica Dodge).

## Structure

- `index.html` — semantic markup for all page sections
- `css/styles.css` — CSS variables + Flexbox/Grid, no frameworks
- `js/main.js` — `BOOK_CATALOG` data + state handling (no build step, no dependencies)

## Adding or editing a book

Add an object to the `BOOK_CATALOG` array in `js/main.js`:

```js
{
  id: 'book-5',
  title: '...',
  hookCopy: '...',
  coverImage: 'assets/covers/book-5-cover.webp',
  subBookImgs: [],
  purchaseLinks: {
    ebook: 'https://your-store.myshopify.com/cart/VARIANT_ID:1',
    paperback: 'https://your-store.myshopify.com/cart/VARIANT_ID:1',
    hardcover: 'https://your-store.myshopify.com/cart/VARIANT_ID:1'
  }
}
```

The hero showcase, carousel, and purchase rows all re-render automatically — no other file needs to change. Set `CURRENT_CENTER_BOOK_ID` in `js/main.js` to control which book shows first on page load.

## Assets

Drop pre-compressed WebP files at:

- `assets/scotland-moody-background.webp` — hero background texture
- `assets/covers/<book-id>-cover.webp` — one per book

Until real covers are added, each cover renders as a styled placeholder showing the book title.

## Running locally

No build step. Serve the folder with any static server, e.g.:

```
python3 -m http.server 8000
```
