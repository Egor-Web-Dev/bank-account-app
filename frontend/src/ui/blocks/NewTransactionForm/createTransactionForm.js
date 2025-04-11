import handleKeydown from "./handleKeydown";
import icon from "../../../assets/images/icon";
import createInput from "../Input/createInput";
import InputOptions from "../Input/InputOptions";
import handleFormSubmit from "./handleFormSubmit";
import FormOptions from "../FormTemplate/FormOptions";
import RecentTransationsCache from "./RecentTransactionsCache";
import FormFieldOptions from "../FormTemplate/FormFieldOptions";
import createTransactionSelect from "./createTransactionSelect";
import PrimaryBtnOptions from "../PrimaryButton/PrimaryBtnOptions";
import createFormTemplate from "../FormTemplate/createFormTemplate";
import createPrimaryButton from "../PrimaryButton/createPrimaryButton";
import createFormFieldTemplate from "../FormTemplate/createFormFieldTemplate";
import deleteErrorMessage from "../../../utils/validateForm/deleteErrorMessage";

const SEND_BTN_OPTION = new PrimaryBtnOptions(
  "Отправить",
  "submit",
  icon.envelope,
);

const AMOUNT_INPUT_OPTION = new InputOptions(
  "amount",
  "number",
  "amount",
  "Введите сумму перевода",
);

function createTransactionForm(accountNumber, className) {
  const amountInput = createInput(AMOUNT_INPUT_OPTION);
  const formOptions = new FormOptions(
    className,
    handleFormSubmit(accountNumber),
  );
  const { form, fieldSet } = createFormTemplate(formOptions);
  const sendBtn = createPrimaryButton(SEND_BTN_OPTION);
  const destinationSelect = createTransactionSelect(
    RecentTransationsCache.getTransactions(),
  );

  const amountFieldOption = new FormFieldOptions(
    "field-amount",
    AMOUNT_INPUT_OPTION.id,
    "Сумма перевода",
    amountInput,
  );

  const destinationFieldOption = new FormFieldOptions(
    "field-destenation",
    "destenation",
    "Номер счёта получателя",
    destinationSelect,
  );

  const amountField = createFormFieldTemplate(amountFieldOption);
  const destinationField = createFormFieldTemplate(destinationFieldOption);

  sendBtn.classList.add("form__send-btn");
  form.setAttribute("data-test-id", "transaction-form");

  amountInput.addEventListener("input", deleteErrorMessage);
  amountInput.addEventListener("keydown", handleKeydown);

  fieldSet.append(destinationField, amountField);
  form.append(sendBtn);

  return form;
}

export default createTransactionForm;
