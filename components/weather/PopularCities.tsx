"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

//provide
import { useTempUnit } from "../temp-unit-toggle/TempUnitProvider";

//const
import { sortList } from "@/utils/constants";
import { weatherIconList } from "@/utils/weatherIconList";

// hook
import { usePopularCitiesHooks } from "@/hook/popularCities.hook";

//store
import { useWeatherStore } from "@/store/weatherStore";
import { IPopularCities } from "@/interface/topCitesWeather";
import { useLocationStore } from "@/store/locationStore";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

// import required modules
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";
import { Skeleton } from "../ui/skeleton";
import Link from "next/link";
import { usePathname } from "next/navigation";

// import setMainPath function
import { setMainPath } from "@/utils/method";

type Props = {};

const PopularCities = (props: Props) => {
	const currentPath = usePathname();
	const mainPath = setMainPath(currentPath);

	const [sortOption, setSortOption] = useState<string>("Lowest Rank");

	const fetchPopularCitiesWeather = useWeatherStore((state) => state.fetchPopularCitiesWeather);

	const popularCitiesWeather = useWeatherStore((state) => state.popularCitiesWeather);

	const setPopularCitiesWeather = useWeatherStore((state) => state.setPopularCitiesWeather);

	const setCurrentPosition = useLocationStore((state) => state.setCurrentPosition);

	const { tempUnit } = useTempUnit();

	const sortHandlerChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSortOption((prev) => (prev = event.target.value));
	};

	const sortBy = (data?: IPopularCities[], type: string = "lowest rank") => {
		switch (type.toLowerCase()) {
			case "lowest rank":
				return data?.sort((a, b) => a.rank - b.rank);
			case "highest rank":
				return data?.sort((a, b) => b.rank - a.rank);
			case "name (a-z)":
				return data?.sort((a, b) => (a.city > b.city ? 1 : a.city < b.city ? -1 : 0));
			case "name (z-a)":
				return data?.sort((a, b) => (a.city < b.city ? 1 : a.city > b.city ? -1 : 0));
			default:
				return data?.sort((a, b) => a.rank - b.rank);
		}
	};

	usePopularCitiesHooks();

	useEffect(() => {
		const storedSortOption = localStorage.getItem("SortOption");
		if (storedSortOption) {
			setSortOption(storedSortOption);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("SortOption", sortOption);

		const data = sortBy(fetchPopularCitiesWeather.data, sortOption);

		setPopularCitiesWeather({
			timeStamp: Date.now(),
			data: data,
			loading: false,
			error: null,
		});
	}, [fetchPopularCitiesWeather.data, setPopularCitiesWeather, sortOption]);

	return (
		<div className='h-[95%] w-[95%] p-[2%] flex flex-col gap-y-[2%]'>
			{/* Header */}
			<div className='h-[10%] flex justify-between items-center px-[2%]'>
				<h1 className='capitalize font-medium text-lg'>Popular Cities</h1>

				{/* Sort By */}
				<div className='block h-[100%] w-[55%] '>
					<form className='h-full w-full flex items-center justify-between '>
						<label
							htmlFor='sort'
							className='capitalize font-medium text-sm text-gray-400 hover:text-gray-100 cursor-pointer w-fit'
						>
							Sort By
						</label>
						<select
							id='sort'
							className='h-fit w-fit bg-gray-700 border border-gray-600 placeholder-gray-400 text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 p-[2%_5%] capitalize'
							onChange={sortHandlerChange}
							value={sortOption}
						>
							{sortList.map((sort, index) => {
								return (
									<option
										className='capitalized'
										key={`sort-key-${index}`}
										value={sort}
									>
										{sort}
									</option>
								);
							})}
						</select>
					</form>
				</div>
			</div>

			{/* Cities List */}

			<div className='flex-1 w-[100%] h-[70%] overflow-y-scroll no-scrollbar '>
				<div className='flex-1 h-[100%] flex px-[1%] gap-x-[3%] overflow-x-scroll no-scrollbar rounded-lg'>
					<Swiper
						direction={"vertical"}
						slidesPerView={5.7}
						freeMode={true}
						scrollbar={{
							hide: true,
						}}
						mousewheel={true}
						modules={[FreeMode, Scrollbar, Mousewheel]}
						className='cursor-grab'
					>
						{popularCitiesWeather.loading
							? Array.from({ length: 10 }).map((item, index) => {
									return (
										<SwiperSlide key={index}>
											<Skeleton className='w-[100%] h-[90%] flex justify-between items-center cursor-pointer bg-slate-700 rounded-xl p-[2%]'>
												<Skeleton className='w-[20%] h-[30%] text-ellipsis opacity-60' />

												<div className='w-[45%] h-[80%] flex justify-around items-center gap-x-[5%]'>
													<Skeleton className='w-[45%] h-full opacity-60' />
													<Skeleton className='flex-1 h-[40%] opacity-60' />
												</div>

												<div className='w-[15%] h-[45%] aspect-square rounded-full'>
													<Skeleton className='w-[80%] h-full opacity-60' />
												</div>
											</Skeleton>
										</SwiperSlide>
									);
							  })
							: popularCitiesWeather.data?.map((item) => {
									return (
										<SwiperSlide key={item.rank}>
											<Link
												href={`${mainPath}${item.detailWeather?.GeoPosition.Latitude.toFixed(
													5,
												)}/${item.detailWeather?.GeoPosition.Longitude.toFixed(
													5,
												)}`}
												className='w-[95%] h-[100%] flex justify-between items-center cursor-pointer'
											>
												<div className='w-[30%] text-ellipsis'>
													<h1 className='w-full text-start px-[10%] text-[95%]'>
														{item.city}
													</h1>
												</div>

												<div className='w-[45%] h-[80%] flex justify-around items-center gap-x-[5%]'>
													<div className='w-[45%] flex justify-center items-center'>
														{weatherIconList.map((weather) => {
															return (
																weather.id ===
																	item.detailWeather
																		?.WeatherIcon && (
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
													<p className='flex-1 text-[85%]'>
														{item.detailWeather?.WeatherText}
													</p>
												</div>

												<div className='w-[15%]'>
													{tempUnit === "C" && (
														<h1 className='text-center text-[85%] h-[20%] font-medium animate-on-show'>
															{item.detailWeather?.Temperature.Metric.Value.toFixed(
																0,
															)}
															<sup className='h-[100%] font-medium'>
																<sup>°C</sup>
															</sup>
														</h1>
													)}

													{tempUnit === "F" && (
														<h1 className='text-center text-[85%] h-[20%] font-medium animate-on-show'>
															{item.detailWeather?.Temperature.Imperial.Value.toFixed(
																0,
															)}
															<sup className='h-[100%] font-medium'>
																<sup>°F</sup>
															</sup>
														</h1>
													)}
												</div>
											</Link>
										</SwiperSlide>
									);
							  })}
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default PopularCities;
