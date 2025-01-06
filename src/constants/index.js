export const DEFAULT_PLACE = {
  name: "Lansing",
  place_id: "lansing",
  adm_area1: "Michigan",
  adm_area2: "Ingham",
  country: "United States of America",
  lat: "42.73253N",
  lon: "84.55553W",
  timezone: "America/Detroit",
  type: "settlement",
};

export const MEASUREMENT_SYSTEMS = {
  AUTO: "auto",
  METRIC: "metric",
  US: "us",
  UK: "uk",
  CA: "ca",
};

export const UNITS = {
  metric: {
    temperature: "°C",
    precipitation: "mm/h",
    wind_speed: "m/s",
    visibility: "km",
    humidity: "%",
    uv_index: "",
    cloud_cover: "%",
  },
  us: {
    temperature: "°F",
    precipitation: "in/h",
    wind_speed: "mph",
    visibility: "mi",
    humidity: "%",
    uv_index: "",
    cloud_cover: "%",
  },
  uk: {
    temperature: "°C",
    precipitation: "mm/h",
    wind_speed: "mph",
    visibility: "mi",
    humidity: "%",
    uv_index: "",
    cloud_cover: "%",
  },
  ca: {
    temperature: "°C",
    precipitation: "mm/h",
    wind_speed: "km/h",
    visibility: "km",
    humidity: "%",
    uv_index: "",
    cloud_cover: "%",
  },
};
