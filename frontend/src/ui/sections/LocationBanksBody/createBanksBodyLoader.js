import "./locationBanksMap.scss";
import createLoaderSkeleton from "../../blocks/LoaderSkeleton/createLoaderSkeleton";
import LOCATION_BANKS_CLASS_NAME from "../../../pages/banks/pageClassName";

function createBankBodyLoader() {
  const container = document.createElement("div");
  const mapLoader = createLoaderSkeleton(
    `${LOCATION_BANKS_CLASS_NAME}__map`,
    "map",
    "map--loader",
  );

  container.classList.add(`${LOCATION_BANKS_CLASS_NAME}__body`);
  container.append(mapLoader);

  return container;
}

export default createBankBodyLoader;
