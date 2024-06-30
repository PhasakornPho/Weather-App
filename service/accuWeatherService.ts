import axios, { AxiosError, AxiosResponse } from "axios";

//constants values
import { handleResponse } from "@/utils/handleResponse";
import { PopularCities } from "@/utils/citiesList";

import {
	ACCU_GEOLOCATION_SEARCH_ENDPOINT,
	ACCU_WEATHER_API_KEY,
	ACCU_WEATHER_CITY_SEARCH_ENDPOINT,
	ACCU_WEATHER_CURRENT_WEATHER,
	ACCU_WEATHER_DAILY_FORECAST_ENDPOINT,
	ACCU_WEATHER_HOURLY_FORECAST_ENDPOINT,
	ACCU_WEATHER_TOP_CITIES_ENDPOINT,
} from "@/utils/constants";

// interface

import { IGetTopCitesWeather } from "@/interface/topCitesWeather";
import { IGetDailyForecasts } from "@/interface/dailyForecasts";
import { IGetHourlyForecasts } from "@/interface/hourlyForecast";
import { DetailWeather, IGetPopularCities, IPopularCities } from "@/interface/popularCities";
import { IGetWeatherDetailResponse } from "@/interface/weatherDetail";
import { IGetGeolocationSearch, IGetCityNameSearch } from "@/interface/geoLocationSearch";

export const accuWeatherService = {
	getWeatherTopCity: async (
		language: string = "en-us",
		details: boolean = true,
		offset: number = 150,
	): Promise<IGetTopCitesWeather> => {
		try {
			const response = await axios.get(
				`${ACCU_WEATHER_TOP_CITIES_ENDPOINT}/${offset}/?apikey=${ACCU_WEATHER_API_KEY}&language=${language}&details=${details}"`,
			);

			return handleResponse.success(response);
		} catch (error: any) {
			return handleResponse.error(error);
		}
	},

	getWeatherPopularCities: async (
		language: string = "en-us",
		details: boolean = true,
		offset: number = 150,
	): Promise<IGetPopularCities> => {
		try {
			// Make API call
			const response = await axios.get(
				`${ACCU_WEATHER_TOP_CITIES_ENDPOINT}/${offset}/?apikey=${ACCU_WEATHER_API_KEY}&language=${language}&details=${details}`,
			);

			// Check response status
			if (!(response.status === 200)) {
				throw new Error(`API request failed: ${response.status}`);
			}

			// Process API data
			const data: DetailWeather[] = response.data;

			const popular: (IPopularCities | undefined)[] = PopularCities.map((city) => {
				const filteredData = data.filter((item) => item.EnglishName === city.city);

				// Handle matched city
				if (filteredData.length > 0) {
					return {
						rank: city.rank,
						city: city.city,
						country: city.country,
						detailWeather: filteredData[0],
					};
				}

				// Handle missing city
				console.warn(`City not found in API response: ${city.city}`);
				return undefined;
			});

			// Filter out undefined values
			const filteredPopular = popular.filter(Boolean) as IPopularCities[];

			// Prepare response object
			const res: AxiosResponse = {
				status: response.status,
				statusText: response.statusText,
				headers: response.headers,
				config: response.config,
				request: response.request,
				data: filteredPopular,
			};

			return handleResponse.success(res);
		} catch (error: any) {
			// Handle general errors
			return handleResponse.error(error);
		}
	},

	geCityDetail: async (
		cityName?: string,
		language: string = "en-us",
		details: boolean = false,
		offset: number = 25,
	): Promise<IGetCityNameSearch> => {
		try {
			const response = await axios.get(
				`${ACCU_WEATHER_CITY_SEARCH_ENDPOINT}?apikey=${ACCU_WEATHER_API_KEY}&q=${
					cityName || "Bangkok"
				}&language=${language}&details=${details}&offset=${offset}`,
			);
			return handleResponse.success(response);
		} catch (error: any) {
			return handleResponse.error(error);
		}
	},

	getCurrentWeather: async (
		locationKey?: string,
		language: string = "en-us",
		details: boolean = true,
	): Promise<IGetWeatherDetailResponse> => {
		if (locationKey === undefined) {
			throw new AxiosError("LocationKey is undefined");
		}

		try {
			const response = await axios.get(
				`${ACCU_WEATHER_CURRENT_WEATHER}/${
					locationKey || 318849
				}?apikey=${ACCU_WEATHER_API_KEY}&language=${language}&details=${details}`,
			);

			return handleResponse.success(response);
		} catch (error: any) {
			return handleResponse.error(error);
		}
	},

	getWeatherDailyForecasts: async (
		locationKey?: string,
		language: string = "en-us",
		details: boolean = true,
		metric: boolean = true,
	): Promise<IGetDailyForecasts> => {
		if (locationKey === undefined) {
			throw new AxiosError("LocationKey is undefined");
		}

		try {
			const response = await axios.get(
				`${ACCU_WEATHER_DAILY_FORECAST_ENDPOINT}/${locationKey}?apikey=${ACCU_WEATHER_API_KEY}&language=${language}&details=${details}&metric=${metric}`,
			);

			return handleResponse.success(response);
		} catch (error: any) {
			return handleResponse.error(error);
		}
	},

	getWeatherHourlyForecasts: async (
		locationKey?: string,
		language: string = "en-us",
		details: boolean = true,
		metric: boolean = true,
	): Promise<IGetHourlyForecasts> => {
		if (locationKey === undefined) {
			throw new AxiosError("LocationKey is undefined");
		}

		try {
			const response = await axios.get(
				`${ACCU_WEATHER_HOURLY_FORECAST_ENDPOINT}/${locationKey}?apikey=${ACCU_WEATHER_API_KEY}&language=${language}&details=${details}&metric=${metric}`,
			);

			return handleResponse.success(response);
		} catch (error: any) {
			return handleResponse.error(error);
		}
	},

	getGeolocationSearch: async (
		latitude: number = 13.73077,
		longitude: number = 100.52101,
		language: string = "en-us",
		details: boolean = true,
		topLevel: boolean = true,
	): Promise<IGetGeolocationSearch> => {
		try {
			const response = await axios.get(
				`${ACCU_GEOLOCATION_SEARCH_ENDPOINT}?apikey=${ACCU_WEATHER_API_KEY}&q=${latitude},${longitude}&language=${language}&details=${details}&toplevel=${topLevel}`,
			);

			return handleResponse.success(response);
		} catch (error: any) {
			return handleResponse.error(error);
		}
	},
};
