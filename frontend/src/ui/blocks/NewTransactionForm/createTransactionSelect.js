import handleKeydown from "./handleKeydown";
import handleSelectFocus from "./handleSelectFocus";
import handleOptionClick from "./handleOptionClick";
import handleSelectInput from "./handleSelectInput";
import SelectOptions from "../CustomSelect/SelectOptions";
import createCustomSelect from "../CustomSelect/createCustomSelect";

const SELECT_DATA = new SelectOptions(
  "destenation",
  "number",
  "Введите номер счёта получателя",
  "account",
);

function createTransactionSelect(pastTransactions) {
  const { wrapper, select, dropdown } = createCustomSelect(
    SELECT_DATA.id,
    [],
    handleOptionClick,
  );

  select.name = SELECT_DATA.name;
  select.type = SELECT_DATA.type;
  select.placeholder = SELECT_DATA.placeholder;
  select.onclick = null;
  select.addEventListener("keydown", handleKeydown);
  select.addEventListener("input", handleSelectInput(pastTransactions));
  select.addEventListener(
    "focus",
    handleSelectFocus(dropdown, pastTransactions),
  );
  select.addEventListener(
    "mouseenter",
    handleSelectFocus(dropdown, pastTransactions),
  );

  return wrapper;
}

export default createTransactionSelect;
