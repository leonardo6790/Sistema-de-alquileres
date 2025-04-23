import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./categories_cards.styles.css";

const CategoryCard = ({ title, image1, image2, link, bgColor }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="category-card"
      style={{ backgroundColor: bgColor }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="category-image">
        <img src={hover ? image2 : image1} alt={title} />
      </div>
      <div className="category-content">
        <h3>{title}</h3>
        <Link to={link} className="see-more">
          Ver más
        </Link>
      </div>
    </div>
  );
};

const Categories = () => {
  return (
    <div className="categories-container">
      <CategoryCard
        title="Moda Masculina"
        image1="https://static.vecteezy.com/system/resources/thumbnails/050/246/729/small/formal-business-suit-isolated-on-transparent-background-png.png"
        image2="https://static.vecteezy.com/system/resources/previews/033/493/826/non_2x/pink-tuxedo-suit-mockup-on-transparent-background-businessman-suit-generative-ai-png.png"
        link="/moda-masculina"
        bgColor="#ffedd5"
      />
      <CategoryCard
        title="Moda Femenina"
        image1="https://static.vecteezy.com/system/resources/previews/045/801/037/non_2x/woman-dress-isolated-on-transparent-background-free-png.png"
        image2="https://images.vexels.com/media/users/3/219944/isolated/preview/1c2070d0bb107e58eb828ba7abe21fb9-ilustracion-de-vestido-de-mujer-sin-tirantes-de-traje.png"
        link="/moda-femenina"
        bgColor="#fce7f3"
      />
      <CategoryCard
        title="Accesorios"
        image1="https://png.pngtree.com/png-clipart/20241230/original/pngtree-rolex-mens-watch-isolated-png-image_18352130.png"
        image2="https://png.pngtree.com/png-clipart/20240828/original/pngtree-rolex-cosmograph-daytona-watch-png-image_15869567.png"
        link="/accesorios"
        bgColor="#ede9fe"
      />
    </div>
  );
};

export default Categories;
