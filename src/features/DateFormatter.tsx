const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options = {
    month: "short", // Abbreviated month name (e.g., "Jan")
    day: "2-digit", // Day of the month, 2 digits with leading zeros (01 to 31)
    year: "numeric", // The year as a four-digit number (e.g., 1999)
    hour: "numeric", // Hour (0-23)
    minute: "2-digit", // Minute, 2 digits with leading zeros (00 to 59)
  };
  return date.toLocaleString("en-US", options);
};

export default formatDate;
