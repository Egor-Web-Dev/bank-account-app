import "./newTransactionBlock.scss";
import createSection from "../Section/createSection";
import createTransactionForm from "./createTransactionForm";
import ACCOUNT_HISTORY_CLASS_NAME from "../../../pages/accountInfo/accountHistory/pageClassName";
import { getAccountInfo } from "../../../pages/accountInfo/accountInfoModel";

const BLOCK_OPTION = {
  title: "Новый перевод",
  className: ACCOUNT_HISTORY_CLASS_NAME,
};

function createNewTransactionBlock() {
  const wrapper = createSection(
    "h2",
    BLOCK_OPTION.title,
    BLOCK_OPTION.className,
    `${ACCOUNT_HISTORY_CLASS_NAME}__new-transaction`,
    "new-transaction",
    "form-wrapper",
  );

  const form = createTransactionForm(
    getAccountInfo().account,
    BLOCK_OPTION.className,
  );

  wrapper.append(form);

  return wrapper;
}

export default createNewTransactionBlock;
