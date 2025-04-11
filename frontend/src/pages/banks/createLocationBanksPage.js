import LOCATION_BANKS_CLASS_NAME from "./pageClassName";
import createContentWrapper from "../../ui/blocks/ContentWrapper/createContentWrapper";
import createBankBodyLoader from "../../ui/sections/LocationBanksBody/createBanksBodyLoader";
import createSectionHeader from "../../ui/sections/SectionHeaderWrapper/createSectionHeader";

const PAGE_OPTION = {
  title: "Карта банкоматов",
  className: LOCATION_BANKS_CLASS_NAME,
};

function createLocationBanksPage() {
  const { section, content } = createContentWrapper(LOCATION_BANKS_CLASS_NAME);

  content.append(createSectionHeader(PAGE_OPTION), createBankBodyLoader());

  return section;
}

export default createLocationBanksPage;
