import "./styles/main.scss";
import renderPage from "./pages/renderPage";
import createHeader from "./ui/sections/MainHeader/createHeader";

const app = document.getElementById("app");
const main = document.createElement("main");

app.append(createHeader(), main);

window.addEventListener("popstate", () => renderPage());

renderPage();
