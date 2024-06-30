import { create } from "zustand";
import { persist } from "zustand/middleware";

import { IWeatherDetailResponse } from "@/interface/weatherDetail";
import { IAirPollution } from "@/interface/airPollution";
import { GeolocationCoords } from "@/interface/geoToCity";
import { IGeolocationSearch } from "@/interface/geoLocationSearch";

const initStore = {
	currentPosition: {
		timeStamp: Date.now(),
		data: {} as GeolocationCoords,
		loading: false,
		error: null,
	},
	currentCity: {
		timeStamp: Date.now(),
		data: {} as IGeolocationSearch,
		loading: false,
		error: null,
	},
	favoriteCities: {
		timeStamp: Date.now(),
		data: [] as TFavoriteCity[],
		loading: false,
		error: null,
	},
	selectedCity: {
		timeStamp: Date.now(),
		data: {} as TWeatherData,
		loading: false,
		error: null,
	},
};

export type TFavoriteCity = {
	id?: number;
	updateTime: number;
	city?: IGeolocationSearch;
	weather?: IWeatherDetailResponse;
	airPollution?: IAirPollution;
};

export type TWeatherData = {
	city?: IGeolocationSearch;
	weather?: IWeatherDetailResponse;
	airPollution?: IAirPollution;
};

export type TCurrentPosition = {
	timeStamp: number;
	data?: GeolocationCoords;
	loading: boolean;
	error: null | any;
};

export type TCurrentCity = {
	timeStamp: number;
	data?: IGeolocationSearch;
	loading: boolean;
	error: null | any;
};

export type TFavoriteCities = {
	timeStamp: number;
	data?: TFavoriteCity[];
	loading: boolean;
	error: null | any;
};

export type TSelectedCity = {
	timeStamp: number;
	data?: TWeatherData;
	loading: boolean;
	error: null | any;
};

export type TUseLocationStore = {
	currentPosition: TCurrentPosition;
	currentCity: TCurrentCity;
	favoriteCities: TFavoriteCities;
	selectedCity: TSelectedCity;
	setCurrentPosition: (value: TCurrentPosition) => void;
	setCurrentCity: (value: TCurrentCity) => void;
	setFavoriteCities: (value: TFavoriteCities) => void;
	setSelectedCity: (value: TSelectedCity) => void;
	clearLocationStore: () => void;
};

const locationStore = persist<TUseLocationStore>(
	(set) => ({
		...initStore,
		setCurrentPosition: (value: TCurrentPosition) => set(() => ({ currentPosition: value })),
		setCurrentCity: (value: TCurrentCity) => set(() => ({ currentCity: value })),
		setFavoriteCities: (value: TFavoriteCities) => set(() => ({ favoriteCities: value })),
		setSelectedCity: (value: TSelectedCity) => set(() => ({ selectedCity: value })),
		clearLocationStore: () => set({ ...initStore }),
	}),
	{ name: "location-store" },
);

export const useLocationStore = create(locationStore);
