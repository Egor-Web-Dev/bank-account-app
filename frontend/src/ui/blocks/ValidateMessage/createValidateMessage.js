import "./validateMessage.scss";
import icon from "../../../assets/images/icon";
import createWrapper from "../Wrapper/createWrapper";

function createValidateMessage(validateState, messageText) {
  const message = document.createElement("p");
  const iconSpan = document.createElement("span");
  const className = `${validateState}-wrapper`;
  const wrapper = createWrapper(className, "flex");

  message.textContent = messageText;
  message.classList.add(`${className}__message`);

  iconSpan.innerHTML = icon[`${validateState}`];
  iconSpan.classList.add(`${className}__icon`);

  wrapper.append(iconSpan, message);

  return { wrapper, message };
}

export default createValidateMessage;
