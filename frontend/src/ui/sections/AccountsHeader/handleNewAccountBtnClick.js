import renderPage from "../../../pages/renderPage";
import createNewAccount from "../../../api/createNewAccount";
import createCircleLoader from "../../blocks/CircleLoader/createCircleLoader";
import { showErrorPageMessage } from "../../blocks/pageMessage/showPageMessage";

function handleNewAccountBtnClick(e) {
  const loader = createCircleLoader();
  e.currentTarget.append(loader);

  createNewAccount().then(({ error }) => {
    loader.remove();

    if (error) return showErrorPageMessage(error);

    renderPage();
  });
}

export default handleNewAccountBtnClick;
