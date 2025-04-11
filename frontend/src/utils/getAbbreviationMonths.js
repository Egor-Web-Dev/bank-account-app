import DateFormatter from "./DateFormatter";
import getMonthsAgoDate from "./getMonthsAgoDate";

function getAbbreviationMonths(countMonths) {
  return new Array(countMonths)
    .fill("")
    .map((m, i) => new DateFormatter(getMonthsAgoDate(i)).getShortMonthName());
}

export default getAbbreviationMonths;
