import getCleanMain from "../../utils/getCleanMain";
import renderErrorPage from "../errorPage/renderErrorPage";
import fetchLocationBanks from "../../api/fetchLocationBanks";
import createLocationBanksPage from "./createLocationBanksPage";
import updateLocationBanksBody from "../../ui/sections/LocationBanksBody/updateBanksBody";
import { setCoordinatesBanks } from "./locationBanksModel";
import { setNavState } from "../../ui/blocks/Navigation/navigationState";

function renderLocationBanksPage() {
  setNavState({ activeItem: "Банкоматы", isShown: true });
  getCleanMain().append(createLocationBanksPage());

  fetchLocationBanks().then(({ payload, error }) => {
    if (error) return renderErrorPage(error);

    setCoordinatesBanks(payload);
    updateLocationBanksBody();
  });
}

export default renderLocationBanksPage;
