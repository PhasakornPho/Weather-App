import React from "react";

import Temperature from "@/components/cities-list/Temperature";
import WeatherIcon from "@/components/cities-list/WeatherIcon";

// Import SVG
import SvgFeelsLike from "@/components/svg/weather-detail-svg/SvgFeelsLike";
import SvgWind from "@/components/svg/weather-detail-svg/SvgWind";
import SvgRain from "@/components/svg/weather-detail-svg/SvgRain";
import SvgHumidity from "@/components/svg/weather-detail-svg/SvgHumidity";
import SvgUV from "@/components/svg/weather-detail-svg/SvgUV";
import SvgAqiIndex from "@/components/svg/aqi-svg/SvgAqiIndex";

// Import Interface
import { ICitiesWeather, IGetCitiesWeather } from "@/interface/citiesWeather";
import { IGetSearchCities } from "@/interface/searchCities";

// Import Utils
import { CitiesList } from "@/utils/citiesList";
import {
	SEARCH_CITIES_ENDPOINT,
	SEARCH_CITIES_TOKEN,
	WEATHER_API_ENDPOINT,
	WEATHER_API_KEY,
} from "@/utils/constants";

import axios from "axios";
import { redirect } from "next/navigation";

type Props = {
	SortOption?: string;
	Query?: string;
};

export type TWeatherCities = {
	EnglishName: string;
	Weather?: ICitiesWeather;
};

// https://api.thecompaniesapi.com/v1/locations/cities?token=zy15ZEXI&search=new&size=1

const searchCities = async (
	query?: string,
	size: number = 20,
	sort?: string,
): Promise<TWeatherCities[]> => {
	const list: string[] = [];

	if (query) {
		const result: IGetSearchCities = await axios.get(
			`${SEARCH_CITIES_ENDPOINT}token=${SEARCH_CITIES_TOKEN}&search=${query}&size=${size}`,
		);

		if (result.status === 200) {
			result.data?.cities.forEach((item) => {
				list.push(item.name);
			});
		} else {
			CitiesList.forEach((item) => {
				list.push(item.EnglishName);
			});
		}
	} else {
		CitiesList.forEach((item) => {
			list.push(item.EnglishName);
		});
	}

	const weatherCities = (await getCitiesWeather(list))
		.filter((item) => item !== undefined)
		.map((item) => item as TWeatherCities);

	return sortBy(weatherCities, sort);
};

const getCitiesWeather = async (citiesList: string[]): Promise<(TWeatherCities | undefined)[]> => {
	const requiredCities = citiesList.map((item) =>
		axios.get(`${WEATHER_API_ENDPOINT}key=${WEATHER_API_KEY}&q=${item}&aqi=yes`),
	);

	const resultsCitiesWeather = (await Promise.allSettled(requiredCities)).filter(
		(result) => result.status === "fulfilled",
	);

	const citiesWeatherObject: (TWeatherCities | undefined)[] = resultsCitiesWeather.map(
		(result, index) => {
			if (result.status === "fulfilled") {
				const res: IGetCitiesWeather = result.value;
				return {
					EnglishName: citiesList[index],
					Weather: res.data,
				};
			}
		},
	);

	return citiesWeatherObject;
};

const sortBy = (data: TWeatherCities[], sort: string = "name (a-z)") => {
	switch (sort.toLowerCase()) {
		case "name (a-z)":
			return data.sort((a, b) =>
				a?.EnglishName > b?.EnglishName ? 1 : a?.EnglishName < b?.EnglishName ? -1 : 0,
			);
		case "name (z-a)":
			return data.sort((a, b) =>
				a?.EnglishName < b?.EnglishName ? 1 : a?.EnglishName > b?.EnglishName ? -1 : 0,
			);
		default:
			return data.sort((a, b) =>
				a?.EnglishName > b?.EnglishName ? 1 : a?.EnglishName < b?.EnglishName ? -1 : 0,
			);
	}
};

const CitesList = async ({ SortOption, Query }: Props) => {
	const citiesWeather = await searchCities(Query, 20, SortOption);

	return (
		<div className='flex-1 w-[100%] h-[70%] overflow-y-scroll no-scrollbar '>
			<div className='flex-1 h-[100%] w-[100%] flex flex-col gap-y-[3%] overflow-x-scroll no-scrollbar rounded-lg'>
				{citiesWeather?.map((item, idex) => {
					return (
						<a
							key={`${item?.EnglishName}k${idex}`}
							href={`/weather/city/location/${item.Weather?.location.lat.toFixed(
								7,
							)}/${item.Weather?.location.lon.toFixed(7)}`}
							className='w-[98%] min-h-[20%] h-[20%] p-[1%_2%] flex justify-between gap-x-[0.7%] items-center cursor-pointer rounded-xl bg-[rgba(85,140,185,1)] hover:bg-[rgba(85,140,185,0.65)] dark:bg-[rgb(15,20,40,0.6)] dark:hover:bg-[rgba(30,35,60,0.35)]'
						>
							{/* City Name */}
							<div className='w-[18%] h-[80%] flex items-center'>
								<h1 className='w-full text-start px-[10%] text-[120%]'>
									{item?.EnglishName}
								</h1>
							</div>

							{/* Weather Icon */}
							<div className='w-[25%] h-[80%] flex justify-around items-center gap-x-[5%]'>
								<WeatherIcon
									icon={item?.Weather?.current.condition.code}
									className='h-[85%] aspect-square flex justify-center items-center'
								/>
								<p className='flex-1 text-[90%]'>
									{item?.Weather?.current.condition.text}
								</p>
							</div>

							{/* Feels like */}
							<div className='w-[8%] h-[90%] flex flex-col justify-around items-center'>
								<h1 className='h-[15%] text-[70%]'>Feels like</h1>
								<div className='h-[35%] w-[70%] flex justify-center items-center'>
									<SvgFeelsLike className='w-[95%] fill-[rgb(240,240,240)]' />
								</div>

								<div className='h-[30%] flex justify-center items-center pt-[5px]'>
									<Temperature weather={item?.Weather?.current} />
								</div>
							</div>

							{/* Wind speed  */}
							<div className='w-[8%] h-[90%] flex flex-col justify-around items-center'>
								<h1 className='h-[15%] text-[70%]'>Wind speed</h1>
								<div className='h-[35%] w-[70%] flex justify-center items-center'>
									<SvgWind className='w-[95%] fill-[rgb(240,240,240)]' />
								</div>

								<div className='h-[20%] flex justify-center items-center'>
									<h1 className='text-center text-[95%] font-medium animate-on-show'>
										{item?.Weather?.current.wind_kph.toFixed(0)} km/h
									</h1>
								</div>
							</div>

							{/* Precipitation */}
							<div className='w-[8%] h-[90%] flex flex-col justify-around items-center'>
								<h1 className='h-[15%] text-[70%]'>Precipitation</h1>
								<div className='h-[35%] w-[70%] flex justify-center items-center'>
									<SvgRain className='w-[95%] h-[100%] fill-[rgba(240,240,240,0.7)]' />
								</div>

								<div className='h-[20%] flex justify-center items-center'>
									<h1 className='text-center text-[95%] font-medium animate-on-show'>
										{item?.Weather?.current.precip_mm.toFixed(0)} mm
									</h1>
								</div>
							</div>

							{/* Humidity  */}
							<div className='w-[8%] h-[90%] flex flex-col justify-around items-center'>
								<h1 className='h-[15%] text-[70%]'>Humidity</h1>
								<div className='h-[35%] w-[70%] flex justify-center items-center'>
									<SvgHumidity className='w-[95%] h-[100%] fill-[rgba(240,240,240,0.7)]' />
								</div>

								<div className='h-[20%] flex justify-center items-center'>
									<h1 className='text-center text-[95%] font-medium animate-on-show'>
										{item?.Weather?.current.humidity.toFixed(0)} %
									</h1>
								</div>
							</div>

							{/* UV Index  */}
							<div className='w-[8%] h-[90%] flex flex-col justify-around items-center'>
								<h1 className='h-[15%] text-[70%]'>UV Index</h1>
								<div className='h-[35%] w-[70%] flex justify-center items-center'>
									<SvgUV className='w-[95%] h-[100%] fill-[rgba(240,240,240,0.7)]' />
								</div>

								<div className='h-[20%] flex justify-center items-center'>
									<h1 className='text-center text-[95%] font-medium animate-on-show'>
										{item?.Weather?.current.uv.toFixed(0)}
									</h1>
								</div>
							</div>

							{/* air quality */}
							<div className='w-[8%] h-[90%] flex flex-col justify-around items-center'>
								<h1 className='h-[15%] text-[70%]'>AQI</h1>
								<div className='h-[35%] w-[70%] flex justify-center items-center'>
									<SvgAqiIndex className='w-[95%] h-[100%] fill-[rgba(240,240,240,0.7)]' />
								</div>

								<div className='h-[20%] flex justify-center items-center'>
									<h1 className='text-center text-[95%] font-medium animate-on-show'>
										{item?.Weather?.current.air_quality.pm2_5.toFixed(0)}
									</h1>
								</div>
							</div>
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default CitesList;
