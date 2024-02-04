import "./Categories.css";
import menImage from "../../assets/img/men.png";
import womenImage from "../../assets/img/women.png";
import accessoriesImage from "../../assets/img/access.png";

const Categories = () => {
  const categoriesData = {
    men: {
      img_url: menImage,
      link_url: "https://example.com/men",
      text: "Shop for men",
    },
    women: {
      img_url: womenImage,
      link_url: "https://example.com/women",
      text: "Shop for women",
    },
    accessories: {
      img_url: accessoriesImage,
      link_url: "https://example.com/accessories",
      text: "Shop accessories",
    },
  };

  return (
    <div className="cat_container">
      {Object.keys(categoriesData).map((x) => (
        <div
          key={x}
          className="category"
          style={{ backgroundImage: `url(${categoriesData[x].img_url})` }}
        >
          <a href={categoriesData[x].link_url}>{categoriesData[x].text}</a>
        </div>
      ))}
    </div>
  );
};

export default Categories;
