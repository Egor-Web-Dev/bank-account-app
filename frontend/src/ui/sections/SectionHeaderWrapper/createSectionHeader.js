import "./sectionHeader.scss";
import createSection from "../../blocks/Section/createSection";

function createSectionHeader({ title, className }) {
  return createSection(
    "h1",
    title,
    `${className}__header`,
    "header-wrapper",
    "flex",
  );
}

export default createSectionHeader;
