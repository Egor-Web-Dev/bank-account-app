import createInput from "../Input/createInput";
import InputOptions from "../Input/InputOptions";
import handleFormSubmit from "./handleFormSubmit";
import FormOptions from "../FormTemplate/FormOptions";
import SelectOptions from "../CustomSelect/SelectOptions";
import FormFieldOptions from "../FormTemplate/FormFieldOptions";
import PrimaryBtnOptions from "../PrimaryButton/PrimaryBtnOptions";
import createFormTemplate from "../FormTemplate/createFormTemplate";
import createCustomSelect from "../CustomSelect/createCustomSelect";
import createPrimaryButton from "../PrimaryButton/createPrimaryButton";
import EXCHANGE_PAGE_CLASS_NAME from "../../../pages/exchange/pageClassName";
import createFormFieldTemplate from "../FormTemplate/createFormFieldTemplate";
import deleteErrorMessage from "../../../utils/validateForm/deleteErrorMessage";

const FORM_OPTION = new FormOptions(EXCHANGE_PAGE_CLASS_NAME, handleFormSubmit);
const SELECT_TO_DATA = new SelectOptions("select-to", "button", "y.e.");
const SELECT_FROM_DATA = new SelectOptions("select-from", "button", "y.e.");
const PRIMARY_BTN_OPTION = new PrimaryBtnOptions("Обменять", "submit");
const INPUT_SUM_OPTION = new InputOptions(
  "sum",
  "number",
  "sum",
  "Введите сумму",
);

function createCurrencyExchangeForm(currencyCodes) {
  const fieldsetTop = document.createElement("div");
  const inputSum = createInput(INPUT_SUM_OPTION);
  const form = createFormTemplate(FORM_OPTION);
  const exchangeBtn = createPrimaryButton(PRIMARY_BTN_OPTION);
  const selectFrom = createExchangeFormSelect(
    SELECT_FROM_DATA.id,
    currencyCodes,
    currencyCodes[1].name,
  );
  const selectTo = createExchangeFormSelect(
    SELECT_TO_DATA.id,
    currencyCodes,
    currencyCodes[0].name,
  );

  const fieldFromOption = new FormFieldOptions(
    "field-from",
    "",
    "Из",
    selectFrom,
  );

  const fieldToOption = new FormFieldOptions("field-to", "", "в", selectTo);
  const fieldSumOption = new FormFieldOptions(
    "field-sum",
    "sum",
    "Сумма",
    inputSum,
  );

  const fieldFrom = createFormFieldTemplate(fieldFromOption);
  const fieldTo = createFormFieldTemplate(fieldToOption);
  const fieldSum = createFormFieldTemplate(fieldSumOption);

  form.form.classList.add("flex");
  fieldsetTop.classList.add("form__fieldset-top", "flex");
  fieldSum.classList.add("field-sum");

  inputSum.addEventListener("input", deleteErrorMessage);

  fieldsetTop.append(fieldFrom, fieldTo);
  form.fieldSet.append(fieldsetTop, fieldSum);
  form.form.append(exchangeBtn);

  return form.form;
}

function createExchangeFormSelect(id, options, activeOption) {
  const { select, wrapper } = createCustomSelect(id, options);
  select.value = activeOption;
  return wrapper;
}

export default createCurrencyExchangeForm;
