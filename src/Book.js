const Book = (props) => {
  const { id, img, link, title, author, index } = props;

  return (
    <>
      <a href={link} target="_blank">
        <article className="book">
          <img src={img} alt={title} />
          <h2 title={title}>{title}</h2>
          <h4>{author}</h4>
          <span className="book-number">{`#${index + 1}`}</span>
        </article>
      </a>
    </>
  );
};

export default Book;