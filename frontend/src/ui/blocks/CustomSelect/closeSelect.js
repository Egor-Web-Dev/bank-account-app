function closeSelect(id) {
  const select = document.getElementById(id);
  select?.classList.remove("select--open");
}

export default closeSelect;
