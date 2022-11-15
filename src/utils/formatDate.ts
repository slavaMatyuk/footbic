export const formatDate = (date: string) => {
  const newDate = new Date(date);
  let day = newDate.getDate().toString();
  let month = (newDate.getMonth() + 1).toString();
  const year = newDate.getFullYear().toString().slice(-2);

  if (+day < 10) {
    day = `0${day}`;
  }

  if (+month < 10) {
    month = `0${month}`;
  }

  return `${day}.${month}.${year}`;
};
