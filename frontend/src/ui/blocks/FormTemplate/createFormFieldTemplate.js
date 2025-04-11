function createFormFieldTemplate({ labelText, fieldId, inputId, inputEl }) {
  const field = document.createElement("div");
  const label = document.createElement("label");

  field.id = fieldId;
  field.classList.add("form__field", "flex");

  label.textContent = labelText;
  label.setAttribute("for", inputId);
  label.classList.add("form__label", "label");

  field.append(label, inputEl);

  return field;
}

export default createFormFieldTemplate;
