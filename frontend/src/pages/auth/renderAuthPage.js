import createAuthPage from "./createAuthPage";
import getCleanMain from "../../utils/getCleanMain";
import { setNavState } from "../../ui/blocks/Navigation/navigationState";

function renderAuthPage() {
  setNavState({ activeItem: "", isShown: false });
  getCleanMain().append(createAuthPage());
}

export default renderAuthPage;
