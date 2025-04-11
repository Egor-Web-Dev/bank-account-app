function getCleanMain() {
  const main = document.querySelector("main");
  main.innerHTML = "";
  return main;
}

export default getCleanMain;
