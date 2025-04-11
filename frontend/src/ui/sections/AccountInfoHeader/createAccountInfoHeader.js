import "./accountInfoHeader.scss";
import icon from "../../../assets/images/icon";
import createSectionHeader from "../SectionHeaderWrapper/createSectionHeader";
import PrimaryBtnOptions from "../../blocks/PrimaryButton/PrimaryBtnOptions";
import createPrimaryButton from "../../blocks/PrimaryButton/createPrimaryButton";

const RETURN_BTN_OPTION = new PrimaryBtnOptions(
  "Вернуться назад",
  "button",
  icon.arrowBack,
);

function createAccountInfoHeader(option) {
  const header = createSectionHeader(option);
  const returnBtn = createPrimaryButton(RETURN_BTN_OPTION);

  returnBtn.classList.add(`${option.className}__return-btn`);

  returnBtn.addEventListener("click", () => {
    history.back();
  });

  header.append(returnBtn);

  return header;
}

export default createAccountInfoHeader;
