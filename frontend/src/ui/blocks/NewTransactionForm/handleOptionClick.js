function handleOptionClick(e) {
  const amountInput = document.getElementById("amount");
  amountInput.value = e.currentTarget.getAttribute("data-value");
}

export default handleOptionClick;
