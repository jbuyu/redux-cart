const { useFetch } = require("./use-fetch");

import { createUrl } from ".utilities";

const useHourly = ({ apiKey, lat, long, start, end }) => {
  const url = createUrl({
    url: "https://api.climacell.co/v3/weather/forecast/hourly",
    query: {
      apikey,
      lat,
      lon,
      unit_system: "si",
      fields: "precipitation,temp,feels_like,weather_code",
      start_time: start.toISOString(),
      end_time: end.toISOString(),
    },
  });
  useFetch(url);
};

export { useHourly };
