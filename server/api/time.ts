export default eventHandler(async () => {
  const date = new Date();
  const dateJp = date.toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });
  return dateJp;
});
