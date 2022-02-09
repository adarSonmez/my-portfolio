export const getMonth = (startDate) => {
  const now = new Date();
  const differenceMilis = now - startDate;
  const month = differenceMilis * 3.80517e-10;
  return Math.round(month);
};
