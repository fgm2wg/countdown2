import { useState } from "react";
import "./App.css";
import HideButton from "./components/HideButton";
import Genre from "./components/Genre";
import Basket from "./components/Basket";

function App() {
  const bookData = {
    fiction: [
      { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 10.0 },
      { title: "1984", author: "George Orwell", price: 8.5 },
      { title: "The Catcher in the Rye", author: "J.D. Salinger", price: 9.8 },
    ],
    "non-fiction": [
      {
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        price: 15.0,
      },
      { title: "In Cold Blood", author: "Truman Capote", price: 12.0 },
      { title: "The Diary of a Young Girl", author: "Anne Frank", price: 7.0 },
    ],
    children: [
      { title: "Charlotte's Web", author: "E.B. White", price: 5.0 },
      { title: "The Gruffalo", author: "Julia Donaldson", price: 6.0 },
      {
        title: "Where the Wild Things Are",
        author: "Maurice Sendak",
        price: 8.0,
      },
    ],
  };

  const [showFiction, setShowFiction] = useState(true);
  const [showNonFiction, setShowNonFiction] = useState(true);
  const [showChildren, setShowChildren] = useState(true);
  const [basket, setBasket] = useState([]);

  const addToBasket = (book) => {
    setBasket((val) => val.concat(book));
  };

  const removeFromBasket = (index) => {
    setBasket((val) => {
      const copy = [...val];
      copy.splice(index, 1);
      return copy;
    });
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1, padding: "20px" }}>
        <h1>Online Bookstore</h1>
        <HideButton
          label={showFiction ? "Hide Fiction" : "Show Fiction"}
          onClick={() => setShowFiction((val) => !val)}
        ></HideButton>
        <HideButton
          label={showNonFiction ? "Hide Non-Fiction" : "Show Non-Fiction"}
          onClick={() => setShowNonFiction((val) => !val)}
        ></HideButton>
        <HideButton
          label={showChildren ? "Hide Children" : "Show Children"}
          onClick={() => setShowChildren((val) => !val)}
        ></HideButton>
        {showFiction && (
          <Genre
            genre="Fiction"
            books={bookData.fiction}
            addToBasket={addToBasket}
          ></Genre>
        )}
        {showNonFiction && (
          <Genre
            genre="Non-Fiction"
            books={bookData["non-fiction"]}
            addToBasket={addToBasket}
          ></Genre>
        )}
        {showChildren && (
          <Genre
            genre="Children"
            books={bookData.children}
            addToBasket={addToBasket}
          ></Genre>
        )}
      </div>

      <div style={{ flex: 1, padding: "20px", borderLeft: "2px solid gray" }}>
        <Basket items={basket} removeFromBasket={removeFromBasket}></Basket>
      </div>
    </div>
  );
}

export default App;
