import React from 'react';

const Product = (props) => {
  const { product, onAddItem } = props;
  return (
    <div>
      <img className="small" src={product.image} alt={product.name}></img>
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <button onClick={() => onAddItem(product)}>Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
