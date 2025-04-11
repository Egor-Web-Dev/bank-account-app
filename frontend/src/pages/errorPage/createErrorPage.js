import icon from "../../assets/images/icon";
import renderAuthPage from "../auth/renderAuthPage";
import ERROR_PAGE_CLASS_NAME from "./pageClassName";
import MESSAGE_STATUS from "../../config/messageStatus";
import createPageMessage from "../../ui/blocks/pageMessage/createPageMessage";
import PrimaryBtnOptions from "../../ui/blocks/PrimaryButton/PrimaryBtnOptions";
import createPrimaryButton from "../../ui/blocks/PrimaryButton/createPrimaryButton";
import createContentWrapper from "../../ui/blocks/ContentWrapper/createContentWrapper";

const RETURN_BTN_OPTION = new PrimaryBtnOptions(
  "На главную",
  "button",
  icon.home,
);

function createErrorPage(errorText) {
  const { section, content } = createContentWrapper(ERROR_PAGE_CLASS_NAME);
  const returnBtn = createPrimaryButton(RETURN_BTN_OPTION);

  returnBtn.classList.add("align-end");
  returnBtn.addEventListener("click", () => {
    renderAuthPage();
  });

  content.append(createPageMessage(errorText, MESSAGE_STATUS.error), returnBtn);

  return section;
}

export default createErrorPage;
