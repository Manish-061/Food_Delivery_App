import React, { useRef } from "react";
import { categories } from "../../assets/assets";
import "./ExploreMenu.css";

const ExploreMenu = ({ category, setCategory }) => {
  const menuRef = useRef(null);

  const scrollHorizontally = (direction) => {
    if (menuRef.current) {
      const scrollAmount = direction === "left" ? -250 : 250;
      menuRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="explore-menu-section">
      <div className="explore-menu-header">
        <div className="header-text-group">
          <h2 class="explore-menu-title">Explore Your Cravings</h2>
          <p class="explore-menu-subtitle">
            Find your next favorite meal by category, from local classics to
            global flavors.
          </p>
        </div>
        <div className="scroll-controls">
          <button
            className="scroll-btn"
            onClick={() => scrollHorizontally("left")}
          >
            <i className="bi bi-arrow-left-circle-fill"></i>
          </button>
          <button
            className="scroll-btn"
            onClick={() => scrollHorizontally("right")}
          >
            <i className="bi bi-arrow-right-circle-fill"></i>
          </button>
        </div>
      </div>

      <div className="category-list-wrapper" ref={menuRef}>
        {categories.map((item, index) => {
          const isActive = item.category === category;
          return (
            <div
              key={index}
              className={`category-item ${isActive ? "active" : ""}`}
              onClick={() =>
                setCategory((prev) =>
                  prev === item.category ? "All" : item.category
                )
              }
            >
              <img
                src={item.icon}
                alt={item.category}
                className="category-icon"
              />
              <p className="category-name">{item.category}</p>
            </div>
          );
        })}
      </div>
      <hr className="divider" />
    </div>
  );
};

export default ExploreMenu;
