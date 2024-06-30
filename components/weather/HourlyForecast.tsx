import React from "react";
import Image from "next/image";

import { weatherIconList } from "@/utils/weatherIconList";
import { convertToFahrenheit } from "@/utils/method";

//hooks
import { useTempUnit } from "../temp-unit-toggle/TempUnitProvider";

//lib
import { format } from "date-fns";

//store
import { useWeatherStore } from "@/store/weatherStore";
import { useDailyForecastsHook } from "@/hook/DailyForecasts.hook";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Skeleton } from "../ui/skeleton";

type Props = {};

function convertUnixTimeToDateTimeString(unixTime: number): string {
	const date = new Date(unixTime * 1000);
	return format(date, "HH:mm a");
}

const loading = [1, 2, 3, 4, 5, 6, 7, 8];

const HourlyForecast = (props: Props) => {
	const hourlyForecasts = useWeatherStore((state) => state.hourlyForecastsWeather);

	const { tempUnit } = useTempUnit();

	return (
		<div className='flex-1 h-[100%] flex px-[1%] gap-x-[3%] overflow-x-scroll no-scrollbar'>
			{hourlyForecasts.loading ? (
				<Swiper
					slidesPerView={7.9}
					// spaceBetween={30}
					className='mySwiper cursor-grab'
				>
					{Array.from({ length: 8 }).map((item, index) => {
						return (
							<SwiperSlide key={index}>
								<div className='animate-on-show flex-1 flex flex-col items-center justify-between h-[100%]'>
									<div className='h-[10%] w-[70%] rounded-xl opacity-0' />
									<Skeleton className={`h-[80%] aspect-square rounded-xl `} />
									<div className='h-[10%] w-[70%] rounded-lg opacity-0' />
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			) : (
				<Swiper
					slidesPerView={8}
					// spaceBetween={30}
					className='mySwiper cursor-grab'
				>
					{hourlyForecasts.data?.map((item, index) => {
						return (
							<SwiperSlide key={index}>
								<div className='animate-on-show flex-1 flex flex-col items-center justify-between h-[100%] '>
									<div className='block  h-[10%] p-[2%] font-medium'>
										<h1 className='block h-[90%] text-[90%] text-center'>
											{convertUnixTimeToDateTimeString(item.EpochDateTime)}
										</h1>
									</div>
									<div className='block h-[60%] aspect-square'>
										{weatherIconList.map((weather) => {
											return (
												weather.id === item.WeatherIcon && (
													<Image
														key={weather.id}
														src={weather.icon}
														alt='Weather Icon'
														priority={true}
													/>
												)
											);
										})}
									</div>
									{tempUnit === "C" && (
										<h1 className='text-center h-[20%] font-medium animate-on-show'>
											{item.Temperature.Value.toFixed(0)}
											<sup className='h-[100%] font-medium'>
												<sup>°C</sup>
											</sup>
										</h1>
									)}

									{tempUnit === "F" && (
										<h1 className='text-center h-[20%] font-medium animate-on-show'>
											{convertToFahrenheit(item.Temperature.Value)}
											<sup className='h-[100%] font-medium'>
												<sup>°F</sup>
											</sup>
										</h1>
									)}
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			)}
		</div>
	);
};

export default HourlyForecast;
