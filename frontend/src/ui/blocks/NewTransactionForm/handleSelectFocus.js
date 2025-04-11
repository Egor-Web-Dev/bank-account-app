import handleSelectInput from "./handleSelectInput";

function handleSelectFocus(menu, pastTransactions) {
  return (e) => {
    const selectValue = e.currentTarget.value.trim();

    if (selectValue > 0 && menu.children.length > 0) {
      handleSelectInput(pastTransactions)(e);
    }
  };
}

export default handleSelectFocus;
