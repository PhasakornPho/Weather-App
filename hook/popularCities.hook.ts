"use client";

import { useEffect } from "react";

//store
import { TUseWeatherStore, useWeatherStore } from "@/store/weatherStore";

//service
import { accuWeatherService } from "@/service/accuWeatherService";

import { isBefore, subHours, subMinutes } from "date-fns";

import { PopularCities } from "@/utils/citiesList";
import { ITopCitesWeatherResponse, IPopularCities } from "@/interface/topCitesWeather";

export const usePopularCitiesHooks = () => {
	const setFetchCitiesWeatherList = useWeatherStore((state) => state.setFetchCitiesWeatherList);

	const setFetchPopularCitiesWeather = useWeatherStore(
		(state) => state.setFetchPopularCitiesWeather,
	);

	useEffect(() => {
		const callPopularCitiesWeatherService = async () => {
			console.log("callPopularCitiesWeatherService");

			try {
				// start fetch Popular Cities
				setFetchPopularCitiesWeather({
					timeStamp: Date.now(),
					loading: true,
					error: null,
				});

				const response = await accuWeatherService.getWeatherTopCity();

				if (response.status === 200) {
					// Process API data
					const data: ITopCitesWeatherResponse[] | undefined = response.data;

					setFetchCitiesWeatherList({
						timeStamp: Date.now(),
						data: response.data,
						loading: false,
						error: null,
					});

					const popular: (IPopularCities | undefined)[] = PopularCities.map((city) => {
						const filteredData = data?.filter((item) => item.EnglishName === city.city);

						// Handle matched city
						if (filteredData !== undefined && filteredData.length > 0) {
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

					// response status is OK
					setFetchPopularCitiesWeather({
						timeStamp: Date.now(),
						data: filteredPopular,
						loading: false,
						error: null,
					});
				} else {
					// response error
					setFetchPopularCitiesWeather({
						timeStamp: Date.now(),
						loading: false,
						error: response.error,
					});
				}
			} catch (error) {
				// system error
				setFetchPopularCitiesWeather({
					timeStamp: Date.now(),
					loading: false,
					error: error,
				});
			}
		};

		const now = new Date();
		const pastDate = subHours(now, 1);

		// Get weather store from local storage
		const localWeatherStorage: TUseWeatherStore =
			localStorage.getItem("weather-store") !== null
				? JSON.parse(localStorage.getItem("weather-store") as string).state
				: undefined;

		// If the current city is undefined. Calling Current City Service
		if (!localWeatherStorage.fetchPopularCitiesWeather.data?.[0]?.detailWeather?.Key) {
			callPopularCitiesWeatherService();
		} else {
			if (isBefore(localWeatherStorage.fetchPopularCitiesWeather.timeStamp, pastDate)) {
				callPopularCitiesWeatherService();
			}
		}
	}, [setFetchCitiesWeatherList, setFetchPopularCitiesWeather]);
};
