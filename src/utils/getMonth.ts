export const getMonth = (startDate: Date) => {
  const now = new Date()
  const differenceMilis = Number(now) - Number(startDate)
  const month = differenceMilis * 3.80517e-10
  return Math.round(month)
}
