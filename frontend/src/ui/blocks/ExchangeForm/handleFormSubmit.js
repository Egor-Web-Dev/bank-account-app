import currencyBuy from "../../../api/currencyBuy";
import validateForm from "../../../utils/validateForm/validateForm";
import updateClientCurrenciesList from "../ClientCurrencies/updateClientCurrenciesList";
import { setClientCurrencies } from "../../../pages/exchange/exchangePageModel";
import {
  showErrorPageMessage,
  showSuccessPageMessage,
} from "../pageMessage/showPageMessage";
import {
  deleteSuccessMessages,
  deleteValidationMessages,
} from "../../../utils/validateForm/deleteValidationMessages";

const VALIDATION_OPTION = {
  isRequired: true,
  greaterZero: true,
};

const SUCCESS_MESSAGE_TEXT = "Перевод выполнен";

async function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const inputSum = form.querySelector("#sum");
  const selectFrom = form.querySelector("#select-from");
  const selectTo = form.querySelector("#select-to");

  const isValid = validateForm({
    input: inputSum,
    option: VALIDATION_OPTION,
  });

  if (!isValid) return;

  const { payload, error } = await currencyBuy({
    from: selectFrom.value,
    to: selectTo.value,
    amount: inputSum.value.trim(),
  });

  if (error) {
    showErrorPageMessage(error);
    deleteSuccessMessages();
    return;
  }

  showSuccessPageMessage(SUCCESS_MESSAGE_TEXT);
  deleteValidationMessages();

  setClientCurrencies(payload);
  updateClientCurrenciesList(payload);

  form.reset();
}

export default handleFormSubmit;
