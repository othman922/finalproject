const availableTimes = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
];

export const generateAvailableTimes = (date, today) => {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  if (date === today) {
    const filteredTimes = availableTimes.filter((time) => {
      const [hour, minute] = time.split(":");
      if (currentHour < Number(hour)) {
        return true;
      } else if (currentHour === Number(hour) && currentMinute < Number(minute)) {
        return true;
      } else {
        return false;
      }
    });
    return filteredTimes;
  } else {
    return availableTimes;
  }
};