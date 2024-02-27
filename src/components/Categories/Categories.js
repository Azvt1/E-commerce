import "./Categories.css";

const Categories = ({ items }) => {
  if (!items || items.length === 0) {
    return null;
  }
  return (
    <div className="cat_container">
      {items.map((x, id) => (
        <div
          key={id}
          className="category"
          style={{ backgroundImage: `url(${x.image})` }}
        >
          <a href={x.link_url}>{x.text}</a>
        </div>
      ))}
    </div>
  );
};

export default Categories;
