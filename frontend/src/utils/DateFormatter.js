class DateFormatter {
  #date;

  constructor(dateString) {
    this.#date = this.#validateDate(dateString);
  }

  getShortMonthName() {
    return this.#date.toLocaleString("ru-RU", { month: "short" }).slice(0, 3);
  }

  getMilliseconds() {
    return this.#date.getTime();
  }

  getNumericDateString() {
    return this.#getLocalDateString("numeric", "numeric", "numeric");
  }

  getDateWithMonthName() {
    return this.#getLocalDateString("numeric", "long", "numeric");
  }

  #validateDate(string) {
    const date = new Date(string);

    if (isNaN(date.getTime())) {
      throw new Error(`Incorrect date format "${string}"`);
    }

    return date;
  }

  #getLocalDateString(dayType, monthType, yearType) {
    return this.#date.toLocaleString("ru-RU", {
      day: dayType,
      month: monthType,
      year: yearType,
    });
  }
}

export default DateFormatter;
