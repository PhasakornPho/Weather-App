import { useEffect } from "react";

//service
import { accuWeatherService } from "@/service/accuWeatherService";

//stores
import { TUseWeatherStore, useWeatherStore } from "@/store/weatherStore";

import { isBefore, subHours } from "date-fns";
import { TUseLocationStore, useLocationStore } from "@/store/locationStore";

export const useDailyForecastsHook = () => {
	const currentCity = useLocationStore((state) => state.currentCity);

	const dailyForecastsWeather = useWeatherStore((state) => state.dailyForecastsWeather);

	const setDailyForecastsWeather = useWeatherStore((state) => state.setDailyForecastWeather);

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
		const callDailyForecastsService = async () => {
			console.log("callDailyForecastsService");

			try {
				// start fetch Daily Forecasts Weather
				setDailyForecastsWeather({
					timeStamp: Date.now(),
					loading: true,
					error: null,
				}); //initialize weather

				const cityKey = currentCity.data?.Key
					? currentCity.data.Key
					: localLocationStorage.currentCity.data?.Key
					? localLocationStorage.currentCity.data.Key
					: "318849";

				const response = await accuWeatherService.getWeatherDailyForecasts(cityKey);

				if (response.status === 200) {
					setDailyForecastsWeather({
						timeStamp: Date.now(),
						data: response.data,
						loading: false,
						error: null,
					});
				} else {
					// weatherResponse error
					setDailyForecastsWeather({
						timeStamp: Date.now(),
						loading: false,
						error: response.error,
					});
				}
			} catch (error) {
				setDailyForecastsWeather({
					timeStamp: Date.now(),
					loading: false,
					error: error,
				});
			}
		};

		const now = new Date();
		const pastDate = subHours(now, 1);

		//If the hourly forecasts weather is undefined. Calling hourly forecasts weather
		if (!localWeatherStorage.dailyForecastsWeather.data?.hasOwnProperty("DailyForecasts")) {
			// If the hourly forecasts weather is defined. Calling hourly forecasts weather Service
			callDailyForecastsService();
		} else {
			// If 1 hour ago the calling service. calling Hourly Forecasts Service
			isBefore(localWeatherStorage.dailyForecastsWeather.timeStamp, pastDate) &&
				callDailyForecastsService();

			const link = dailyForecastsWeather.data?.Headline.Link.split("?")[0].split("/");

			const key = link?.[link?.length - 1];

			if (key !== currentCity.data?.Key) {
				callDailyForecastsService();
			}
		}
	}, [currentCity.data?.Key]);
};
