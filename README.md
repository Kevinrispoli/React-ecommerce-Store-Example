# react-ecommerce-store
Simple E-commerce Store with React

Now with real product images hosted locally!

Project Structure:

ecommerce-store-react/
├── public/
│   ├── index.html
│   ├── products.json     ← update image paths
│   └── images/           ← place your .jpg/.png files here
│       ├── tshirt.jpg
│       ├── jeans.jpg
│       ├── sneakers.jpg
│       ├── hat.jpg
│       ├── jacket.jpg
│       └── watch.jpg
├── src/
│   ├── components/
│   │   ├── NavBar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductList.jsx
│   │   ├── Cart.jsx
│   │   └── CartItem.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   ├── pages/
│   │   ├── Shop.jsx
│   │   ├── CartPage.jsx
│   │   └── CheckoutPage.jsx
│   ├── App.jsx
│   ├── index.jsx
│   └── styles.css
├── package.json
└── README.md

# Simple React E-commerce Store

An example React storefront showcasing local images, a persistent cart, routing, and a checkout stub.

## Features

- **Cart State Management**: Implements `useReducer` with `CartContext` (Context API) for `ADD_ITEM`, `DECREMENT_ITEM`, and `REMOVE_ITEM` actions, persisting state in `localStorage` via `useEffect`.
- **Dynamic Product Loading**: Fetches product data from `public/products.json` using `useEffect` and `useState` in `ProductList.jsx`, with loading and error states.
- **Routing**: Uses `react-router-dom` (`BrowserRouter`, `Routes`, `Route`, `NavLink`, `useNavigate`) to navigate between **Shop**, **Cart**, and **Checkout** pages.
- **Responsive Grid Layout**: CSS Grid and media queries in `styles.css` ensure a 3×2 product grid on desktop, 2 per row on tablet, and 1 per row on mobile; includes hover and button transition effects.
- **Local Images**: Serves product images from `public/images/`, referenced in `products.json` for fast, local loading.
- **Checkout Form Stub**: Demonstrates form handling with `useState` in `CheckoutPage.jsx` and client-side confirmation before navigating back home.
