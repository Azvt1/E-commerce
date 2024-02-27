import "./Collection.css";
import { useState, useEffect } from "react";
const Collection = ({ collWBackgrnd }) => {
  const collectionItem = collWBackgrnd[0]; // Assuming you only want to display the first item
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // 2000 milliseconds = 2 seconds

    // Clear the timer when the component unmounts or when collWBackgrnd changes
    return () => clearTimeout(timer);
  }, [collectionItem]);

  if (!isVisible) {
    return null;
  }
  return (
    <div className="coll_container">
      <img src={collectionItem.image} alt="Collection" />
      <div className="coll_content">
        <div>
          <h1>{collectionItem.title}</h1>
          <p>{collectionItem.text}</p>
          <a href="/">{collectionItem.buttonText}</a>
        </div>
      </div>
    </div>
  );
};

export default Collection;
