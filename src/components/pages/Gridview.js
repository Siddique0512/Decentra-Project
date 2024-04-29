import React from "react";

const GridView = ({ products }) => {
  return (
    <div className="section">
      <div className="container grid grid-three-column">
        {products.map((curElem) => (
          <figure key={curElem.id} className="grid-item">
            <img src={curElem.imageUrl} alt={curElem.name} className="product-image" />
            <figcaption className="image-overlay"></figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default GridView;
