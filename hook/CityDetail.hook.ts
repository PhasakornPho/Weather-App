"use client";

import { useEffect } from "react";

//interfaces
import { GeolocationCoords } from "@/interface/geoToCity";

// services
import { accuWeatherService } from "@/service/accuWeatherService";
import { openWeatherService } from "@/service/openWeatherService";
import { positionService } from "@/service/positionService";

// stores
import { TUseWeatherStore, useWeatherStore, TCurrentWeather } from "@/store/weatherStore";

import {
	TCurrentPosition,
	TCurrentCity,
	TUseLocationStore,
	useLocationStore,
} from "@/store/locationStore";

import {
	TUseAirPollutionStore,
	useAirPollutionStore,
	TCurrentAirPollution,
} from "@/store/airPollutionStore";

import { isBefore, subHours } from "date-fns";

export const callCurrentPositionsService = async (
	setCurrentPosition: (value: TCurrentPosition) => void,
) => {
	console.log("call current positions service");

	try {
		const locateResponse = await positionService.getCurrentLocation();

		if (locateResponse.status === 200) {
			// locateResponse status is OK
			console.log(locateResponse.data);

			setCurrentPosition({
				timeStamp: Date.now(),
				data: {
					accuracy: locateResponse.data?.accuracy,
					altitude: locateResponse.data?.altitude,
					altitudeAccuracy: locateResponse.data?.altitudeAccuracy,
					heading: locateResponse.data?.heading,
					latitude: locateResponse.data?.latitude,
					longitude: locateResponse.data?.longitude,
					speed: locateResponse.data?.speed,
					select: false,
				},
				loading: false,
				error: null,
			});
		} else {
			// locateResponse error
			setCurrentPosition({
				timeStamp: Date.now(),
				loading: false,
				error: "locateResponse error",
			});
		}
	} catch (error) {
		// system error
		setCurrentPosition({
			timeStamp: Date.now(),
			loading: false,
			error: error,
		});
	}
};

export const callCurrentCityData = async (
	setCurrentCity: (value: TCurrentCity) => void,
	locate?: {
		latitude?: number;
		longitude?: number;
	},
) => {
	try {
		console.log(
			`call current city data {latitude: ${locate?.latitude}, longitude: ${locate?.longitude}}`,
		);

		const cityDetailResponse = await accuWeatherService.getGeolocationSearch(
			locate?.latitude,
			locate?.longitude,
		);

		if (cityDetailResponse.status === 200) {
			setCurrentCity({
				timeStamp: Date.now(),
				data: cityDetailResponse.data,
				loading: false,
				error: null,
			});
		} else {
			// cityResponse error
			setCurrentCity({
				timeStamp: Date.now(),
				loading: false,
				error: cityDetailResponse.error,
			});
		}
	} catch (error) {
		// cityResponse error
		setCurrentCity({
			timeStamp: Date.now(),
			loading: false,
			error: error,
		});
	}
};

export const callCurrentAirPollutionService = async (
	currentAirPollution: TCurrentAirPollution,
	currentPosition: TCurrentPosition,
	setCurrentAirPollution: (value: TCurrentAirPollution) => void,
) => {
	console.log("callCurrentAirPollutionService");
	try {
		// start fetch Current Air Pollution
		setCurrentAirPollution({
			timeStamp: currentAirPollution.timeStamp,
			data: currentAirPollution.data,
			loading: true,
			error: currentAirPollution.error,
		});

		const latitude = currentPosition.data?.latitude || 13.7939121;
		const longitude = currentPosition.data?.longitude || 100.5881374;

		const airPollutionResponse = await openWeatherService.getCurrentAirPollution(
			latitude,
			longitude,
		);

		if (airPollutionResponse.status === 200) {
			// airPollutionResponse status is OK
			setCurrentAirPollution({
				timeStamp: Date.now(),
				data: airPollutionResponse.data,
				loading: false,
				error: null,
			});
		} else {
			// airPollutionResponse error
			setCurrentAirPollution({
				timeStamp: Date.now(),
				loading: false,
				error: airPollutionResponse.error,
			});
		}
	} catch (error) {
		// system error
		setCurrentAirPollution({
			timeStamp: Date.now(),
			loading: false,
			error: error,
		});
	}
};

export const callCurrentWeatherService = async (
	currentWeather: TCurrentWeather,
	currentCity: TCurrentCity,
	setCurrentWeather: (value: TCurrentWeather) => void,
) => {
	console.log("callCurrentWeatherService");
	try {
		// start fetch Current Weather
		setCurrentWeather({
			timeStamp: currentWeather.timeStamp,
			data: currentWeather.data,
			loading: true,
			error: currentWeather.error,
		});

		// Get weather store from local storage
		const localWeatherStorage: TUseWeatherStore =
			localStorage.getItem("weather-store") !== null
				? JSON.parse(localStorage.getItem("weather-store") as string).state
				: undefined;

		// Get location store from local storage
		const localLocationStorage: TUseLocationStore =
			localStorage.getItem("location-store") !== null
				? JSON.parse(localStorage.getItem("location-store") as string).state
				: undefined;

		const cityKey = currentCity.data?.Key
			? currentCity.data.Key
			: localLocationStorage.currentCity.data?.Key
			? localLocationStorage.currentCity.data.Key
			: "318849";

		const weatherResponse = await accuWeatherService.getCurrentWeather(cityKey);

		if (weatherResponse.status === 200) {
			// weatherResponse status is OK
			setCurrentWeather({
				timeStamp: Date.now(),
				data: weatherResponse.data?.[0],
				loading: false,
				error: null,
			});
		} else {
			// weatherResponse error
			setCurrentWeather({
				timeStamp: Date.now(),
				loading: false,
				error: weatherResponse.error,
			});
		}
	} catch (error) {
		// system error
		setCurrentWeather({
			timeStamp: Date.now(),
			loading: false,
			error: error,
		});
	}
};

export const useCityDetailHooks = () => {
	//use Location Store
	const currentPosition = useLocationStore((state) => state.currentPosition);
	const currentCity = useLocationStore((state) => state.currentCity);
	const setCurrentPosition = useLocationStore((state) => state.setCurrentPosition);
	const setCurrentCity = useLocationStore((state) => state.setCurrentCity);

	//use Weather Store
	const currentWeather = useWeatherStore((state) => state.currentWeather);
	const setCurrentWeather = useWeatherStore((state) => state.setCurrentWeather);

	//use Air Pollution Store
	const currentAirPollution = useAirPollutionStore((state) => state.currentAirPollution);
	const setCurrentAirPollution = useAirPollutionStore((state) => state.setCurrentAirPollution);

	const clientLocation = async () => {
		console.log("Call ClientLocation");
		setCurrentPosition({
			timeStamp: Date.now(),
			data: {},
			loading: true,
			error: null,
		});

		const locationResponse = await positionService.getCurrentLocation();
		const location = { locate: {} as GeolocationCoords };

		// get client location
		if (locationResponse.status === 200) {
			// locationResponse status is OK

			(location.locate = {
				accuracy: locationResponse.data?.accuracy,
				altitude: locationResponse.data?.altitude,
				altitudeAccuracy: locationResponse.data?.altitudeAccuracy,
				heading: locationResponse.data?.heading,
				latitude: locationResponse.data?.latitude,
				longitude: locationResponse.data?.longitude,
				speed: locationResponse.data?.speed,
				select: false,
			}),
				setCurrentPosition({
					timeStamp: Date.now(),
					data: location.locate,
					loading: false,
					error: null,
				});
		} else {
			// locationResponse error
			(location.locate = {
				accuracy: 100,
				altitude: null,
				altitudeAccuracy: null,
				heading: null,
				latitude: 13.7939057,
				longitude: 100.588178,
				speed: null,
				select: false,
			}),
				setCurrentPosition({
					timeStamp: Date.now(),
					data: location.locate,
					loading: false,
					error: locationResponse.error,
				});
		}
		return location.locate;
	};

	// Render Current City
	useEffect(() => {
		console.log("Render Current City");

		const locate = {
			latitude: currentPosition.data?.latitude,
			longitude: currentPosition.data?.longitude,
		};

		callCurrentCityData(setCurrentCity, locate);
	}, [currentPosition.data]);

	// render Air Pollution
	useEffect(() => {
		console.log("Render Air Pollution");

		const now = new Date();
		const pastDate = subHours(now, 1);

		// Get air pollution store from local storage
		const localAirPollutionStorage: TUseAirPollutionStore =
			localStorage.getItem("air-pollution-store") !== null
				? JSON.parse(localStorage.getItem("air-pollution-store") as string).state
				: undefined;

		const localLocationStorage: TUseLocationStore =
			localStorage.getItem("location-store") !== null
				? JSON.parse(localStorage.getItem("location-store") as string).state
				: undefined;

		// If the current Air Pollution is undefined. Calling Current Air Pollution Service
		if (!localAirPollutionStorage?.currentAirPollution.data?.coord) {
			// If the current position is defined. Calling Current Air Pollution Service
			if (localLocationStorage.currentPosition.data) {
				callCurrentAirPollutionService(
					currentAirPollution,
					currentPosition,
					setCurrentAirPollution,
				);
			}
		} else {
			// If 1 hour ago the calling service. calling Current Air Pollution Service
			isBefore(localAirPollutionStorage?.currentAirPollution.timeStamp, pastDate) &&
				callCurrentAirPollutionService(
					currentAirPollution,
					currentPosition,
					setCurrentAirPollution,
				);

			if (
				localLocationStorage?.currentPosition.data?.latitude !==
					localAirPollutionStorage.currentAirPollution.data.coord.lat &&
				localLocationStorage?.currentPosition.data?.longitude !==
					localAirPollutionStorage.currentAirPollution.data.coord.lon
			) {
				callCurrentAirPollutionService(
					currentAirPollution,
					currentPosition,
					setCurrentAirPollution,
				);
			}
		}
	}, [currentPosition.data]);

	// Render Current Weather
	useEffect(() => {
		console.log("Render Current Weather");

		const now = new Date();
		const pastDate = subHours(now, 1);

		// If the current Weather is undefined. Calling Current Weather Service
		if (!currentWeather.data?.Temperature) {
			// If the current position is defined. Calling Current Weather Service
			if (currentPosition.data) {
				callCurrentWeatherService(currentWeather, currentCity, setCurrentWeather);
			}
		} else {
			// If 1 hour ago the calling service. calling Current Weather Service
			isBefore(currentWeather.timeStamp, pastDate) &&
				callCurrentWeatherService(currentWeather, currentCity, setCurrentWeather);

			const link = currentWeather.data?.Link.split("?")[0].split("/");
			const key = link[link.length - 1];

			if (key !== currentCity.data?.Key) {
				callCurrentWeatherService(currentWeather, currentCity, setCurrentWeather);
			}
		}
	}, [currentCity.data?.Key]);
};
