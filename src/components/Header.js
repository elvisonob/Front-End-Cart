import React from 'react';

export default function Header(props) {
  const { numberCart } = props;

  const cartNumber = numberCart.reduce((a, curr) => a + curr.qty, 0);
  return (
    <header className="row block center">
      <div>
        <a href="#/">
          <h1>Small Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">{cartNumber}</a>

        <a href="#/signin">SignIn</a>
      </div>
    </header>
  );
}
