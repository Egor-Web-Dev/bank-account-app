import "./customSelect.scss";
import closeSelect from "./closeSelect";
import debounce from "../../../utils/debounce";
import handleSelectClick from "./handleSelectClick";
import createWrapper from "../Wrapper/createWrapper";
import createSelectOption from "./createSelectOption";

const DEFAULT_SELECT_OPTIONS = {
  type: "button",
  placeholder: "Выберете элемент",
};

function createCustomSelect(id, options, optionClickHandler = null) {
  const wrapper = createWrapper("select");
  const field = document.createElement("div");
  const select = document.createElement("input");
  const openIcon = document.createElement("span");
  const dropdown = document.createElement("ul");

  const wrapperId = `wrap-${id}`;

  field.classList.add("select__field", "flex");
  openIcon.classList.add("select__icon");

  select.id = id;
  select.type = DEFAULT_SELECT_OPTIONS.type;
  select.value = DEFAULT_SELECT_OPTIONS.placeholder;
  select.classList.add("select__open-btn", "open-btn", "flex");
  select.onclick = handleSelectClick;

  wrapper.id = wrapperId;
  wrapper.addEventListener("mouseleave", () => {
    debounce(closeSelect, 100)(wrapperId);
  });

  dropdown.id = `${id}-dropdown`;
  dropdown.classList.add("select__dropdown", "dropdown", "list-reset");

  options.forEach((o) => {
    dropdown.append(createSelectOption({ ...o, handler: optionClickHandler }));
  });

  field.append(select, openIcon);
  wrapper.append(field, dropdown);

  return { wrapper, select, dropdown };
}

export default createCustomSelect;
