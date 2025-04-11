import EXCHANGE_PAGE_CLASS_NAME from "./pageClassName";
import createContentWrapper from "../../ui/blocks/ContentWrapper/createContentWrapper";
import createSectionHeader from "../../ui/sections/SectionHeaderWrapper/createSectionHeader";
import createExchangeLoader from "../../ui/sections/CurrencyExchangeBody/createExchangeLoader";

const PAGE_OPTION = {
  title: "Валютный обмен",
  className: EXCHANGE_PAGE_CLASS_NAME,
};

function createExchangePage() {
  const { section, content } = createContentWrapper(EXCHANGE_PAGE_CLASS_NAME);

  content.append(createSectionHeader(PAGE_OPTION), createExchangeLoader());

  return section;
}

export default createExchangePage;
