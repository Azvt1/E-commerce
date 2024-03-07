import { useRef, useState } from "react";
import "./Collapsible.css";
export default function Collapsible({
  title,
  content,
  itemList,
  setItemList,
  filters,
  updateFilters,
}) {
  const [isSelected, setIsSelected] = useState(false);
  const [buttonSelected, setButtonSelected] = useState(false);

  const unsetSelectedClass = (buttons, id) => {
    for (let button of buttons) {
      if (parseInt(button.id) !== id) {
        button.selected = false;
        button.className = "collapse_content show";
      }
    }
  };

  //button type can be: Colors, Size, Price

  const clickHandler = (buttonType, value = "", id) => {
    console.log(filters);
    updateFilters({ type: buttonType, value: value });
  };

  return (
    <div className="collapsible_container">
      <div className={`collapse_item ${isSelected ? "selected" : ""}`}>
        <div
          className="collapse_title"
          onClick={() => {
            setIsSelected(!isSelected);
          }}
        >
          <h3>{title}</h3>
          <span>{isSelected ? "-" : "+"}</span>
        </div>
        <ul>
          {content.map((item, id) => (
            <li className={`list  ${isSelected ? "" : "hide"}`}>
              <button
                name={title}
                id={id}
                className={
                  isSelected ? "collapse_content show" : "collapse_content"
                }
                onClick={() => {
                  clickHandler(title, item, id);
                }}
                selected={false}
                value={item}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
