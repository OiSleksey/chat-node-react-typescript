export const getDateCurrency = function (): string {
  const dateToday = new Date();
  const isoDateToday = dateToday.toISOString();
  return isoDateToday;
};
