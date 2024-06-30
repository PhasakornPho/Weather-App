import React from "react";
import Image from "next/image";
import { format, isToday } from "date-fns";

import { useTempUnit } from "../temp-unit-toggle/TempUnitProvider";

import { weatherIconList } from "@/utils/weatherIconList";

import { convertToFahrenheit } from "@/utils/method";
import { useWeatherStore } from "@/store/weatherStore";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Skeleton } from "../ui/skeleton";

type Props = {};

function convertEpochDateToDayString(unixTime: number): string {
	const date = new Date(unixTime * 1000);

	// CCheck if the date matches today.
	if (isToday(date)) {
		return "Today";
	}

	return format(date, "EEE");
}

function isDayOrNight(unixTime: number): string {
	const date = new Date(unixTime * 1000);
	const hours = date.getHours();

	if (hours >= 6 && hours < 18) {
		return "Day";
	} else {
		return "Night";
	}
}

const DailyForecast = (props: Props) => {
	const dailyForecastsWeather = useWeatherStore((state) => state.dailyForecastsWeather);
	const { tempUnit } = useTempUnit();

	return (
		<div className='flex-1 h-[100%] flex px-[1%] gap-x-[3%] overflow-x-scroll no-scrollbar'>
			{dailyForecastsWeather.loading ? (
				<Swiper
					slidesPerView={4.9}
					// spaceBetween={30}
					className='mySwiper cursor-grab'
				>
					{Array.from({ length: 5 }).map((item, index) => {
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
					slidesPerView={4.9}
					modules={[Pagination]}
					className='cursor-grab'
				>
					{dailyForecastsWeather.data?.DailyForecasts?.map((item, index) => {
						return (
							<SwiperSlide key={index}>
								<div className='animate-on-show flex-1 flex flex-col items-center justify-between h-[100%]'>
									<div className='block  h-[10%] p-[2%] font-medium'>
										<h1 className='block h-[90%] text-[90%] text-center'>
											{convertEpochDateToDayString(item.EpochDate)}
										</h1>
									</div>
									<div className='block h-[60%] aspect-square'>
										{weatherIconList.map((weather) => {
											if (isDayOrNight(Date.now()) === "Day") {
												return (
													weather.id === item.Day.Icon && (
														<Image
															key={weather.id}
															src={weather.icon}
															alt='Weather Icon'
															priority={true}
														/>
													)
												);
											}
											if (isDayOrNight(Date.now()) === "Night") {
												return (
													weather.id === item.Night.Icon && (
														<Image
															key={weather.id}
															src={weather.icon}
															alt='Weather Icon'
															priority={true}
														/>
													)
												);
											}
										})}
									</div>
									{tempUnit === "C" && (
										<div className='flex gap-x-[10%]'>
											<span className='text-center h-[20%] font-medium animate-on-show'>
												{item.Temperature.Maximum.Value.toFixed(0)}
											</span>
											<span className='text-center h-[20%] font-medium animate-on-show'>
												/
											</span>
											<span className='text-gray-400 text-center h-[15%] font-normal  animate-on-show'>
												{item.Temperature.Minimum.Value.toFixed(0)}
											</span>
											<span className='text-center h-[20%] font-medium animate-on-show'>
												<sup className='h-[100%] font-medium text-white '>
													<sup>°C</sup>
												</sup>
											</span>
										</div>
									)}

									{tempUnit === "F" && (
										<div className='flex gap-x-[10%]'>
											<span className='text-center h-[20%] font-medium animate-on-show'>
												{convertToFahrenheit(
													item.Temperature.Maximum.Value,
												)}
											</span>
											<span className='text-center h-[20%] font-medium animate-on-show'>
												/
											</span>
											<span className='text-gray-400 text-center h-[15%] font-normal  animate-on-show'>
												{convertToFahrenheit(
													item.Temperature.Minimum.Value,
												)}
											</span>
											<span className='text-center h-[20%] font-medium animate-on-show'>
												<sup className='h-[100%] font-medium text-white '>
													<sup>°C</sup>
												</sup>
											</span>
										</div>
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

export default DailyForecast;
