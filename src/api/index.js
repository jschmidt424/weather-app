import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export async function getWeatherData(endpoint, place_id, measurementSystem) {
  const options = {
    method: "GET",
    url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
    params: {
      place_id,
      timezone: "auto",
      language: "en",
      units: measurementSystem,
    },
    headers: {
      "x-rapidapi-key": "5b21b9d688mshe097ecd3719ae06p11447ejsn488cc4d4d2ac",
      "x-rapidapi-host": "ai-weather-by-meteosource.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function searchPlaces(text) {
  const options = {
    method: "GET",
    url: "https://ai-weather-by-meteosource.p.rapidapi.com/find_places",
    params: {
      text,
      language: "en",
    },
    headers: {
      "x-rapidapi-key": "5b21b9d688mshe097ecd3719ae06p11447ejsn488cc4d4d2ac",
      "x-rapidapi-host": "ai-weather-by-meteosource.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
