import product1a from "../../assets/image/product1a.jpg";
import product1b from "../../assets/image/product1b.jpg";

import product2a from "../../assets/image/product2a.jpg";
import product2b from "../../assets/image/product2b.jpg";

import product3a from "../../assets/image/product3a.jpg";

import product4a from "../../assets/image/product4a.jpg";
import product4b from "../../assets/image/product4b.jpg";

import product5a from "../../assets/image/product5a.jpg";
import product5b from "../../assets/image/product5b.jpg";

import product6a from "../../assets/image/product6a.jpg";
import product6b from "../../assets/image/product6b.jpg";

import product7a from "../../assets/image/product7a.jpg";
import product7b from "../../assets/image/product7b.jpg";

import product8a from "../../assets/image/product8a.jpg";
import product8b from "../../assets/image/product8b.jpg";

const products = [
  {
    name: "Hot Base Tee",
    image: [product1a, product1b],
    price: 17.0,
    isHotItem: true,
    discountPercent: 30,
    slug: "hot-base-tee",
    type: "Women",
    categories: "T-shirt",
  },
  {
    name: "Cardigan Sweater",
    image: [product2a, product2b],
    price: 12.0,
    isHotItem: true,
    discountPercent: 20,
    slug: "cardigan-sweater",
    type: "Women",
    categories: "T-shirt",
  },
  {
    name: "Tighten Bag",
    image: [product3a, product3a],
    price: 371.0,
    isHotItem: true,
    discountPercent: 20,
    slug: "tighten-bag",
    type: "Accessories",
    categories: "Bag",
  },
  {
    name: "Retro Stripe Slim",
    image: [product4a, product4b],
    price: 15.0,
    isHotItem: false,
    discountPercent: 20,
    slug: "retro-stripe-slim",
    type: "Men",
    categories: "T-shirt",
  },
  {
    name: "Knot It Tee",
    image: [product5a, product5b],
    price: 33.0,
    isHotItem: false,
    discountPercent: 10,
    slug: "knot-it-tee",
    type: "Women",
    categories: "T-shirt",
  },
  {
    name: "Striped Ribbed",
    image: [product6a, product6b],
    price: 30.0,
    isHotItem: true,
    discountPercent: 0,
    slug: "striped-ribbed",
    type: "Women",
    categories: "clothes",
  },
  {
    name: "Black Skinny Jeans",
    image: [product7a, product7b],
    price: 30.0,
    isHotItem: false,
    discountPercent: 0,
    slug: "black-skinny-jeans",
    type: "Women",
    categories: "Jeans",
  },
  {
    name: "Bomb Cycle",
    image: [product8a, product8b],
    price: 45.0,
    isHotItem: false,
    discountPercent: 0,
    slug: "bomb-cycle",
    type: "Accessories",
    categories: "another",
  },
];

export default products;
