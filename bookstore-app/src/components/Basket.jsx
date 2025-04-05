import React from "react";

const Basket = ({ items, removeFromBasket }) => {
  let totalPrice = 0;
  for (let i = 0; i < items.length; i++) {
    totalPrice += items[i].price;
  }

  return (
    <div>
      <h1>Basket</h1>
      {items.length === 0 ? (
        <p>No items</p>
      ) : (
        <ul>
          {items.map((item, idx) => (
            <li>
              {item.title} - ${item.price}
              <button
                onClick={() => removeFromBasket(idx)}
                style={{ marginLeft: "10px" }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${totalPrice}</h3>
    </div>
  );
};

export default Basket;
