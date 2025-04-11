function deleteErrorMessage(e) {
  const errorId = `${e.target.id}-error`;
  const errMessage = document.getElementById(errorId);

  if (errMessage) {
    errMessage.remove();

    e.target.classList.remove("input--error");
  }
}

export default deleteErrorMessage;
