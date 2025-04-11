import "./accountsHeader.scss";
import icon from "../../../assets/images/icon";
import createSortSelect from "./createSortSelect";
import SORT_SELECT_OPTIONS from "./selectOptions";
import SearchParams from "../../../utils/SearchParams";
import handleNewAccountBtnClick from "./handleNewAccountBtnClick";
import PrimaryBtnOptions from "../../blocks/PrimaryButton/PrimaryBtnOptions";
import ACCOUNTS_PAGE_CLASS_NAME from "../../../pages/accounts/pageClassName";
import createPrimaryButton from "../../blocks/PrimaryButton/createPrimaryButton";
import createSectionHeader from "../SectionHeaderWrapper/createSectionHeader";

const HEADER_OPTION = {
  title: "Ваши счета",
  className: ACCOUNTS_PAGE_CLASS_NAME,
};

const NEW_ACCOUNT_BTN_OPTION = new PrimaryBtnOptions(
  "Создать новый счёт",
  "button",
  icon.plus,
);

function createAccountsHeader() {
  const sectionWrapper = createSectionHeader(HEADER_OPTION);
  const newAccountBtn = createPrimaryButton(NEW_ACCOUNT_BTN_OPTION);
  const sortSelect = createSortSelect(
    SORT_SELECT_OPTIONS,
    SearchParams.get("sort"),
  );

  newAccountBtn.classList.add(`${ACCOUNTS_PAGE_CLASS_NAME}__new-account-btn`);
  newAccountBtn.addEventListener("click", handleNewAccountBtnClick);

  sectionWrapper.append(sortSelect, newAccountBtn);

  return sectionWrapper;
}

export default createAccountsHeader;
