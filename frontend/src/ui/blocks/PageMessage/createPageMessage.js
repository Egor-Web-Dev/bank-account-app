import "./pageMessage.scss";
import createWrapper from "../Wrapper/createWrapper";

function createPageMessage(text, status) {
  const wrapper = createWrapper(
    "page-message",
    `page-message--${status}`,
    "flex",
  );
  const message = document.createElement("p");

  message.textContent = text;
  message.classList.add("page-message__text");
  message.setAttribute("data-text-id", `${status}-page-message`);

  wrapper.append(message);

  return wrapper;
}

export default createPageMessage;
