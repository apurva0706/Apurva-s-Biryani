import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Variety1 from './Components1/Variety1'
import Header from './Components1/Header'
import Navbar from './Components1/Navbar'
// import Dishes from './Components1/Variety1'
import ContactUs from './Components1/ContactUs'
import AboutUs from './Components1/AboutUs'

import Footer from './Components1/Footer'
import Home from './Components1/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'





function App() {
  const biryanis = [
    {
      id: 1,
      title: "Chicken Dum Biryani",
      ingredients: "Basmati Rice, Chicken, Yogurt, Onions, Spices, Saffron",
      ratings: 4.8,
      price: 299,
      type: "Non-Veg",
     
      image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a"
    },
    {
      id: 2,
      title: "Hyderabadi Chicken Biryani",
      ingredients: "Basmati Rice, Chicken, Mint, Coriander, Fried Onions, Spices",
      ratings: 4.9,
      price: 349,
      type: "Non-Veg",
     
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Chicken_Hyderabadi_Biryani.JPG"
    },
    {
      id: 3,
      title: "Chicken Tikka Biryani",
      ingredients: "Basmati Rice, Chicken Tikka, Yogurt, Spices, Mint",
      ratings: 4.7,
      price: 329,
      type: "Non-Veg",
    
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0"
    },
    {
      id: 4,
      title: "Mutton Dum Biryani",
      ingredients: "Basmati Rice, Mutton, Yogurt, Saffron, Fried Onions",
      ratings: 4.9,
      price: 449,
      type: "Non-Veg",
      
image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Mutton_Dum_biryani.jpg"    },
    {
      id: 5,
      title: "Mutton Keema Biryani",
      ingredients: "Basmati Rice, Minced Mutton, Spices, Mint, Onions",
      ratings: 4.6,
      price: 399,
      type: "Non-Veg",
      
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398"
    },
    {
      id: 6,
      title: "Prawns Biryani",
      ingredients: "Basmati Rice, Prawns, Garlic, Ginger, Spices",
      ratings: 4.7,
      price: 429,
      type: "Non-Veg",
     
      image: "https://images.pexels.com/photos/22435655/pexels-photo-22435655.jpeg"
    },
    {
      id: 7,
      title: "Fish Biryani",
      ingredients: "Basmati Rice, Fish Fillets, Spices, Mint, Lemon",
      ratings: 4.5,
      price: 379,
      type: "Non-Veg",
    
      image: "https://images.pexels.com/photos/17649369/pexels-photo-17649369.jpeg"
    },

    {
      id: 8,
      title: "Paneer Biryani",
      ingredients: "Basmati Rice, Paneer, Yogurt, Mint, Spices",
      ratings: 4.5,
      price: 279,
      type: "Veg",
     
      image: "https://images.pexels.com/photos/9609865/pexels-photo-9609865.jpeg"
    },
    {
      id: 9,
      title: "Veg Dum Biryani",
      ingredients: "Basmati Rice, Mixed Vegetables, Mint, Saffron, Spices",
      ratings: 4.3,
      price: 259,
      type: "Veg",
   
      image: "https://images.pexels.com/photos/37303308/pexels-photo-37303308.jpeg"
    }
  ];


  return (
    <>
       <BrowserRouter>
  <Header />
  <Navbar />

  <Routes>
    <Route path="/" element={<Home />} />
    {/* <Route path="order-now" element={<Dishes dishes={biryanis} />} /> */}
    <Route path="Variety" element={<Variety1 dishes={biryanis} />} />
    <Route path="ContactUs" element={<ContactUs />} />
    <Route path="AboutUs" element={<AboutUs />} />
  </Routes>

  <Footer />
</BrowserRouter>
    </>
  )
}
export default App