import { useState } from "react";
import "./App.css";
import HideButton from "./components/HideButton";
import Genre from "./components/Genre";

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

  return (
    <>
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
      {showFiction && <Genre genre="Fiction" books={bookData.fiction}></Genre>}
      {showNonFiction && (
        <Genre genre="Non-Fiction" books={bookData["non-fiction"]}></Genre>
      )}
      {showChildren && (
        <Genre genre="Children" books={bookData.children}></Genre>
      )}
    </>
  );
}

export default App;
