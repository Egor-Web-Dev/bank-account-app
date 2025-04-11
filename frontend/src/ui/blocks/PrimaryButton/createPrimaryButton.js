import "./primaryButton.scss";

function createPrimaryButton({ name, type = "button", iconPath = "" }) {
  const btn = document.createElement("button");

  btn.type = type;
  btn.textContent = name;
  btn.classList.add("primary-btn", "btn-reset", "flex");

  if (iconPath) btn.prepend(createButtonIcon(iconPath));

  return btn;
}

function createButtonIcon(iconPath) {
  const icon = document.createElement("span");

  icon.innerHTML = iconPath;
  icon.classList.add("primary-btn__icon", "flex");

  return icon;
}

export default createPrimaryButton;
