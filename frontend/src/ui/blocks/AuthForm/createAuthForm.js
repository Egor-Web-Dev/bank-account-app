import "./authForm.scss";
import createInput from "../Input/createInput";
import InputOptions from "../Input/InputOptions";
import handleFormSubmit from "./handleFormSubmit";
import FormOptions from "../FormTemplate/FormOptions";
import FormFieldOptions from "../FormTemplate/FormFieldOptions";
import PrimaryBtnOptions from "../PrimaryButton/PrimaryBtnOptions";
import createFormTemplate from "../FormTemplate/createFormTemplate";
import AUTH_PAGE_CLASS_NAME from "../../../pages/auth/pageClassName";
import createPrimaryButton from "../PrimaryButton/createPrimaryButton";
import createFormFieldTemplate from "../FormTemplate/createFormFieldTemplate";
import deleteErrorMessage from "../../../utils/validateForm/deleteErrorMessage";

const FORM_OPTION = new FormOptions(AUTH_PAGE_CLASS_NAME, handleFormSubmit);
const LOGIN_BTN_OPTION = new PrimaryBtnOptions("Войти", "submit");
const LOGIN_INPUT_OPTION = new InputOptions(
  "login",
  "text",
  "login",
  "Введите логин",
);
const PASSWORD_INPUT_OPTION = new InputOptions(
  "password",
  "password",
  "password",
  "Введите пароль",
);

function createAuthForm() {
  const loginInput = createInput(LOGIN_INPUT_OPTION);
  const passwordInput = createInput(PASSWORD_INPUT_OPTION);
  const loginBtn = createPrimaryButton(LOGIN_BTN_OPTION);
  const { form, fieldSet } = createFormTemplate(FORM_OPTION);

  const loginFieldOption = new FormFieldOptions(
    "field-login",
    "login",
    "Логин",
    loginInput,
  );

  const passwordFieldOption = new FormFieldOptions(
    "field-password",
    "password",
    "Пароль",
    passwordInput,
  );

  const loginField = createFormFieldTemplate(loginFieldOption);
  const passwordField = createFormFieldTemplate(passwordFieldOption);

  loginBtn.classList.add("form__submit-btn");

  form.setAttribute("data-test-id", "auth-form");

  loginInput.autofocus = true;
  loginInput.addEventListener("input", deleteErrorMessage);

  passwordInput.addEventListener("input", deleteErrorMessage);

  fieldSet.append(loginField, passwordField);
  form.append(loginBtn);

  return form;
}

export default createAuthForm;
