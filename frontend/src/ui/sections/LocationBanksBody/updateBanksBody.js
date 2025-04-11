import createLocationBanksBody from "./createLocationBanksBody";

function updateLocationBanksBody() {
  const oldBody = document.querySelector(".location-banks__body");
  oldBody?.replaceWith(createLocationBanksBody());
}

export default updateLocationBanksBody;
