import login from "../../../api/login";
import renderPage from "../../../pages/renderPage";
import PAGE_PATH_NAME from "../../../config/pagePath";
import validateForm from "../../../utils/validateForm/validateForm";
import { showErrorPageMessage } from "../pageMessage/showPageMessage";
import { deleteSuccessMessages } from "../../../utils/validateForm/deleteValidationMessages";

const VALIDATION_OPTION = {
  isRequired: true,
  noSpace: true,
  minLength: 6,
};

async function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const loginInput = form.querySelector("#login");
  const passwordInput = form.querySelector("#password");

  const loginValue = loginInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  const isValid = validateForm(
    {
      input: loginInput,
      option: VALIDATION_OPTION,
    },
    {
      input: passwordInput,
      option: VALIDATION_OPTION,
    },
  );

  if (!isValid) return;

  const data = await login(loginValue, passwordValue);

  if (data.error) {
    showErrorPageMessage(data.error);
    deleteSuccessMessages();
    return;
  }

  history.pushState(null, "", PAGE_PATH_NAME.accounts);

  renderPage();
}

export default handleFormSubmit;
