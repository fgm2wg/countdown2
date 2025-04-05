import React from "react";

const Genre = ({ genre, books, addToBasket }) => {
  return (
    <div>
      <h2>{genre}:</h2>
      <ul>
        {books.map((book, idx) => (
          <li key={idx}>
            <i>{book.title}</i>, {book.author}, ${book.price}
            <button
              onClick={() => addToBasket(book)}
              style={{ marginLeft: "10px" }}
            >
              Add to Basket
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Genre;
