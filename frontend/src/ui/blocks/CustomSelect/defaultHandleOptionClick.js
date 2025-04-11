import closeSelect from "./closeSelect";

function defaultHandleOptionClick(e) {
  const option = e.currentTarget;
  const select = option.closest(".select");
  const openBtn = select.querySelector(".select__open-btn");
  const activeBtn = select.querySelector(".select__option--active");

  if (option === activeBtn) return;

  activeBtn?.classList.remove("select__option--active");
  option.classList.add("select__option--active");

  openBtn.value = option.textContent;

  closeSelect(select.id);
}

export default defaultHandleOptionClick;
