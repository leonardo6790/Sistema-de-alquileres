import React, { useRef } from "react";
import "./product_carousel.styles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const products = [
  { id: 1, name: "Vestido Hombre", img: "https://static.vecteezy.com/system/resources/thumbnails/050/246/729/small/formal-business-suit-isolated-on-transparent-background-png.png" },
  { id: 2, name: "vestido Mujer", img: "https://static.vecteezy.com/system/resources/previews/045/801/037/non_2x/woman-dress-isolated-on-transparent-background-free-png.png" },
  { id: 3, name: "Vestido Hombre", img: "https://static.vecteezy.com/system/resources/thumbnails/050/246/729/small/formal-business-suit-isolated-on-transparent-background-png.png" },
  { id: 4, name: "vestido Mujer", img: "https://static.vecteezy.com/system/resources/previews/045/801/037/non_2x/woman-dress-isolated-on-transparent-background-free-png.png" },
  { id: 5, name: "Vestido Hombre", img: "https://static.vecteezy.com/system/resources/thumbnails/050/246/729/small/formal-business-suit-isolated-on-transparent-background-png.png" },
  { id: 6, name: "vestido Mujer", img: "https://static.vecteezy.com/system/resources/previews/045/801/037/non_2x/woman-dress-isolated-on-transparent-background-free-png.png" },
];

const ProductCarousel = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 300;
    if (direction === "left") {
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="product-carousel-container">
      <button className="carousel-btn left" onClick={() => scroll("left")}>
        <FaChevronLeft />
      </button>

      <div className="product-carousel" ref={carouselRef}>
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.img} alt={product.name} />
            <h4>{product.name}</h4>
          </div>
        ))}
      </div>

      <button className="carousel-btn right" onClick={() => scroll("right")}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ProductCarousel;
