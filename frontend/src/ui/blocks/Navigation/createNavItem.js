import handleNavLinkClick from "./handleNavLinkClick";

function createNavItem(name, path, isActive) {
  const navItem = document.createElement("li");
  const navLink = document.createElement("a");

  navItem.classList.add("nav__item");

  if (isActive) navLink.classList.add("nav__link--active");

  navLink.href = "#";
  navLink.textContent = name;
  navLink.classList.add("nav__link", "link-reset");
  navLink.addEventListener("click", handleNavLinkClick(path));

  navItem.append(navLink);

  return navItem;
}

export default createNavItem;
