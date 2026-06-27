import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a",
    title: "Biryani House",
    desc: "Authentic taste, royal aroma, unforgettable flavor.",
    btn: "Order Now",
  },
  {
    img: "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd",
    title: "Freshly Cooked Daily",
    desc: "Made with premium basmati rice and rich Indian spices.",
    btn: "View Menu",
  },
  {
    img: "https://images.unsplash.com/photo-1596797038530-2c107229654b",
    title: "Veg & Non-Veg Varieties",
    desc: "Delicious biryani for every food lover.",
    btn: "Explore Varieties",
  },
];

const specials = [
  {
    img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a",
    name: "Chicken Dum Biryani",
    desc: "Classic dum cooked chicken biryani with rich spices.",
    price: "₹199",
  },
  {
    img: "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd",
    name: "Mutton Biryani",
    desc: "Juicy mutton pieces layered with fragrant basmati rice.",
    price: "₹299",
  },
  {
    img: "https://images.unsplash.com/photo-1596797038530-2c107229654b",
    name: "Veg Biryani",
    desc: "Aromatic veg biryani loaded with fresh vegetables.",
    price: "₹129",
  },
];

function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ backgroundColor: "#121212", minHeight: "100vh", color: "#fff" }}>

      {/* Carousel */}
      <div style={{ position: "relative", height: "620px", overflow: "hidden" }}>
        <img
          src={slides[current].img}
          alt="slide"
          style={{ width: "100%", height: "620px", objectFit: "cover", filter: "brightness(40%)" }}
        />

        {/* Caption */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", width: "70%" }}>
          <h1 style={{ fontSize: "52px", fontWeight: "700", color: "#f59e0b", marginBottom: "15px" }}>
            {slides[current].title}
          </h1>
          <p style={{ fontSize: "20px", color: "#eee", marginBottom: "25px" }}>
            {slides[current].desc}
          </p>
          <Link to="Variety" style={{ backgroundColor: "#f59e0b", color: "#000", padding: "12px 30px", borderRadius: "8px", fontWeight: "600", textDecoration: "none", fontSize: "16px" }}>
            {slides[current].btn}
          </Link>
        </div>

        {/* Prev / Next buttons */}
        <button
          onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
          style={arrowBtn("left")}
        >
          ‹
        </button>
        <button
          onClick={() => setCurrent((current + 1) % slides.length)}
          style={arrowBtn("right")}
        >
          ›
        </button>

        {/* Dots */}
        <div style={{ position: "absolute", bottom: "20px", width: "100%", textAlign: "center" }}>
          {slides.map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrent(i)}
              style={{ display: "inline-block", width: "10px", height: "10px", borderRadius: "50%", backgroundColor: i === current ? "#f59e0b" : "#888", margin: "0 5px", cursor: "pointer" }}
            ></span>
          ))}
        </div>
      </div>

      {/* Welcome Section */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 30px" }}>
        <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ color: "#f59e0b", fontWeight: "700", fontSize: "32px", marginBottom: "15px" }}>
              Welcome to Biryani House
            </h2>
            <p style={{ color: "#ccc", fontSize: "16px", lineHeight: "1.7", marginBottom: "12px" }}>
              We serve hot, fresh, and flavorful biryanis prepared with traditional recipes,
              aromatic spices, and premium ingredients.
            </p>
            <p style={{ color: "#ccc", fontSize: "16px", lineHeight: "1.7", marginBottom: "20px" }}>
              From Chicken Dum Biryani to Veg Biryani, every plate is made with love and
              served with royal taste.
            </p>
            <button style={yellowBtn}>Explore Menu</button>
          </div>

          <div style={{ flex: 1 }}>
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
              alt="Restaurant Food"
              style={{ width: "100%", borderRadius: "14px" }}
            />
          </div>
        </div>
      </section>

      {/* Specials */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 30px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: "35px" }}>
          <h2 style={{ fontWeight: "700", fontSize: "30px" }}>
            Our <span style={{ color: "#f59e0b" }}>Specials</span>
          </h2>
          <p style={{ color: "#aaa", fontSize: "16px" }}>Most loved biryanis by our customers</p>
        </div>

        <div style={{ display: "flex", gap: "20px" }}>
          {specials.map((item, i) => (
            <div key={i} style={{ flex: 1, backgroundColor: "#1e1e1e", borderRadius: "12px", overflow: "hidden" }}>
              <img src={item.img} alt={item.name} style={{ width: "100%", height: "220px", objectFit: "cover" }} />
              <div style={{ padding: "20px" }}>
                <h4 style={{ color: "#f59e0b", marginBottom: "8px" }}>{item.name}</h4>
                <p style={{ color: "#aaa", fontSize: "14px", marginBottom: "12px" }}>{item.desc}</p>
                <h5 style={{ color: "#fff", margin: 0 }}>{item.price}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Banner */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 30px 60px" }}>
        <div style={{ background: "linear-gradient(135deg, #f59e0b, #d97706)", borderRadius: "16px", padding: "50px", textAlign: "center" }}>
          <h2 style={{ color: "#000", fontWeight: "700", marginBottom: "10px" }}>Hot Biryani Delivered Fresh 🍛</h2>
          <p style={{ color: "#1a1a1a", fontSize: "16px", marginBottom: "20px" }}>
            Taste the perfect blend of spices, rice, and love at Biryani House.
          </p>
          <button style={{ backgroundColor: "#121212", color: "#fff", border: "none", padding: "12px 30px", borderRadius: "8px", fontSize: "15px", fontWeight: "600", cursor: "pointer" }}>
            Order Your Plate
          </button>
        </div>
      </section>

    </div>
  );
}

const yellowBtn = {
  backgroundColor: "#f59e0b",
  color: "#000",
  border: "none",
  padding: "11px 26px",
  borderRadius: "8px",
  fontSize: "15px",
  fontWeight: "600",
  cursor: "pointer",
};

function arrowBtn(side) {
  return {
    position: "absolute",
    top: "50%",
    [side]: "20px",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "#fff",
    border: "none",
    fontSize: "36px",
    padding: "6px 16px",
    borderRadius: "6px",
    cursor: "pointer",
  };
}

export default Home;
