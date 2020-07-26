const { useFetch } = require("./use-fetch");
const useRealtime = ({ apikey, lat, lon }) => {
  const url = createUrl({
    url: "https://api.climacell.co/v3/weather/realtime",
    query: {
      apikey,
      lat,
      lon,
      unit_system: "si",
      fields: "precipitation,temp,feels_like,weather_code",
    },
  });

  return useFetch({ url });
};
export { useRealtime };
