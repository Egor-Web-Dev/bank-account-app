import handleOptionClick from "./handleOptionClick";
import openSelect from "../CustomSelect/openSelect";
import closeSelect from "../CustomSelect/closeSelect";
import markSubstring from "../../../utils/markSubstring";
import createSelectOption from "../CustomSelect/createSelectOption";
import deleteErrorMessage from "../../../utils/validateForm/deleteErrorMessage";

function handleSelectInput(pastTransactions) {
  return (e) => {
    const inputValue = e.currentTarget.value.trim();
    const select = e.currentTarget.closest(".select");
    const dropdown = select.querySelector(".dropdown");

    deleteErrorMessage(e);

    const filteredTransactions = pastTransactions.filter(
      (t) => t.accountNumber.indexOf(inputValue) > -1,
    );

    if (filteredTransactions.length === 0) return closeSelect(select.id);

    dropdown.innerHTML = "";

    openSelect(select.id);

    markOptionNames(filteredTransactions, inputValue).forEach(
      ({ name, value }) => {
        dropdown.append(
          createSelectOption({
            name,
            handler: handleOptionClick,
            value,
          }),
        );
      },
    );
  };
}

function markOptionNames(transactions, value) {
  return transactions.map((t) => {
    return {
      name: markSubstring(t.accountNumber, new RegExp(value)),
      value: t.amount,
    };
  });
}

export default handleSelectInput;
