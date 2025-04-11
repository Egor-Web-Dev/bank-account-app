import renderPage from "../../../pages/renderPage";
import transferFunds from "../../../api/transferFunds";
import RecentTransationsCache from "./RecentTransactionsCache";
import validateForm from "../../../utils/validateForm/validateForm";
import { showErrorPageMessage } from "../pageMessage/showPageMessage";
import { deleteValidationMessages } from "../../../utils/validateForm/deleteValidationMessages";

function handleFormSubmit(accountNumber) {
  return async (e) => {
    const form = e.currentTarget;
    const amountInput = form.querySelector("#amount");
    const destenationInput = form.querySelector("#destenation");

    const amountValue = amountInput.value.trim();
    const destenationNumber = destenationInput.value.trim();

    const isValid = validateForm(
      {
        input: destenationInput,
        option: { isRequired: true, minLength: 6 },
      },
      {
        input: amountInput,
        option: { isRequired: true, greaterZero: true },
      },
    );

    if (!isValid) return;

    if (accountNumber === destenationNumber) {
      deleteValidationMessages();
      form.reset();
      return;
    }

    const { error } = await transferFunds({
      from: accountNumber,
      to: destenationNumber,
      amount: amountValue,
    });

    if (error) return showErrorPageMessage(error);

    RecentTransationsCache.setTransactions(destenationNumber, amountValue);
    renderPage();
  };
}

export default handleFormSubmit;
