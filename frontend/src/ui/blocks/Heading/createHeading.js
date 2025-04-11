function createHeading(headingLavel, text) {
  const heading = document.createElement(headingLavel);

  heading.textContent = text;
  heading.classList.add(`heading-${headingLavel[1]}`, "heading");

  return heading;
}

export default createHeading;
