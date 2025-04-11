import "./templateForm.scss";
import defaultFormSubmitHandler from "./defaultFormSubmitHandler";

function createFormTemplate({ className, handlerSubmit }) {
  const form = document.createElement("form");
  const fieldSet = document.createElement("fieldset");

  fieldSet.classList.add(
    `${className}__fieldset`,
    "form__fieldset",
    "fieldset",
    "flex",
  );

  form.noValidate = true;
  form.classList.add(`${className}__form`, "form");
  form.addEventListener("submit", defaultFormSubmitHandler(handlerSubmit));

  form.append(fieldSet);

  return { form, fieldSet };
}

export default createFormTemplate;
