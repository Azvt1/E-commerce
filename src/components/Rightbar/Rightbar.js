import BrowseCategories from "./BrowseCaterogires";
import Filters from "./Filters";
import "./Rightbar.css";

export default function Rightbar({
  itemList,
  setItemList,
  wholeItemListRef,
  colorList,
  sizes,
}) {
  return (
    <div className="rightbar_container">
      <h3 className="rightbar_title">BROWSE BY CATEGORIES</h3>
      <hr className="horizontal_line"></hr>
      <br></br>
      <BrowseCategories
        itemList={itemList}
        setItemList={setItemList}
        wholeItemListRef={wholeItemListRef}
      />
      <Filters
        colorList={colorList}
        wholeItemsList={wholeItemListRef}
        setItemList={setItemList}
        sizes={sizes}
      />
    </div>
  );
}
