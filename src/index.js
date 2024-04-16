import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";

const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/81tVBUv75vL._AC_UL300_SR300,200_.jpg",
    title: "Just for the Summer Paperback",
    author: "Abby Jimenez",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/713-J3tw46L._AC_UL600_SR600,400_.jpg",
    title: "Dog Man: The Scarlet Shedder: A Graphic Novel (Dog Man #12)",
    author: "Dav Pilkey ",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/81YkqyaFVEL._AC_UL600_SR600,400_.jpg",
    title:
      "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    author: "James Webb ",
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  
  return (
    <section>
      <form onSubmit={() =>{
        console.log(`was submitted${12+3}`);
      }}>
        <h2>Typical form</h2>
        <input type="text" name="example" onChange={(e)=>{
          console.log("was changed " +e.target.value);
        }} style={{ margin: "1rem 0" }} />
      </form>
      <button onClick={() => {
        console.log("test");
      }} type="submit">click me!</button>
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>

      {/* {console.log("Hello world")} */}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
