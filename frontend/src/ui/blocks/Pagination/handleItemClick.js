import getActiveItem from "./getActiveItem";
import handleClick from "./handleClick";

function handleItemClick(e) {
  const activeItem = getActiveItem();
  const currentItem = e.currentTarget.parentElement;

  if (activeItem === currentItem) return;

  handleClick(activeItem, currentItem);
}

export default handleItemClick;
