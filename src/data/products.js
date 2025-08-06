// src/data/products.js

// Import images directly so webpack handles correct URLs
import tshirtImg   from '../assets/images/tshirt.png';
import jeansImg    from '../assets/images/jeans.png';
import sneakersImg from '../assets/images/sneakers.png';
import hatImg      from '../assets/images/hat.png';
import jacketImg   from '../assets/images/jacket.png';
import watchImg    from '../assets/images/watch.png';

// Default-exported array of product objects
const products = [
  { id: 1, name: 'T-shirt',  price: 19.99, image: tshirtImg },
  { id: 2, name: 'Jeans',    price: 49.99, image: jeansImg  },
  { id: 3, name: 'Sneakers', price: 89.99, image: sneakersImg },
  { id: 4, name: 'Hat',      price: 14.99, image: hatImg     },
  { id: 5, name: 'Jacket',   price: 79.99, image: jacketImg  },
  { id: 6, name: 'Watch',    price: 129.99,image: watchImg   }
];

export default products;
