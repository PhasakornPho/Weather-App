"use client";

import React from "react";

// user component
import SvgFeelsLike from "../svg/weather-detail-svg/SvgFeelsLike";
import SvgWind from "../svg/weather-detail-svg/SvgWind";
import SvgRain from "../svg/weather-detail-svg/SvgRain";
import SvgUV from "../svg/weather-detail-svg/SvgUV";
import SvgHumidity from "../svg/weather-detail-svg/SvgHumidity";
import SvgAqiIndex from "../svg/aqi-svg/SvgAqiIndex";

//user Interface

//user Provider
import { useTempUnit } from "../temp-unit-toggle/TempUnitProvider";

//user mockup data
import { useWeatherStore } from "@/store/weatherStore";
import { useAirPollutionStore } from "@/store/airPollutionStore";
import { Skeleton } from "../ui/skeleton";

type Props = {};

const AirConditions = (props: Props) => {
	const currentAirPollution = useAirPollutionStore((state) => state.currentAirPollution);
	const currentWeather = useWeatherStore((state) => state.currentWeather);
	const hourlyForecastsWeather = useWeatherStore((state) => state.hourlyForecastsWeather);
	const { tempUnit } = useTempUnit();

	return (
		<div className='bg-[var(--bg-secondary)] h-[100%] rounded-[1.2vw] p-[2%] flex flex-col justify-around  gap-y-[10%]'>
			{/* Forecast header */}
			<div className='flex justify-between items-center h-[20%] w-[100%]'>
				<h1 className='px-[1%] font-medium text-lg'>Air Conditions</h1>
				<div className='w-[25%] flex items-center justify-end'>
					{/* <button className=' text-sm font-bold bg-blue-600 border border-blue-500 text-gray-200 p-[4%_8%] rounded-full overflow-hidden hover:bg-blue-800 hover:border-blue-900 hover:text-gray-300'>
                        Show more
                    </button> */}
				</div>
			</div>

			<div className='flex justify-center items-center h-[80%] w-[100%]'>
				{currentWeather.loading || currentAirPollution.loading ? (
					<div className='flex-1 h-full w-full flex gap-x-[1%]'>
						<div className='h-[100%] w-[15.8%] flex flex-col justify-center items-center rounded-[1.2vw] p-[1%_2%] gap-y-[10%] bg-[var(--bg-item-primary)] animate-pulse'>
							<div className='h-[55%] w-[100%] flex justify-center items-center gap-x-[10%]'>
								<div className='h-full w-[45%] flex justify-center items-center'>
									<Skeleton className='h-[70%] aspect-square rounded-3xl' />
								</div>
								<div className='h-[100%] flex-1 flex justify-center items-center'>
									<Skeleton className='h-[50%] w-full rounded-xl' />
								</div>
							</div>
							<div className='h-[25%] w-[80%] flex justify-center items-start'>
								<Skeleton className='h-[80%] w-[85%] rounded-xl' />
							</div>
						</div>

						<div className='h-[100%] w-[15.8%] flex flex-col justify-center items-center rounded-[1.2vw] p-[1%_2%] gap-y-[10%] bg-[var(--bg-item-primary)] animate-pulse'>
							<div className='h-[55%] w-[100%] flex justify-center items-center gap-x-[10%]'>
								<div className='h-full w-[45%] flex justify-center items-center'>
									<Skeleton className='h-[70%] aspect-square rounded-3xl' />
								</div>
								<div className='h-[100%] flex-1 flex justify-center items-center'>
									<Skeleton className='h-[50%] w-full rounded-xl' />
								</div>
							</div>
							<div className='h-[25%] w-[80%] flex justify-center items-start'>
								<Skeleton className='h-[80%] w-[85%] rounded-xl' />
							</div>
						</div>

						<div className='h-[100%] w-[15.8%] flex flex-col justify-center items-center rounded-[1.2vw] p-[1%_2%] gap-y-[10%] bg-[var(--bg-item-primary)] animate-pulse'>
							<div className='h-[55%] w-[100%] flex justify-center items-center gap-x-[10%]'>
								<div className='h-full w-[45%] flex justify-center items-center'>
									<Skeleton className='h-[70%] aspect-square rounded-3xl' />
								</div>
								<div className='h-[100%] flex-1 flex justify-center items-center'>
									<Skeleton className='h-[50%] w-full rounded-xl' />
								</div>
							</div>
							<div className='h-[25%] w-[80%] flex justify-center items-start'>
								<Skeleton className='h-[80%] w-[85%] rounded-xl' />
							</div>
						</div>

						<div className='h-[100%] w-[15.8%] flex flex-col justify-center items-center rounded-[1.2vw] p-[1%_2%] gap-y-[10%] bg-[var(--bg-item-primary)] animate-pulse'>
							<div className='h-[55%] w-[100%] flex justify-center items-center gap-x-[10%]'>
								<div className='h-full w-[45%] flex justify-center items-center'>
									<Skeleton className='h-[70%] aspect-square rounded-3xl' />
								</div>
								<div className='h-[100%] flex-1 flex justify-center items-center'>
									<Skeleton className='h-[50%] w-full rounded-xl' />
								</div>
							</div>
							<div className='h-[25%] w-[80%] flex justify-center items-start'>
								<Skeleton className='h-[80%] w-[85%] rounded-xl' />
							</div>
						</div>

						<div className='h-[100%] w-[15.8%] flex flex-col justify-center items-center rounded-[1.2vw] p-[1%_2%] gap-y-[10%] bg-[var(--bg-item-primary)] animate-pulse'>
							<div className='h-[55%] w-[100%] flex justify-center items-center gap-x-[10%]'>
								<div className='h-full w-[45%] flex justify-center items-center'>
									<Skeleton className='h-[70%] aspect-square rounded-3xl' />
								</div>
								<div className='h-[100%] flex-1 flex justify-center items-center'>
									<Skeleton className='h-[50%] w-full rounded-xl' />
								</div>
							</div>
							<div className='h-[25%] w-[80%] flex justify-center items-start'>
								<Skeleton className='h-[80%] w-[85%] rounded-xl' />
							</div>
						</div>

						<div className='h-[100%] w-[15.8%] flex flex-col justify-center items-center rounded-[1.2vw] p-[1%_2%] gap-y-[10%] bg-[var(--bg-item-primary)] animate-pulse'>
							<div className='h-[55%] w-[100%] flex justify-center items-center gap-x-[10%]'>
								<div className='h-full w-[45%] flex justify-center items-center'>
									<Skeleton className='h-[70%] aspect-square rounded-3xl' />
								</div>
								<div className='h-[100%] flex-1 flex justify-center items-center'>
									<Skeleton className='h-[50%] w-full rounded-xl' />
								</div>
							</div>
							<div className='h-[25%] w-[80%] flex justify-center items-start'>
								<Skeleton className='h-[80%] w-[85%] rounded-xl' />
							</div>
						</div>
					</div>
				) : (
					<div className='flex-1 h-full w-full flex gap-x-[1%]'>
						{currentWeather.data?.RealFeelTemperature?.Metric.Value !== undefined && (
							<div className='h-[100%] w-[15.8%] flex flex-col justify-center items-start rounded-[1.2vw] p-[1%_1%] gap-y-[10%] bg-[var(--bg-item-primary)]'>
								<div className='h-[60%] w-[100%] flex justify-center items-center gap-x-[5%]'>
									<div className='h-[100%] w-[40%] flex justify-center items-center'>
										<SvgFeelsLike className='h-[100%] fill-[rgb(10,10,10)] dark:fill-[rgb(240,240,240)]' />
									</div>
									<div className='h-[100%] flex-1 flex justify-center items-center'>
										<h1 className='uppercase text-sm'>Feels Like</h1>
									</div>
								</div>
								<div className='h-[40%] w-[100%] flex justify-center items-center'>
									{tempUnit === "C" && (
										<h1 className='text-center text-2xl font-medium animate-on-show'>
											{currentWeather.data?.RealFeelTemperature.Metric.Value}
											<sup className='h-[100%] font-medium'>
												<sup>°C</sup>
											</sup>
										</h1>
									)}

									{tempUnit === "F" && (
										<h1 className='text-center text-2xl font-medium animate-on-show'>
											{
												currentWeather.data?.RealFeelTemperature.Imperial
													.Value
											}
											<sup className='h-[100%] font-medium'>
												<sup>°F</sup>
											</sup>
										</h1>
									)}
								</div>
							</div>
						)}

						{currentWeather.data?.Wind?.Speed.Metric !== undefined && (
							<div className='h-[100%] w-[15.8%] flex flex-col justify-center items-start rounded-[1.2vw] p-[2%_2%] gap-y-[10%] bg-[var(--bg-item-primary)]'>
								<div className='h-[60%] w-[100%] flex justify-center items-center gap-x-[5%]'>
									<div className='h-[100%] w-[40%] flex justify-center items-center'>
										<SvgWind className='h-[90%] fill-[rgb(10,10,10)] dark:fill-[rgb(240,240,240)]' />
									</div>
									<div className='h-[100%] flex-1 flex justify-center items-center'>
										<h1 className='uppercase text-sm'>Wind</h1>
									</div>
								</div>
								<div className='h-[40%] w-[100%] flex justify-center items-center '>
									<h1 className='text-center text-2xl font-medium animate-on-show'>
										{currentWeather.data?.Wind.Speed.Metric.Value}
										<span className='font-medium'>
											{" "}
											{currentWeather.data?.Wind.Speed.Metric.Unit}
										</span>
									</h1>
								</div>
							</div>
						)}

						{hourlyForecastsWeather.data?.[0]?.RainProbability !== undefined && (
							<div className='h-[100%] w-[15.8%] flex flex-col justify-center items-start rounded-[1.2vw] p-[2%_1%] gap-y-[10%] bg-[var(--bg-item-primary)]'>
								<div className='h-[60%] w-[100%] flex justify-center items-center gap-x-[5%]'>
									<div className='h-[100%] w-[40%] flex justify-center items-center'>
										<SvgRain className='h-[90%] fill-[rgb(10,10,10)] dark:fill-[rgb(240,240,240)]' />
									</div>
									<div className='h-[100%] flex-1 flex justify-center items-center'>
										<h1 className='uppercase text-sm'>Chance of rain</h1>
									</div>
								</div>
								<div className='h-[40%] w-[100%] flex justify-center items-center '>
									<h1 className='text-center text-2xl font-medium animate-on-show'>
										{hourlyForecastsWeather.data?.[0]?.RainProbability}
										<span className='font-medium'> %</span>
									</h1>
								</div>
							</div>
						)}

						{currentWeather.data?.UVIndexText !== undefined && (
							<div className='h-[100%] w-[15.8%] flex flex-col justify-center items-start rounded-[1.2vw] p-[2%_2%] gap-y-[10%] bg-[var(--bg-item-primary)]'>
								<div className='h-[60%] w-[100%] flex justify-center items-center gap-x-[5%]'>
									<div className='h-[100%] w-[40%] flex justify-center items-center'>
										<SvgUV className='h-[90%] fill-[rgb(10,10,10)] dark:fill-[rgb(240,240,240)]' />
									</div>
									<div className='h-[100%] flex-1 flex justify-center items-center'>
										<h1 className='uppercase text-sm text-center'>UV index</h1>
									</div>
								</div>
								<div className='h-[40%] w-[100%] flex justify-around items-center '>
									<h1 className='text-center text-lg font-medium animate-on-show'>
										{currentWeather.data?.UVIndexText}
									</h1>
									<h1 className='text-center text-2xl font-medium animate-on-show'>
										{" "}
										{currentWeather.data?.UVIndex}
									</h1>
								</div>
							</div>
						)}

						{currentWeather.data?.RelativeHumidity !== undefined && (
							<div className='h-[100%] w-[15.8%] flex flex-col justify-center items-start rounded-[1.2vw] p-[2%_2%] gap-y-[10%] bg-[var(--bg-item-primary)]'>
								<div className='h-[60%] w-[100%] flex justify-center items-center gap-x-[5%]'>
									<div className='h-[100%] w-[40%] flex justify-center items-center'>
										<SvgHumidity className='h-[90%] fill-[rgb(10,10,10)] dark:fill-[rgb(240,240,240)]' />
									</div>
									<div className='h-[100%] flex-1 flex justify-center items-center'>
										<h1 className='uppercase text-sm'>Humidity</h1>
									</div>
								</div>
								<div className='h-[40%] w-[100%] flex justify-center items-center '>
									{currentWeather.data?.RelativeHumidity && (
										<h1 className='text-center text-2xl font-medium animate-on-show'>
											{currentWeather.data?.RelativeHumidity}
											<span className='font-medium'> %</span>
										</h1>
									)}
								</div>
							</div>
						)}

						{currentAirPollution.data?.list?.[0].components.pm2_5 !== undefined && (
							<div className='h-[100%] w-[15.8%] flex flex-col justify-center items-start rounded-[1.2vw] p-[2%_2%] gap-y-[10%] bg-[var(--bg-item-primary)]'>
								<div className='h-[60%] w-[100%] flex justify-center items-center gap-x-[5%]'>
									<div className='h-[100%] w-[60%] flex justify-center items-center'>
										{/* <SvgAqiSelection
                                    svgStyle='h-[90%] fill-[rgb(10,10,10)] dark:fill-[rgb(240,240,240)]'
                                    aqiIndex={
                                        currentWeather.data?.airPollution
                                            ?.list[0].components.pm2_5
                                    }
                                /> */}
										<SvgAqiIndex className='h-[90%] fill-[rgb(10,10,10)] dark:fill-[rgb(240,240,240)]' />
									</div>
									<div className='h-[100%] flex-1 flex justify-center items-center'>
										<h1 className='uppercase text-sm'>AQI Index</h1>
									</div>
								</div>
								<div className='h-[40%] w-[100%] flex justify-center items-center '>
									<h1 className='text-center text-2xl font-medium animate-on-show'>
										{currentAirPollution.data?.list[0].components.pm2_5}
									</h1>
								</div>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default AirConditions;
