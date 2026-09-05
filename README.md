# 🧵 Ever LOOM

<p align="center">
  <img src="https://img.shields.io/badge/status-active-success?style=for-the-badge" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</p>

<p align="center">
  <b>A premium, minimalist fashion storefront for men's & women's wear — built with pure HTML, CSS & JavaScript.</b>
</p>

<p align="center">
  <em>Where tradition meets modern style.</em>
</p>

---

## ✨ Overview

**Ever LOOM** is a fully responsive, single-page fashion e-commerce front-end. It showcases curated men's and women's collections with a sleek black-and-white aesthetic, an auto-rotating hero slider, and a client-side contact form — all built without any frameworks or dependencies.

## 🚀 Features

- 🎞️ **Auto-rotating hero slider** — smooth fade transitions between banners
- 🧭 **Sticky, responsive navigation** — collapses into a hamburger menu on mobile
- 👔 **Men's Collection** — kurta sets, waistcoats, shalwar kameez & more
- 👗 **Women's Collection** — embroidered suits, luxury lawn, chiffon dresses & formal wear
- 🛒 **Buy Now interactions** — instant order confirmation via alert
- 📩 **Contact form export** — messages are saved as a downloadable `.txt` file, no backend required
- 📱 **Fully responsive design** — optimized for desktop, tablet & mobile

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Structure | HTML5 |
| Styling | CSS3 (Flexbox, Grid, Media Queries) |
| Interactivity | Vanilla JavaScript (DOM, Blob API) |

No frameworks. No build tools. No dependencies — just clean, readable code.

---

## 📂 Project Structure

```
Ever-LOOM/
├── index.html      # Main markup — hero, collections, about, contact, footer
├── style.css       # All styling, layout & responsive breakpoints
├── script.js       # Menu toggle, hero slider, buy logic, contact form export
└── README.md       # You're here!
```

---

## ⚙️ Getting Started

No installation, no `npm install` — just open and go.

```bash
# 1. Clone the repository
git clone https://github.com/your-username/ever-loom.git

# 2. Navigate into the project
cd ever-loom

# 3. Open in your browser
open index.html
```

Or simply use the **Live Server** extension in VS Code for hot-reloading during development.

---

## 🧩 How It Works

- **Hero Slider** — `script.js` cycles through `.hero img` elements every 3.5s by toggling an `.active` class that controls opacity in CSS.
- **Buy Now** — clicking a product's button calls `buyNow(productName)`, confirming the order with a native alert (ready to be wired up to a real cart/checkout system).
- **Contact Form** — on submit, form data is packaged into a `Blob` and triggered as a downloadable `.txt` file, giving users a saved copy of their message without any server.

---

## 🗺️ Roadmap

- [ ] Replace `alert()` confirmations with styled modal/toast notifications
- [ ] Add a shopping cart with quantity & total tracking
- [ ] Connect contact form to a real backend / email service
- [ ] Add product filtering & search
- [ ] Dark mode toggle

---

## 🤝 Contributors

<p align="left">
  <b>Muaaz</b> · <b>Adam</b> · <b>Zain</b>
</p>

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with 🖤 by <b>Ever LOOM</b> — Fashion is the armor to survive the reality of everyday life.
</p>
