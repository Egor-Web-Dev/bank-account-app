import "./header.scss";
import PAGE_PATH_NAME from "../../../config/pagePath";
import createNavigation from "../../blocks/Navigation/createNavigation";

const HEADER_LOGO_TEXT = "Coin.";
const HEADER_ID = "header";

const NAV_ITEMS = [
  {
    name: "Банкоматы",
    path: PAGE_PATH_NAME.banks,
  },
  {
    name: "Счета",
    path: PAGE_PATH_NAME.accounts,
  },
  {
    name: "Валюта",
    path: PAGE_PATH_NAME.exchange,
  },
  {
    name: "Выйти",
    path: PAGE_PATH_NAME.auth,
  },
];

function createHeader() {
  const nav = createNavigation(NAV_ITEMS);
  const logo = document.createElement("a");
  const content = document.createElement("div");
  const header = document.createElement("header");
  const container = document.createElement("div");

  container.classList.add("container");
  content.classList.add("header__content", "flex");

  header.id = HEADER_ID;
  header.classList.add("header", "flex");

  logo.href = "";
  logo.textContent = HEADER_LOGO_TEXT;
  logo.classList.add("header__logo", "link-reset");

  content.append(logo, nav);
  container.append(content);
  header.append(container);

  return header;
}

export default createHeader;
