import defaultHandleOptionClick from "./defaultHandleOptionClick";

const OPTION_BTN_TYPE = "button";

function createSelectOption({ name, handler = null, value = null }) {
  const item = document.createElement("li");
  const optionBtn = document.createElement("button");

  item.classList.add("select__item");

  const handleOptionClick = (e) => {
    handler?.(e);
    defaultHandleOptionClick(e);
  };

  optionBtn.innerHTML = name;
  optionBtn.type = OPTION_BTN_TYPE;
  optionBtn.setAttribute("data-value", value || name);
  optionBtn.classList.add("select__option", "btn-reset", "flex");
  optionBtn.addEventListener("click", handleOptionClick);

  item.append(optionBtn);

  return item;
}

export default createSelectOption;
