import MESSAGE_STATUS from "../../config/messageStatus";

function deleteValidationMessages() {
  deleteSuccessMessages();
  deleteErrorMessages();
}

function deleteSuccessMessages() {
  deleteMessages(MESSAGE_STATUS.success);
}

function deleteErrorMessages() {
  deleteMessages(MESSAGE_STATUS.error);
}

function deleteMessages(status) {
  const messages = document.querySelectorAll(`.${status}-wrapper`);
  const inputs = document.querySelectorAll(`.input--${status}`);

  messages.forEach((m) => m.remove());
  inputs.forEach((i) => i.classList.remove(`input--${status}`));
}

export { deleteSuccessMessages, deleteErrorMessages, deleteValidationMessages };
