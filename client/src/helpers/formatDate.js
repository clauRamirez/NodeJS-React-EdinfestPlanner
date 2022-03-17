export function formatDate(start, end) {
  let [day, startTime] = start.split(" ");

  startTime = startTime.slice(0, -3);

  const endTime = end.split(" ")[1].slice(0, -3);

  return {
    day: day,
    start: startTime,
    end: endTime,
  };
}
