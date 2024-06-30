import { create } from "zustand";
import { persist } from "zustand/middleware";

import { IPopularCities } from "@/interface/popularCities";
import { IDailyForecastsReasons } from "@/interface/dailyForecasts";
import { IHourlyForecastsResponse } from "@/interface/hourlyForecast";

import { IAirPollution } from "@/interface/airPollution";

const initStore = {
	currentAirPollution: {
		timeStamp: Date.now(),
		data: {} as IAirPollution,
		loading: false,
		error: null,
	},
	fetchPopularAirPollution: {
		timeStamp: Date.now(),
		data: [] as IPopularCities[],
		loading: false,
		error: null,
	},
	popularCitiesAirPollution: {
		timeStamp: Date.now(),
		data: [] as IPopularCities[],
		loading: false,
		error: null,
	},
	dailyForecastsAirPollution: {
		timeStamp: Date.now(),
		data: {} as IDailyForecastsReasons,
		loading: false,
		error: null,
	},
	hourlyForecastsAirPollution: {
		timeStamp: Date.now(),
		data: [] as IHourlyForecastsResponse[],
		loading: false,
		error: null,
	},
};

export type TCurrentAirPollution = {
	timeStamp: number;
	data?: IAirPollution;
	loading: boolean;
	error: null | any;
};

export type TPopularCitiesAirPollution = {
	timeStamp: number;
	data?: IPopularCities[];
	loading: boolean;
	error: null | any;
};

export type TDailyForecastsAirPollution = {
	timeStamp: number;
	data?: IDailyForecastsReasons;
	loading: boolean;
	error: null | any;
};

export type THourlyForecastsAirPollution = {
	timeStamp: number;
	data?: IHourlyForecastsResponse[];
	loading: boolean;
	error: null | any;
};

export type TUseAirPollutionStore = {
	currentAirPollution: TCurrentAirPollution;
	fetchPopularAirPollution: TPopularCitiesAirPollution;
	popularCitiesAirPollution: TPopularCitiesAirPollution;
	dailyForecastsAirPollution: TDailyForecastsAirPollution;
	hourlyForecastsAirPollution: THourlyForecastsAirPollution;
	setCurrentAirPollution: (value: TCurrentAirPollution) => void;
	setFetchPopularAirPollution: (value: TPopularCitiesAirPollution) => void;
	setPopularCitiesAirPollution: (value: TPopularCitiesAirPollution) => void;
	setDailyForecastsAirPollution: (value: TDailyForecastsAirPollution) => void;
	setHourlyForecastsAirPollution: (value: THourlyForecastsAirPollution) => void;
	clearAirPollutionStore: () => void;
};

const airPollutionStore = persist<TUseAirPollutionStore>(
	(set) => ({
		...initStore,
		setCurrentAirPollution: (value: TCurrentAirPollution) =>
			set(() => ({ currentAirPollution: value })),
		setFetchPopularAirPollution: (value: TPopularCitiesAirPollution) =>
			set(() => ({ fetchPopularAirPollution: value })),
		setPopularCitiesAirPollution: (value: TPopularCitiesAirPollution) =>
			set(() => ({ popularCitiesAirPollution: value })),
		setDailyForecastsAirPollution: (value: TDailyForecastsAirPollution) =>
			set(() => ({ dailyForecastsAirPollution: value })),
		setHourlyForecastsAirPollution: (value: THourlyForecastsAirPollution) =>
			set(() => ({ hourlyForecastsAirPollution: value })),
		clearAirPollutionStore: () => set({ ...initStore }),
	}),
	{ name: "air-pollution-store" },
);

export const useAirPollutionStore = create(airPollutionStore);
