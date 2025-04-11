import createExchangeContent from "./createExchangeContent";

function updateExchangeBody() {
  const oldBody = document.querySelector(".exchange__body");
  oldBody?.replaceWith(createExchangeContent());
}

export default updateExchangeBody;
