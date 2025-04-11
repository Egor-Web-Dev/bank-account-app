import initMap from "./initMap";
import LOCATION_BANKS_CLASS_NAME from "../../../pages/banks/pageClassName";

function createBanksMap(coordinates) {
  const container = document.createElement("div");

  container.classList.add(`${LOCATION_BANKS_CLASS_NAME}__map`, "map");

  initMap(container, coordinates);

  return container;
}

export default createBanksMap;
