function getMonthsAgoDate(monthsAgo) {
  const date = new Date();

  date.setDate(1);
  date.setMonth(date.getMonth() - monthsAgo);

  return date;
}

export default getMonthsAgoDate;
