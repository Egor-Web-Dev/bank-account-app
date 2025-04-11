import groupTransactionsByMonths from "./groupTransationsByMonths";
import getAbbreviationMonths from "../../../utils/getAbbreviationMonths";
import { getAccountInfo } from "../../../pages/accountInfo/accountInfoModel";

function getAccountInfoData(countMonths) {
  const accountInfo = getAccountInfo();
  const labelMonths = getAbbreviationMonths(countMonths);
  const groupTransactions = groupTransactionsByMonths(
    countMonths,
    accountInfo.transactions,
  );

  return {
    accountInfo,
    labelMonths,
    groupTransactions,
  };
}

export default getAccountInfoData;
