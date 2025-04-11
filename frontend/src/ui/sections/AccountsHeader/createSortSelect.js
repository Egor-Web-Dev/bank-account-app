import handleOptionBtnClick from "./handleOptionBtnClick";
import SelectOptions from "../../blocks/CustomSelect/SelectOptions";
import createCustomSelect from "../../blocks/CustomSelect/createCustomSelect";
import ACCOUNTS_PAGE_CLASS_NAME from "../../../pages/accounts/pageClassName";

const SELECT_DATA = new SelectOptions("sort-select", "button", "Сортировка");

function createSortSelect(options, searchValue) {
  const { wrapper, select } = createCustomSelect(
    SELECT_DATA.id,
    [...options],
    handleOptionBtnClick,
  );
  const selectOptions = wrapper.querySelectorAll(".select__option");

  wrapper.classList.add(`${ACCOUNTS_PAGE_CLASS_NAME}__sort-select`);

  select.value = SELECT_DATA.placeholder;

  for (const o of selectOptions) {
    if (searchValue === o.getAttribute("data-value")) {
      select.value = o.textContent;

      o.classList.add("select__option--active");
    }
  }

  return wrapper;
}

export default createSortSelect;
