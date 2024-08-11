export const formatDate = (dateString: string): string => {
  const dateObject = new Date(dateString);
  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1;
  const year = dateObject.getFullYear();

  return `${day < 10 ? "0" : ""}${day}.${
    month < 10 ? "0" : ""
  }${month}.${year}.`;
};
