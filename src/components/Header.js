import React from 'react';

export default function Header(props) {
  const { numberCart } = props;

  return (
    <header className="row block center">
      <div>
        <a href="#/">
          <h1>Small Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart{' '}
          {numberCart ? <button className="badge">{numberCart}</button> : ''}
        </a>

        <a href="#/signin">SignIn</a>
      </div>
    </header>
  );
}
