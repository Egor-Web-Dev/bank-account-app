import createPageMessage from "./createPageMessage";
import MESSAGE_STATUS from "../../../config/messageStatus";
import deleteDOMElement from "../../../utils/deleteDOMElement";

function showErrorPageMessage(text) {
  showPageMessage(text, MESSAGE_STATUS.error);
}

function showSuccessPageMessage(text) {
  showPageMessage(text, MESSAGE_STATUS.success);
}

function showPageMessage(text, status) {
  const container = document.querySelector(".content");
  const lastMessage = document.querySelector(`.page-message--${status}`);
  const messageStatus = status === MESSAGE_STATUS.error ? "Ошибка" : "Отлично";
  const messageText = `${messageStatus}: ${text}!`;
  const newMessage = createPageMessage(messageText, status);

  deleteDOMElement(newMessage, 5000);

  if (lastMessage) {
    lastMessage.replaceWith(newMessage);
    return;
  }

  container.append(newMessage);
}

export { showErrorPageMessage, showSuccessPageMessage };
