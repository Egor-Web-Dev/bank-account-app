import "./locationBanksMap.scss";
import createBanksMap from "../../blocks/BanksMap/createBanksMap";
import LOCATION_BANKS_CLASS_NAME from "../../../pages/banks/pageClassName";
import { getCoordinatesBanks } from "../../../pages/banks/locationBanksModel";

function createLocationBanksBody() {
  const content = document.createElement("div");
  const map = createBanksMap(getCoordinatesBanks());

  content.classList.add(`${LOCATION_BANKS_CLASS_NAME}__body`);

  content.append(map);

  return content;
}

export default createLocationBanksBody;
