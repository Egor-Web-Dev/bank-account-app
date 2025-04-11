import AuthToken from "../../../api/AuthToken";
import renderPage from "../../../pages/renderPage";
import PAGE_PATH_NAME from "../../../config/pagePath";
import { setNavState } from "./navigationState";

function handleNavLinkClick(path) {
  return (e) => {
    e.preventDefault();

    if (path === PAGE_PATH_NAME.auth) {
      history.replaceState(null, null, path);
      AuthToken.delete();
    }

    history.pushState(null, "", path);
    setNavState(path);
    renderPage();
  };
}

export default handleNavLinkClick;
