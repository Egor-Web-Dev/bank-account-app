import "./auth.scss";
import createAuthForm from "../../blocks/AuthForm/createAuthForm";
import createSectionHeader from "../SectionHeaderWrapper/createSectionHeader";

function createAuthSection({ title, className }) {
  const wrap = createSectionHeader({ title, className });
  wrap.classList.add(`${className}__form-wrapper`, "form-wrapper", "flex");
  // const wrapper = document.createElement("div");
  // const heading = document.createElement("h1");

  // wrapper.classList.add(`${className}__form-wrapper`, "form-wrapper", "flex");

  // heading.textContent = title;
  // heading.classList.add(`${className}__heading`, "heading-1", "heading");

  // wrapper.append(heading);

  wrap.append(createAuthForm());

  return wrap;
}

export default createAuthSection;
