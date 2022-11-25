import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/Cart";

const App = () => {
  const productItems = [
    {
      id: "1",
      name: "Avengers-Heroes Return",
      price: 199,
      image: "./assets/images.jpg",
    },
    {
      id: "2",
      name: "Doctor Strange Death",
      price: 76,
      image: "./assets/images (1).jpg",
    },
    {
      id: "3",
      name: "Black Panther & Shuri",
      price: 28,
      image: "./assets/download (2).jpg",
    },
    {
      id: "4",
      name: "The Incredible Hulk and Wolverine",
      price: 86,
      image: "./assets/download (3).jpg",
    },
    {
      id: "5",
      name: "Marvel-verse Thanos",
      price: 74,
      image: "./assets/download (4).jpg",
    },
    {
      id: "6",
      name: "Invincible Iron Man",
      price: 55,
      image: "../assets/images (4).jpg",
    },
    {
      id: "7",
      name: "The Mighty Thor",
      price: 68,
      image: "./assets/download (6).jpg",
    },
    {
      id: "8",
      name: "Marvel Comics #1000",
      price: 32,
      image: "./assets/download.jpg",
    },
    {
      id: "9",
      name: "The Amazing Spider-Man",
      price: 49,
      image: "./assets/download (1).jpg",
    },
    {
      id: "10",
      name: "The Infinity War",
      price: 77,
      image: "./assets/download (7).jpg",
    },
    {
      id: "11",
      name: "Captain Marvel",
      price: 40,
      image: "./assets/images (3).jpg",
    },
    {
      id: "12",
      name: "Spider Man-Adventures",
      price: 30,
      image: "./assets/images (2).jpg",
    },
  ];

  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const productExit = cartItems.find((item) => item.id === product.id);
    if (productExit) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExit, quantity: productExit.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const productExit = cartItems.find((item) => item.id === product.id);
    if (productExit.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExit, quantity: productExit.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleCartClear = () => {
    setCartItems([]);
  };

  return (
    <BrowserRouter>
      <>
        <Header cartItems={cartItems} />

        <Routes>
          <Route
            path="/"
            exact
            element={
              <Products
                productItems={productItems}
                handleAddProduct={handleAddProduct}
              />
            }
          ></Route>

          <Route
            path="/cart"
            exact
            element={
              <Cart
                cartItems={cartItems}
                handleAddProduct={handleAddProduct}
                handleRemoveProduct={handleRemoveProduct}
                handleCartClear={handleCartClear}
              />
            }
          ></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;
