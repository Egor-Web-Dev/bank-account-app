import AUTH_PAGE_CLASS_NAME from "./pageClassName";
import createAuthSection from "../../ui/sections/AuthSection/createAuthSection";
import createContentWrapper from "../../ui/blocks/ContentWrapper/createContentWrapper";

const PAGE_TITLE = "Вход в аккаунт";

function createAuthPage() {
  const { section, content } = createContentWrapper(AUTH_PAGE_CLASS_NAME);

  content.append(
    createAuthSection({
      title: PAGE_TITLE,
      className: AUTH_PAGE_CLASS_NAME,
    }),
  );

  return section;
}

export default createAuthPage;
