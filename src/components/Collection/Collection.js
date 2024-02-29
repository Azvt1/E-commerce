import "./Collection.css";
import { useState, useEffect } from "react";
const Collection = ({ collWBackgrnd }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [collWBackgrnd]);

  if (!isVisible) {
    return null;
  }
  const collectionItem = collWBackgrnd[0];
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
