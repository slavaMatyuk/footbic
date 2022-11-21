export const formatDate = (date: string) => {
  const newDate = new Date(date);
  let day = newDate.getDate().toString();
  let month = (newDate.getMonth() + 1).toString();
  const year = newDate.getFullYear().toString();

  return `${day.padStart(2, '0')}.${month.padStart(2, '0')}.${year}`;
};
