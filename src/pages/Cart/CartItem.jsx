import { useState } from "react";
import IncrementButton from "../../components/IncrementButton/IncrementButton"
import { RxCross2 } from "react-icons/rx";

export default function CartItem( {title, image, price, quantity, id, removeHandler}) {
    const [count, setCount] = useState(quantity);

    const countHandler = (increase) => {
        if (increase) {
          setCount(prevState => prevState + 1);
        } else {
          setCount(prevState => prevState - 1);
        }
    }
    
    return (
        <div className="cart-item">
        <div className="image-title-container">
         <img src={image} alt="item-image" />
         <h3>{title}</h3>
        </div>
        <h4>${price}</h4>
        <h4><IncrementButton initialNumber={count} key={id} quantityHandler={countHandler}/></h4>
        <h4>${price * count}</h4>
        <button className="remove-item" onClick={() => {
          removeHandler(id)
        }}><RxCross2/></button>
      </div>
    )
}