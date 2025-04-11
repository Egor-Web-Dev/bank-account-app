import "./circleLoader.scss";
import createWrapper from "../Wrapper/createWrapper";

function createCircleLoader() {
  const wrapper = createWrapper("loader", "flex");
  const container = document.createElement("div");
  const loader = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle",
  );

  loader.classList.add("loader__svg");
  container.classList.add("loader__container");

  circle.setAttribute("cx", 10);
  circle.setAttribute("cy", 10);
  circle.setAttribute("r", 8);
  circle.classList.add("loader__circle");

  loader.append(circle);
  container.append(loader);
  wrapper.append(container);

  return wrapper;
}

export default createCircleLoader;
