import handleClick from "./handleClick";
import getActiveItem from "./getActiveItem";

function handleArrowClick(e) {
  const attribute = e.currentTarget.getAttribute("data-value");
  const activeItem = getActiveItem();
  const currentItem =
    attribute === "next"
      ? activeItem.nextElementSibling
      : activeItem.previousElementSibling;

  if (!currentItem) return;

  handleClick(activeItem, currentItem);
}

export default handleArrowClick;
