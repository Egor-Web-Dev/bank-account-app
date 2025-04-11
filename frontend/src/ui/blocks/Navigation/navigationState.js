let navigationState = {
  activeItem: "",
  isShown: false,
};

function getNavState() {
  return { ...navigationState };
}

function setNavState(newState) {
  navigationState = { ...navigationState, ...newState };

  showNavigationToggle();
  setActiveItem();
}

function showNavigationToggle() {
  const nav = document.querySelector(".header__nav");

  if (navigationState.isShown) {
    nav.classList.remove("nav--hidden");
  } else {
    nav.classList.add("nav--hidden");
  }
}

function setActiveItem() {
  const items = document.querySelectorAll(".nav__link");

  for (const i of items) {
    i.classList.remove("nav__link--active");

    if (navigationState.activeItem === i.textContent) {
      i.classList.add("nav__link--active");
    }
  }
}

export { setNavState, getNavState };
