import createBalanceHistoryContent from "./createBalanceHistoryContent";

function updateBalanceHistoryBody() {
  const oldBody = document.querySelector(".account-history__body");
  oldBody?.replaceWith(createBalanceHistoryContent());
}

export default updateBalanceHistoryBody;
