import React from "react";

function AboutUs() {
  return (
    <div style={{ backgroundColor: "#121212", color: "#fff", minHeight: "100vh", padding: "50px 0" }}>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 30px" }}>

        {/* Hero Section */}
        <div style={{ display: "flex", alignItems: "center", gap: "40px", marginBottom: "50px" }}>
          <div style={{ flex: 1 }}>
            <span style={{ backgroundColor: "#f59e0b", color: "#000", padding: "5px 14px", borderRadius: "5px", fontSize: "13px", fontWeight: "600" }}>
              Authentic Taste Since 2024
            </span>

            <h1 style={{ fontSize: "42px", fontWeight: "700", margin: "15px 0 15px" }}>
              Welcome to <span style={{ color: "#f59e0b" }}>Biryani House</span>
            </h1>

            <p style={{ color: "#ccc", fontSize: "16px", lineHeight: "1.7", marginBottom: "10px" }}>
              Serving authentic, flavorful, and freshly prepared biryanis made
              with premium ingredients and traditional recipes.
            </p>

            <p style={{ color: "#ccc", fontSize: "15px", lineHeight: "1.7", marginBottom: "20px" }}>
              At Biryani House, every plate is prepared with passion, aromatic spices,
              premium basmati rice, and carefully selected ingredients to bring you
              the true taste of Indian biryani.
            </p>

            <button style={{ backgroundColor: "#f59e0b", color: "#000", border: "none", padding: "12px 28px", borderRadius: "8px", fontSize: "15px", fontWeight: "600", cursor: "pointer" }}>
              Explore Our Menu
            </button>
          </div>

          <div style={{ flex: 1, textAlign: "center" }}>
            <img
              src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a"
              alt="Biryani"
              style={{ width: "100%", maxHeight: "420px", objectFit: "cover", borderRadius: "16px" }}
            />
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: "20px", marginBottom: "50px" }}>
          {[
            { number: "10+", label: "Biryani Varieties" },
            { number: "1000+", label: "Happy Customers" },
            { number: "100%", label: "Fresh Ingredients" },
            { number: "4.8★", label: "Customer Rating" },
          ].map((item, i) => (
            <div key={i} style={{ flex: 1, backgroundColor: "#1e1e1e", border: "1px solid #f59e0b", borderRadius: "10px", padding: "20px", textAlign: "center" }}>
              <h2 style={{ color: "#f59e0b", fontWeight: "700", marginBottom: "6px" }}>{item.number}</h2>
              <p style={{ color: "#ccc", margin: 0, fontSize: "14px" }}>{item.label}</p>
            </div>
          ))}
        </div>

        {/* Our Story */}
        <div style={{ display: "flex", gap: "40px", alignItems: "center", marginBottom: "50px" }}>
          <div style={{ flex: 1 }}>
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
              alt="Restaurant"
              style={{ width: "100%", borderRadius: "16px" }}
            />
          </div>

          <div style={{ flex: 1.4 }}>
            <h2 style={{ color: "#f59e0b", fontWeight: "700", marginBottom: "15px" }}>Our Story</h2>
            <p style={{ color: "#ccc", lineHeight: "1.7", marginBottom: "12px" }}>
              Biryani House was started with a simple mission — to bring authentic biryani
              flavors to food lovers. We combine traditional cooking techniques with fresh
              ingredients to create unforgettable meals.
            </p>
            <p style={{ color: "#ccc", lineHeight: "1.7" }}>
              Whether it's our Chicken Dum Biryani, Mutton Special Biryani, or flavorful
              Veg Biryani, every dish is prepared with care and served fresh.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div style={{ display: "flex", gap: "20px", marginBottom: "50px" }}>
          {[
            { icon: "🍚", title: "Premium Rice", desc: "Finest long-grain basmati rice for authentic taste and aroma." },
            { icon: "🌶️", title: "Rich Spices", desc: "Carefully blended spices for the perfect biryani flavor." },
            { icon: "🚚", title: "Fast Delivery", desc: "Hot, fresh, and delicious biryani delivered to your doorstep." },
          ].map((item, i) => (
            <div key={i} style={{ flex: 1, backgroundColor: "#1e1e1e", borderRadius: "10px", padding: "30px", textAlign: "center" }}>
              <div style={{ fontSize: "40px", marginBottom: "12px" }}>{item.icon}</div>
              <h4 style={{ color: "#f59e0b", marginBottom: "10px" }}>{item.title}</h4>
              <p style={{ color: "#aaa", margin: 0, fontSize: "14px", lineHeight: "1.6" }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div style={{ background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)", borderRadius: "16px", padding: "50px", textAlign: "center" }}>
          <h2 style={{ color: "#000", fontWeight: "700", marginBottom: "10px" }}>Every Biryani Tells a Story 🍛</h2>
          <p style={{ color: "#1a1a1a", fontSize: "16px", margin: 0 }}>
            Experience the perfect blend of tradition, taste, and aroma only at Biryani House.
          </p>
        </div>

      </div>
    </div>
  );
}

export default AboutUs;
