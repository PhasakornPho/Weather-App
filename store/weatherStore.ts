import { create } from "zustand";
import { persist } from "zustand/middleware";

import { IDailyForecastsReasons } from "@/interface/dailyForecasts";
import { IHourlyForecastsResponse } from "@/interface/hourlyForecast";
import { IWeatherDetailResponse } from "@/interface/weatherDetail";
import {
    ITopCitesWeatherResponse,
    IPopularCities,
} from "@/interface/topCitesWeather";

const initStore = {
    currentWeather: {
        timeStamp: Date.now(),
        data: {} as IWeatherDetailResponse,
        loading: false,
        error: null,
    },
    fetchCitiesWeatherList: {
        timeStamp: Date.now(),
        data: [] as ITopCitesWeatherResponse[],
        loading: false,
        error: null,
    },
    fetchPopularCitiesWeather: {
        timeStamp: Date.now(),
        data: [] as IPopularCities[],
        loading: false,
        error: null,
    },
    popularCitiesWeather: {
        timeStamp: Date.now(),
        data: [] as IPopularCities[],
        loading: false,
        error: null,
    },
    dailyForecastsWeather: {
        timeStamp: Date.now(),
        data: {} as IDailyForecastsReasons,
        loading: false,
        error: null,
    },
    hourlyForecastsWeather: {
        timeStamp: Date.now(),
        data: [] as IHourlyForecastsResponse[],
        loading: false,
        error: null,
    },
};

export type TCurrentWeather = {
    timeStamp: number;
    data?: IWeatherDetailResponse;
    loading: boolean;
    error: null | any;
};

type TCitiesWeatherList = {
    timeStamp: number;
    data?: ITopCitesWeatherResponse[];
    loading: boolean;
    error: null | any;
};

type TPopularCitiesWeather = {
    timeStamp: number;
    data?: IPopularCities[];
    loading: boolean;
    error: null | any;
};

type TDailyForecastsWeather = {
    timeStamp: number;
    data?: IDailyForecastsReasons;
    loading: boolean;
    error: null | any;
};

type THourlyForecastsWeather = {
    timeStamp: number;
    data?: IHourlyForecastsResponse[];
    loading: boolean;
    error: null | any;
};

export type TUseWeatherStore = {
    currentWeather: TCurrentWeather;
    fetchCitiesWeatherList: TCitiesWeatherList;
    fetchPopularCitiesWeather: TPopularCitiesWeather;
    popularCitiesWeather: TPopularCitiesWeather;
    dailyForecastsWeather: TDailyForecastsWeather;
    hourlyForecastsWeather: THourlyForecastsWeather;
    setCurrentWeather: (value: TCurrentWeather) => void;
    setFetchCitiesWeatherList: (value: TCitiesWeatherList) => void;
    setFetchPopularCitiesWeather: (value: TPopularCitiesWeather) => void;
    setPopularCitiesWeather: (value: TPopularCitiesWeather) => void;
    setDailyForecastWeather: (value: TDailyForecastsWeather) => void;
    setHourlyForecastsWeather: (value: THourlyForecastsWeather) => void;
    clearWeatherStore: () => void;
};

const weatherStore = persist<TUseWeatherStore>(
    (set) => ({
        ...initStore,
        setCurrentWeather: (value: TCurrentWeather) =>
            set(() => ({ currentWeather: value })),

        setFetchCitiesWeatherList: (value: TCitiesWeatherList) =>
            set(() => ({ fetchCitiesWeatherList: value })),

        setFetchPopularCitiesWeather: (value: TPopularCitiesWeather) =>
            set(() => ({ fetchPopularCitiesWeather: value })),

        setPopularCitiesWeather: (value: TPopularCitiesWeather) =>
            set(() => ({ popularCitiesWeather: value })),

        setDailyForecastWeather: (value: TDailyForecastsWeather) =>
            set(() => ({ dailyForecastsWeather: value })),

        setHourlyForecastsWeather: (value: THourlyForecastsWeather) =>
            set(() => ({ hourlyForecastsWeather: value })),

        clearWeatherStore: () => set({ ...initStore }),
    }),
    { name: "weather-store" },
);

export const useWeatherStore = create(weatherStore);
