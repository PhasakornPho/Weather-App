// URL Client Side Reverse Geocoding to City API
// https://www.bigdatacloud.com/free-api/free-reverse-geocode-to-city-api
export const GEO_TO_CITY_ENDPOINT: string =
	"https://api.bigdatacloud.net/data/reverse-geocode-client";

// URL AccuWeather API
export const ACCU_GEOLOCATION_SEARCH_ENDPOINT: string =
	"http://dataservice.accuweather.com/locations/v1/cities/geoposition/search";
export const ACCU_WEATHER_TOP_CITIES_ENDPOINT: string =
	"http://dataservice.accuweather.com/currentconditions/v1/topcities";
export const ACCU_WEATHER_CITY_SEARCH_ENDPOINT: string = `http://dataservice.accuweather.com/locations/v1/cities/search`;
export const ACCU_WEATHER_CURRENT_WEATHER: string = `http://dataservice.accuweather.com/currentconditions/v1`;
export const ACCU_WEATHER_DAILY_FORECAST_ENDPOINT: string = `http://dataservice.accuweather.com/forecasts/v1/daily/5day`;
export const ACCU_WEATHER_HOURLY_FORECAST_ENDPOINT: string = `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour`;
// export const ACCU_WEATHER_API_KEY: string = "fake-api-key";
export const ACCU_WEATHER_API_KEY: string = "z6aAAi7OuPEpBo0Fhcpy131WTeGNPtMF";

//URL Open Weather API
// export const OPEN_CURRENT_AIR_POLLUTION_ENDPOINT: string = `fake-api-key`;
export const OPEN_CURRENT_AIR_POLLUTION_ENDPOINT: string = `http://api.openweathermap.org/data/2.5/air_pollution?`;

export const OPEN_CURRENT_API_KEY: string = `5dc51584d5a17e2660dfb50e3cf0c318`;

export const sortList: string[] = ["Lowest Rank", "Highest Rank", "Name (A-Z)", "Name (Z-A)"];
export const sortKey: string[] = ["Name (A-Z)", "Name (Z-A)"];
// "Lowest Key", "Highest Key";

export const WEATHER_API_ENDPOINT: string = `https://api.weatherapi.com/v1/current.json?`;
export const WEATHER_API_KEY: string = "534e0a2edde5484a85d94049242306";

//
export const SEARCH_CITIES_ENDPOINT: string = `https://api.thecompaniesapi.com/v1/locations/cities?`;

export const SEARCH_CITIES_TOKEN: string = `zy15ZEXI`;
