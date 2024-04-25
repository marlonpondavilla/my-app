import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.css";
import {books} from './booksData';
import Book from './Book';

const BookList = () => {
  
  return (
    <>
      <h1>Discover Your Next Favorite Read: 2024's Best Books!</h1>
      <div className="sub-heading"></div>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} index={index} />;
        })}
      </section>
    </>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
