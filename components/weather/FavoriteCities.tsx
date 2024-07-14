"use client";

import React, { useEffect } from "react";
import Image from "next/image";

import AddIcon from "../ui/addIcon";

// Import Interface Type
import { IGeolocationSearch } from "@/interface/geoLocationSearch";
import { IAirPollution } from "@/interface/airPollution";

// Provider
import { useTempUnit } from "../temp-unit-toggle/TempUnitProvider";

// Store
import { useSearchStore } from "@/store/searchStore";
import { TFavoriteCity, useLocationStore } from "@/store/locationStore";
import { weatherIconList } from "@/utils/weatherIconList";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { useAirPollutionStore } from "@/store/airPollutionStore";

import {
	ACCU_WEATHER_API_KEY,
	ACCU_WEATHER_CURRENT_WEATHER,
	OPEN_CURRENT_AIR_POLLUTION_ENDPOINT,
	OPEN_CURRENT_API_KEY,
} from "@/utils/constants";
import axios from "axios";
import { isBefore, subHours } from "date-fns";
import SvgClose from "../svg/close";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { setMainPath } from "@/utils/method";

type Props = {};

const FavoriteCities = (props: Props) => {
	const currentPath = usePathname();
	const mainPath = setMainPath(currentPath);

	const setFocus = useSearchStore((state) => state.setFocus);
	const setCurrentAirPollution = useAirPollutionStore((state) => state.setCurrentAirPollution);
	const setCurrentCity = useLocationStore((state) => state.setCurrentCity);

	const favoriteCities = useLocationStore((state) => state.favoriteCities);
	const setFavoriteCities = useLocationStore((state) => state.setFavoriteCities);

	const { tempUnit } = useTempUnit();

	const onClickAddHandler = async () => {
		setFocus(true);
	};

	const onClickItemHandler = async (city?: IGeolocationSearch, airPollution?: IAirPollution) => {
		console.log("onClickHandler");
		if (city) {
			setCurrentCity({
				timeStamp: Date.now(),
				data: city,
				loading: false,
				error: null,
			});

			setCurrentAirPollution({
				timeStamp: Date.now(),
				data: airPollution,
				loading: false,
				error: null,
			});
		}
	};

	const onRemoveHandler = (list: TFavoriteCity) => {
		console.log("Remove favorite id: ", list.city?.Key);
		const newFavoriteCities = favoriteCities.data
			?.filter((item) => item.city?.Key !== list.city?.Key)
			.filter((item) => item.id !== list.id);

		setFavoriteCities({
			timeStamp: Date.now(),
			data: newFavoriteCities,
			loading: false,
			error: null,
		});
	};

	useEffect(() => {
		const updatedFavoritesWeather = async () => {
			try {
				const isFetchList = favoriteCities.data?.filter((item) =>
					isBefore(item.updateTime, subHours(Date(), 1)),
				);

				if (isFetchList?.length) {
					const promisesCurrentWeather = isFetchList.map((item) =>
						axios.get(
							`${ACCU_WEATHER_CURRENT_WEATHER}/${
								item.city?.Key
							}?apikey=${ACCU_WEATHER_API_KEY}&language=en-us&details=${true}`,
						),
					);

					const promisesCurrentAirPollution = isFetchList.map((item) =>
						axios.get(
							`${OPEN_CURRENT_AIR_POLLUTION_ENDPOINT}lat=${item.city?.GeoPosition.Latitude?.toFixed(
								2,
							)}&lon=${item.city?.GeoPosition.Longitude?.toFixed(
								2,
							)}&appid=${OPEN_CURRENT_API_KEY}`,
						),
					);

					const [resultsCurrentWeather, resultsCurrentAirPollution] = await Promise.all([
						Promise.allSettled(promisesCurrentWeather),
						Promise.allSettled(promisesCurrentAirPollution),
					]);

					const newFavoriteCities = favoriteCities.data?.map((city): TFavoriteCity => {
						const weatherResult = resultsCurrentWeather.find(
							(result, index) =>
								result.status === "fulfilled" && isFetchList[index].city?.Key,
						);
						const airPollutionResult = resultsCurrentAirPollution.find(
							(result, index) =>
								result.status === "fulfilled" && isFetchList[index].city?.Key,
						);

						return {
							...city,
							weather:
								weatherResult?.status === "fulfilled"
									? weatherResult.value.data?.[0]
									: city.weather,
							airPollution:
								airPollutionResult?.status === "fulfilled"
									? airPollutionResult.value.data
									: city.airPollution,
							updateTime: Date.now(),
						};
					});

					setFavoriteCities({
						timeStamp: Date.now(),
						data: newFavoriteCities,
						loading: false,
						error: null,
					});
				}
			} catch (error) {
				console.error("An error occurred while fetching data:", error);
			}
		};

		updatedFavoritesWeather();
	}, [favoriteCities.data, setFavoriteCities]);

	return (
		<div className='h-[95%] w-[95%] p-[2%] flex flex-col'>
			<div className='h-[20%]'>
				<h1 className='capitalize font-medium text-lg'>Favorite cities</h1>
			</div>
			<div className='h-[80%] flex gap-x-[3%] overflow-x-scroll no-scrollbar'>
				<Swiper
					slidesPerView={2.15}
					spaceBetween={15}
					className='cursor-grab'
				>
					{favoriteCities.loading ? (
						Array.from({ length: 4 }).map((item, index) => {
							return (
								<SwiperSlide key={index}>
									<div className='bg-[--bg-item-primary-transparent] hover:bg-[--bg-item-secondary] h-[95%] aspect-square rounded-[1.2vw] p-[10%] flex flex-col justify-center items-center gap-y-[5%] animate-pulse opacity-60'></div>
								</SwiperSlide>
							);
						})
					) : (
						<>
							{favoriteCities.data?.map((item, index) => {
								return (
									<SwiperSlide key={index}>
										<div
											className='h-full'
											// onClick={() =>
											// 	onClickItemHandler(item.city, item.airPollution)
											// }
										>
											<div className='bg-[--bg-item-primary-transparent] hover:bg-[--bg-item-secondary] h-[95%] aspect-square rounded-[1.2vw] p-[10%] flex flex-col justify-center items-center gap-y-[5%] relative card'>
												<div className='close'>
													<SvgClose
														className='h-[60%] aspect-square fill-[rgba(255,255,255,0.8)] stroke-[rgba(255,255,255,0.8)] hover:fill-[rgb(250,45,45)] hover:stroke-[rgba(255,80,80)]'
														onClick={() =>
															item.city?.Key && onRemoveHandler(item)
														}
													/>
												</div>

												{/* //city name */}
												<p className='text-[90%]'>
													{item.city?.EnglishName}
												</p>

												{/* // weather icon */}
												<Link
													href={`${mainPath}${item.city?.GeoPosition.Latitude.toFixed(
														5,
													)}/${item.city?.GeoPosition.Longitude.toFixed(
														5,
													)}`}
													className='h-full w-[55%] flex flex-col justify-center cursor-pointer'
												>
													{weatherIconList.map((list) => {
														if (list.id === item.weather?.WeatherIcon) {
															return (
																<Image
																	key={list.id}
																	src={list.icon}
																	alt='Weather Icon'
																	priority={true}
																/>
															);
														}
													})}
												</Link>

												{/* // temperature */}
												<div className='w-full flex justify-center gap-x-[10%]'>
													{tempUnit === "C" &&
														item.weather?.Temperature?.Metric && (
															<p className='text-[90%] animate-on-show'>
																{"H:" +
																	item.weather?.TemperatureSummary.Past24HourRange.Maximum.Metric.Value.toFixed()}
																<sup className=' font-medium'>
																	{"°" +
																		item.weather?.Temperature
																			.Metric.Unit}
																</sup>
															</p>
														)}
													{tempUnit === "F" &&
														item.weather?.Temperature?.Metric && (
															<p className='text-[90%] animate-on-show'>
																{"H:" +
																	item.weather?.TemperatureSummary.Past24HourRange.Maximum.Imperial.Value.toFixed()}
																<sup className=' font-medium'>
																	{"°" +
																		item.weather?.Temperature
																			.Imperial.Unit}
																</sup>
															</p>
														)}

													{tempUnit === "C" &&
														item.weather?.Temperature?.Metric && (
															<p className='text-[90%] animate-on-show'>
																{"L:" +
																	item.weather?.TemperatureSummary.Past24HourRange.Minimum.Metric.Value.toFixed()}
																<sup className=' font-medium'>
																	{"°" +
																		item.weather?.Temperature
																			.Metric.Unit}
																</sup>
															</p>
														)}
													{tempUnit === "F" &&
														item.weather?.Temperature?.Metric && (
															<p className='text-[90%] animate-on-show'>
																{"L:" +
																	item.weather?.TemperatureSummary.Past24HourRange.Minimum.Imperial.Value.toFixed()}
																<sup className=' font-medium'>
																	{"°" +
																		item.weather?.Temperature
																			.Imperial.Unit}
																</sup>
															</p>
														)}
												</div>
											</div>
										</div>
									</SwiperSlide>
								);
							})}
							<SwiperSlide>
								<div
									className='h-full'
									onClick={onClickAddHandler}
								>
									<div className='bg-[--bg-item-primary] hover:bg-[--bg-item-secondary] h-[95%] aspect-square rounded-[1.2vw] flex justify-center items-center cursor-pointer '>
										<AddIcon style='h-[30%] w-[30%] fill-gray-300 hover:fill-gray-100' />
									</div>
								</div>
							</SwiperSlide>
						</>
					)}
				</Swiper>
			</div>
		</div>
	);
};

export default FavoriteCities;
