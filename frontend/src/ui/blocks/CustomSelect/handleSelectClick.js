function handleSelectClick(e) {
  const select = e.currentTarget.closest(".select");
  select.classList.toggle("select--open");
}

export default handleSelectClick;
