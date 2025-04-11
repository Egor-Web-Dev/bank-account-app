import "./linkToHistory.scss";
import handleLinkClick from "./handleLinkClick";

const LINK_TITLE_TEXT = "Открыть историю баланса";

function createLinkToHistoryPage(accountNumber) {
  const link = document.createElement("a");

  link.href = "#";
  link.title = LINK_TITLE_TEXT;
  link.classList.add("link-to-history", "link-reset");
  link.addEventListener("click", handleLinkClick(accountNumber));

  return link;
}

export default createLinkToHistoryPage;
