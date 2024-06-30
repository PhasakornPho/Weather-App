import { useEffect } from "react";

//service
import { accuWeatherService } from "@/service/accuWeatherService";

//stores
import { TUseWeatherStore, useWeatherStore } from "@/store/weatherStore";
import { TUseLocationStore, useLocationStore } from "@/store/locationStore";

import { isBefore, subHours } from "date-fns";

export const useHourlyForecastsHooks = () => {
	const currentCity = useLocationStore((state) => state.currentCity);

	const hourlyForecastsWeather = useWeatherStore((state) => state.hourlyForecastsWeather);

	const setHourlyForecastsWeather = useWeatherStore((state) => state.setHourlyForecastsWeather);

	// Get location store from local storage
	const localLocationStorage: TUseLocationStore =
		localStorage.getItem("location-store") !== null
			? JSON.parse(localStorage.getItem("location-store") as string).state
			: undefined;

	// Get weather store from local storage
	const localWeatherStorage: TUseWeatherStore =
		localStorage.getItem("weather-store") !== null
			? JSON.parse(localStorage.getItem("weather-store") as string).state
			: undefined;

	useEffect(() => {
		const callHourlyForecastsService = async () => {
			console.log("callHourlyForecastsService");

			try {
				// start fetch Hourly Forecasts Weather
				setHourlyForecastsWeather({
					timeStamp: Date.now(),
					loading: true,
					error: null,
				}); //initialize weather

				const cityKey = currentCity.data?.Key
					? currentCity.data.Key
					: localLocationStorage.currentCity.data?.Key
					? localLocationStorage.currentCity.data.Key
					: "318849";
				const response = await accuWeatherService.getWeatherHourlyForecasts(cityKey);

				if (response.status === 200) {
					setHourlyForecastsWeather({
						timeStamp: Date.now(),
						data: response.data,
						loading: false,
						error: null,
					});
				} else {
					// weatherResponse error
					setHourlyForecastsWeather({
						timeStamp: Date.now(),
						loading: false,
						error: response.error,
					});
				}
			} catch (error) {
				setHourlyForecastsWeather({
					timeStamp: Date.now(),
					loading: false,
					error: error,
				});
			}
		};

		const now = new Date();
		const pastDate = subHours(now, 1);

		//If the hourly forecasts weather is undefined. Calling hourly forecasts weather
		if (!localWeatherStorage.hourlyForecastsWeather.data?.[0]?.hasOwnProperty("Temperature")) {
			// If the hourly forecasts weather is defined. Calling hourly forecasts weather Service

			callHourlyForecastsService();
		} else {
			// If 1 hour ago the calling service. calling Hourly Forecasts Service
			isBefore(localWeatherStorage.hourlyForecastsWeather.timeStamp, pastDate) &&
				callHourlyForecastsService();

			const link = hourlyForecastsWeather.data?.[0]?.Link.split("?")[0].split("/");

			const key = link?.[link?.length - 1];

			if (key !== currentCity.data?.Key) {
				callHourlyForecastsService();
			}
		}
	}, [currentCity.data?.Key]);
};
