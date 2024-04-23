const Book = (props) => {
  const { id, img, title, author } = props;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button>click me</button>
    </article>
  );
};

export default Book;