import moment from "moment";

export const getTime = (unix_timestamp) => {
  const date = new Date(unix_timestamp);
  return moment(date).format("HH:mm");
};

export const getDistance = (distance) => {
  if (distance < 1000) return Math.floor(distance) + " m";
  return Math.floor(distance / 1000) + " km";
};

export const getDuration = (duration) => {
  if (duration <= 3600) return Math.floor(duration / 60) + " min";
  return (
    Math.floor(duration / 3600) +
    " h " +
    Math.floor((duration % 3600) / 60) +
    " min"
  );
};
