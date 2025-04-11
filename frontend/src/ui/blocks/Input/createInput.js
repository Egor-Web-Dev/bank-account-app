import "./Input.scss";

function createInput({ id, type, name, placeholder }) {
  const input = document.createElement("input");

  input.id = id;
  input.type = type;
  input.name = name;
  input.placeholder = placeholder;
  input.classList.add("input");

  return input;
}

export default createInput;
