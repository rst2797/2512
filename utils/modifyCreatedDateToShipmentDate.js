export const modifyCreatedDateToShipmentDate = (createdAt) => {
  // Parse the input string into a Date object
  const originalDate = new Date(createdAt);

  // Add two days to the original date
  const modifiedDate = new Date(originalDate);
  modifiedDate.setDate(originalDate.getDate() + 2);

  // Format the modified date as "YYYY-MM-DD hh:mm"
  const formattedDate = modifiedDate.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });

  return formattedDate;
};