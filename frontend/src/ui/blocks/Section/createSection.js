import createHeading from "../Heading/createHeading";
import createWrapper from "../Wrapper/createWrapper";

function createSection(headingLavel, title, ...classNames) {
  const wrapper = createWrapper(...classNames);
  const heading = createHeading(headingLavel, title);

  wrapper.append(heading);

  return wrapper;
}

export default createSection;
