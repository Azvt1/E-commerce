import "./Item.css";

export default function Item({ imageURL, title, price }) {
  return (
    <div className="shop_item">
      <img src={imageURL} alt="item-imags" />
      <h4>{title}</h4>
      <p>${price}</p>
    </div>
  );
}
