import createErrorPage from "./createErrorPage";
import PAGE_PATH_NAME from "../../config/pagePath";
import getCleanMain from "../../utils/getCleanMain";
import { setNavState } from "../../ui/blocks/Navigation/navigationState";

const DEFAULT_ERROR_MESSAGE = "Cтраница не найдена";

function renderErrorPage(error = DEFAULT_ERROR_MESSAGE) {
  const errText = `Ошибка: ${error}!`;

  history.replaceState(null, null, PAGE_PATH_NAME.auth);
  history.pushState(null, "", PAGE_PATH_NAME.auth);

  setNavState({ activeItem: "", isShown: false });

  getCleanMain().append(createErrorPage(errText));
}

export default renderErrorPage;
