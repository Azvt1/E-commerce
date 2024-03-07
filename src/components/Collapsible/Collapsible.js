import { useRef, useState } from "react";
import "./Collapsible.css";
export default function Collapsible({
  title,
  content,
  itemList,
  setItemList,
  filters,
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

  const clickHandler = (buttonType, color = "", id) => {
    let buttons = document.getElementsByClassName("collapse_content");

    let filterIndex = filters.findIndex((item) => item.type === buttonType);
    if (filterIndex !== -1) {
      filters = filters.splice(filterIndex, 1);
    }

    for (let button of buttons) {
      if (buttonType === "Colors" && button.name === "Colors") {
        if (parseInt(button.id) === id && !button.selected) {
          let updatedList = itemList.filter((item) => item.color === color);
          button.className = "collapse_content show selected";
          button.selected = true;
          setItemList(updatedList);
          filters.push({ type: buttonType, value: color });
          console.log(filters);
          // setFilters((prevFilters) => [
          //   ...prevFilters,
          //   { type: buttonType, value: color },
          // ]);
          // updatedFilters.push({ type: buttonType, value: color });
          unsetSelectedClass(buttons, id);
          break;
        } else if (parseInt(button.id) === id && button.selected) {
          button.className = "collapse_content show";
          button.selected = false;
          setItemList(itemList);
          break;
        }
      } else if (buttonType === "Size" && button.name === "Size") {
        if (parseInt(button.id) === id && !button.selected) {
          let updatedList = itemList.filter((item) => item.size === color);
          button.className = "collapse_content show selected";
          button.selected = true;
          console.log(filters);
          filters.push({ type: buttonType, value: color });
          break;
        }
      }
    }
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
