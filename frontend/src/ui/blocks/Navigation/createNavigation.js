import "./navigation.scss";
import createNavItem from "./createNavItem";
import { getNavState } from "./navigationState";

function createNavigation(items) {
  const nav = document.createElement("nav");
  const navList = document.createElement("ul");
  const navState = getNavState();

  nav.classList.add("header__nav", "nav");
  navList.classList.add("nav__list", "list-reset", "flex");

  if (!navState.isShown) nav.classList.add("nav--hidden");

  for (const i of items) {
    const isActive = navState.activeItem === i.name;

    navList.append(createNavItem(i.name, i.path, isActive));
  }

  nav.append(navList);

  return nav;
}

export default createNavigation;
