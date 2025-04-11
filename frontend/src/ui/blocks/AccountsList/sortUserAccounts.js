import DateFormatter from "../../../utils/DateFormatter";
import SORT_SELECT_OPTIONS from "../../sections/AccountsHeader/selectOptions";

function sortUserAccounts(data, optionValue) {
  return [...data].sort(getSortIndex(optionValue));
}

function getSortIndex(option) {
  switch (option) {
    case SORT_SELECT_OPTIONS[0].value:
      return sortByAccountNumber;
    case SORT_SELECT_OPTIONS[1].value:
      return sortByBalance;
    case SORT_SELECT_OPTIONS[2].value:
      return sortByLastTransation;
  }
}

function sortByAccountNumber(a, b) {
  return a.account - b.account;
}

function sortByBalance(a, b) {
  return a.balance - b.balance;
}

function sortByLastTransation(a, b) {
  const aMs = new DateFormatter(a.transactions[0]?.date || 0).getMilliseconds();
  const bMs = new DateFormatter(b.transactions[0]?.date || 0).getMilliseconds();
  return bMs - aMs;
}

export default sortUserAccounts;
