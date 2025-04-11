import "./loaderSkeleton.scss";

function createLoaderSkeleton(...classNames) {
  const loader = document.createElement("div");

  loader.classList.add("loader-skeleton");

  classNames.forEach((c) => loader.classList.add(c));

  return loader;
}

export default createLoaderSkeleton;
