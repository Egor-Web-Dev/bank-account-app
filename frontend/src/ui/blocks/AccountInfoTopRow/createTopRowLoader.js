import createLoaderSkeleton from "../LoaderSkeleton/createLoaderSkeleton";

function createTopRowLoader() {
  const container = document.createElement("div");
  const numberLoader = createLoaderSkeleton(
    "top-row__account-number",
    "top-row__account-number--loader",
    "flex",
  );
  const balanceLoader = createLoaderSkeleton(
    "top-row__balance-wrapper",
    "top-row__balance-wrapper--loader",
    "flex",
  );

  container.classList.add("top-row", "flex");

  container.append(numberLoader, balanceLoader);

  return container;
}

export default createTopRowLoader;
