export default function formatDate(dateString: any) {
  const date = new Date(dateString);
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "UTC",
  };
  return date.toLocaleDateString("en-US", options);
}
