"use client";

import React from "react";
import Image from "next/image";

// user context provider
import { useTempUnit } from "../temp-unit-toggle/TempUnitProvider";

// utility
import { weatherIconList } from "@/utils/weatherIconList";

// hooks
import { useCityDetailHooks } from "@/hook/CityDetail.hook";
// stores
import { useWeatherStore } from "@/store/weatherStore";
import { useLocationStore } from "@/store/locationStore";
import { useAirPollutionStore } from "@/store/airPollutionStore";

//lib
import { Skeleton } from "../ui/skeleton";
import SvgHeart from "../svg/favorite-svg/SvgHeart";
import { useHourlyForecastsHooks } from "@/hook/HourlyForecasts.hook";
import { useDailyForecastsHook } from "@/hook/DailyForecasts.hook";

type Props = {};

const CityDetail = (props: Props) => {
	const currentWeather = useWeatherStore((state) => state.currentWeather);
	const currentAirPollution = useAirPollutionStore((state) => state.currentAirPollution);
	const currentCity = useLocationStore((state) => state.currentCity);
	const favoriteCities = useLocationStore((state) => state.favoriteCities);
	const setFavoriteCities = useLocationStore((state) => state.setFavoriteCities);

	const { tempUnit } = useTempUnit();

	const onClickHandler = () => {
		const isFavorite = favoriteCities.data?.some(
			(city) => city.city?.Key === currentCity.data?.Key,
		);

		const updatedFavorites = isFavorite
			? favoriteCities.data?.filter((item) => item.city?.Key !== currentCity.data?.Key)
			: [
					...(favoriteCities.data ?? []),
					{
						id: favoriteCities.data?.length,
						updateTime: Date.now(),
						city: currentCity.data,
						weather: currentWeather.data,
						airPollution: currentAirPollution.data,
					},
			  ];

		setFavoriteCities({
			timeStamp: Date.now(),
			data: updatedFavorites,
			loading: false,
			error: null,
		});
	};

	useCityDetailHooks();
	useHourlyForecastsHooks();
	useDailyForecastsHook();

	const isFavorite = favoriteCities.data?.some(
		(city) => city.city?.Key === currentCity.data?.Key,
	);

	return (
		<div className='h-[100%] flex items-center justify-between'>
			{currentWeather.loading ? (
				<>
					<div className='h-[100%] w-[55%] flex flex-row space-x-3 justify-center items-center'>
						<Skeleton className='h-[85%] aspect-square rounded-xl' />
						<div className='h-[100%] w-[60%] space-y-2 flex flex-col justify-center items-start'>
							<Skeleton className='h-[1vw] w-[250px] rounded-full' />
							<Skeleton className='h-[1.2vw] w-[200px] rounded-full' />
						</div>
					</div>

					<div className='h-[100%] w-[40%] flex justify-end items-center break-words overflow-hidden'>
						<Skeleton className='w-[80%] h-[1.8vw] rounded-full pr-[2%]' />
					</div>
				</>
			) : (
				<>
					{/* Weather */}
					<div className='h-[100%] w-[55%] flex gap-x-[10%] justify-start items-center'>
						{/* Weather Icon */}
						<div className='h-[100%] w-[40%] flex flex-col justify-center'>
							{weatherIconList.map((item) => {
								if (item.id === currentWeather.data?.WeatherIcon) {
									return (
										<Image
											key={item.id}
											src={item.icon}
											alt='Weather Icon'
											priority={true}
										/>
									);
								}
							})}
						</div>

						{/* Temperature */}
						<div className='h-[100%] w-[60%] flex flex-col justify-center'>
							{tempUnit === "C" && currentWeather.data?.Temperature?.Metric && (
								<p className='animate-on-show text-[3vw] font-medium'>
									{currentWeather.data?.Temperature?.Metric.Value.toFixed(0)}
									{/* temperature */}
									<sup>
										<sup className='text-[1.6vw] font-medium'>
											{"°" + currentWeather.data?.Temperature.Metric.Unit}
										</sup>
									</sup>
								</p>
							)}
							{tempUnit === "F" && currentWeather.data?.Temperature?.Imperial && (
								<p className='animate-on-show text-[3vw] font-medium'>
									{currentWeather.data?.Temperature?.Imperial.Value.toFixed(0)}
									{/* temperature */}
									<sup>
										<sup className='text-[1.6vw] font-medium'>
											{currentWeather.data?.Temperature.Imperial.Unit &&
												"°" +
													currentWeather.data?.Temperature.Imperial.Unit}
										</sup>
									</sup>
								</p>
							)}
							<p className='capitalize text-[1.8vw] font-normal'>
								{currentWeather.data?.WeatherText}
							</p>
							{/* weather */}
						</div>
					</div>

					{/* city */}
					<div className='h-[100%] w-[40%] flex flex-col justify-end items-center break-words overflow-hidden'>
						{/* add favorite */}
						<div
							className='w-[100%] flex justify-end p-[3%_0%]'
							onClick={onClickHandler}
						>
							<SvgHeart
								isFavorite={isFavorite || false}
								style='w-[6%]'
							/>
						</div>

						{/* Localized Name */}
						<div className='w-[100%] flex-1 flex justify-end items-center '>
							<p className='w-[100%] text-[350%] font-medium pr-[2%] text-right'>
								{currentCity.data?.LocalizedName}
							</p>
						</div>

						<div className='w-[100%]  flex justify-end'>
							<div className=' w-[10%] aspect-square'></div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default CityDetail;
