import deleteDOMElement from "../deleteDOMElement";
import createValidateMessage from "../../ui/blocks/ValidateMessage/createValidateMessage";

const DEFAULT_MESSAGE = "Отлично!";

function showValidationMessages(validatedData, status) {
  validatedData.forEach((d) => showMessage(d, status));
}

function showMessage(data, status) {
  const input = document.getElementById(data.id);
  const className = `input--${status}`;
  const { wrapper, message } = createValidateMessage(
    status,
    data.message || DEFAULT_MESSAGE,
  );

  wrapper.id = `${data.id}-${status}`;

  if (input.classList.contains(className)) {
    updateValidationMessage(wrapper);
  } else {
    input.classList.add(className);
    input.insertAdjacentElement("afterend", wrapper);
  }

  deleteDOMElement(message, 5000);
}

function updateValidationMessage(message) {
  const oldMessage = document.getElementById(message.id);
  oldMessage?.replaceWith(message);
}

export default showValidationMessages;
