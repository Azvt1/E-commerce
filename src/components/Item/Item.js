import "./Item.css";

export default function Item({ imageURL, title, price }) {
  console.log(imageURL);
  return (
    <div className="shop_item">
      <img src={`http://${imageURL}`} alt="item-imags" />
      <h4>{title}</h4>
      <p>${price}</p>
    </div>
  );
}
