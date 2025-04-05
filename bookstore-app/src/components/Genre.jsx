import React from "react";

const Genre = ({ genre, books }) => {
  return (
    <div>
      <h2>{genre}:</h2>
      <ul>
        {books.map((book, idx) => (
          <li key={idx}>
            <i>{book.title}</i>, {book.author}, ${book.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Genre;
