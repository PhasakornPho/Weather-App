"use client";

import React, { useState, useEffect, useRef } from "react";

//store
import { useSearchStore } from "@/store/searchStore";

//utility
import SvgSearch from "../svg/search";
import SvgClose from "../svg/close";

import { motion } from "framer-motion";

//server action
import { searchAction } from "./action";
import { useWeatherStore } from "@/store/weatherStore";
import { ITopCitesWeatherResponse } from "@/interface/topCitesWeather";
import { useLocationStore } from "@/store/locationStore";
import SvgHeart from "../svg/favorite-svg/SvgHeart";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { setMainPath } from "@/utils/method";

type Props = {};

const SearchBar = (props: Props) => {
	const currentPath = usePathname();
	const mainPath = setMainPath(currentPath);

	const [inputCity, setInputCity] = useState<string>("");
	const [inputFocus, setInputFocus] = useState<boolean>(false);
	// Weather Store
	const fetchCitiesWeatherList = useWeatherStore((state) => state.fetchCitiesWeatherList);
	// Location Store
	const setCurrentPosition = useLocationStore((state) => state.setCurrentPosition);
	const favoriteCities = useLocationStore((state) => state.favoriteCities);
	// Search Store
	const query = useSearchStore((state) => state.query);
	const suggestions = useSearchStore((state) => state.suggestions);
	const focus = useSearchStore((state) => state.focus);
	const setQuery = useSearchStore((state) => state.setQuery);
	const setSuggestions = useSearchStore((state) => state.setSuggestions);
	const setFocus = useSearchStore((state) => state.setFocus);

	const inputRef = useRef<HTMLInputElement>(null);
	const formRef = useRef<HTMLFormElement>(null);

	const isFavorite = (city: string) => {
		return favoriteCities.data?.some((item) => item.city?.EnglishName === city);
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputCity(event.target.value);
		setQuery(event.target.value);
	};

	const onCloseHandler = () => {
		setInputCity("");
		setInputFocus(false);
	};

	const onChooseSuggestion = async (city: ITopCitesWeatherResponse) => {
		setQuery(city.EnglishName);
		setInputCity("");
		setInputFocus(false);
		console.log("Choose suggestions: ", city);
	};

	const filterCitesList = (keyword: string, data?: ITopCitesWeatherResponse[]) => {
		return data?.filter((item) =>
			item.EnglishName.toLowerCase().includes(keyword.toLowerCase()),
		);
	};

	useEffect(() => {
		const suggestionsCities = () => {
			if (inputCity.trim()) {
				const data = filterCitesList(inputCity, fetchCitiesWeatherList.data);

				setSuggestions(data);
			} else {
				setSuggestions([]);
			}
		};

		suggestionsCities();
	}, [fetchCitiesWeatherList.data, inputCity, setSuggestions]);

	useEffect(() => {
		console.log("focus: ", focus);

		if (focus) {
			inputRef.current?.focus();
		}
		setFocus(false);
	}, [focus, setFocus]);

	return (
		<form
			ref={formRef}
			action={() => searchAction(query, currentPath)}
			onSubmit={(e) => {
				setInputCity("");
				setInputFocus(false);
			}}
			className='w-full h-full flex justify-between font-medium text-[110%] gap-x-[0.5vw]'
		>
			<div
				className={`h-full w-full flex relative ${
					suggestions && suggestions.length > 0
						? "rounded-[0.5vw_0.5vw_0vw_0vw] bg-[var(--bg-item-primary)]"
						: inputCity.length > 0 || inputFocus
						? "rounded-[0.5vw] bg-[var(--bg-item-primary)]"
						: "rounded-full"
				}  outline outline-[1%] bg-[rgba(85,140,185,0.8)] outline-[rgba(85,140,185,0.8)] dark:bg-[rgba(33,40,60,0.8)] dark:outline-[rgba(33,40,60,0.9)] dark:focus:outline-[rgb(110,120,150)] border-none flex flex-col justify-center`}
			>
				<label
					htmlFor='search-input'
					className={`${
						inputCity.length > 0 ||
						(suggestions && suggestions.length > 0) ||
						inputFocus
							? "translate-y-[-50%] left-[4.6%]"
							: "left-[3%]"
					} absolute h-full w-fit flex justify-center items-center text-nowrap border-none bg-transparent transition-all`}
				>
					<p
						className={`${
							inputCity.length > 0 ||
							(suggestions && suggestions.length > 0) ||
							inputFocus
								? "text-[70%] bg-[rgba(75,125,160,0.9)] p-[3%_8%] rounded-md dark:bg-[rgba(33,40,60,0.8)]"
								: "text-[95%] "
						}`}
					>
						Search for cities
					</p>
				</label>
				<div className='w-full h-[90%] flex justify-center items-center px-[1%] '>
					{(inputCity.length > 0 ||
						(suggestions && suggestions.length > 0) ||
						inputFocus) && <SvgSearch style='h-[60%] aspect-square' />}

					<input
						ref={inputRef}
						id='search-input'
						type='text'
						name='city-name'
						placeholder=''
						className={`h-[90%] flex-1 px-[2%] bg-transparent border-none outline-none transition-all `}
						value={inputCity}
						onChange={handleInputChange}
						onFocus={() => setInputFocus(true)}
						onBlur={() => {
							setInputFocus(false);
						}}
					/>

					{(inputCity.length > 0 ||
						(suggestions && suggestions.length > 0) ||
						inputFocus) && (
						<SvgClose
							className='h-[80%] cursor-pointer hover:opacity-[0.6] hover:scale-[1.1] fill-[rgba(255,255,255,0.9)]'
							onClick={onCloseHandler}
						/>
					)}
				</div>

				{suggestions && suggestions.length > 0 && (
					<ul className='absolute max-h-[800%] w-[100%] flex-1 z-[1000] list-none rounded-[0vw_0vw_0.5vw_0.5vw] flex flex-col justify-start items-start top-[110%] left-0 bg-[var(--bg-item-primary-transparent)] outline outline-[1%] outline-[rgba(33,40,60,0.9)] overflow-y-scroll no-scrollbar transition-all'>
						{suggestions?.map((suggestion, index) => (
							<Link
								key={index}
								href={`${mainPath}${suggestion.GeoPosition.Latitude.toFixed(
									5,
								)}/${suggestion.GeoPosition.Longitude.toFixed(5)}`}
								className='w-[100%] flex justify-start items-center hover:bg-[var(--bg-item-select)]'
								onClick={() => onChooseSuggestion(suggestion)}
							>
								<div className='w-[5%] pr-[1%] flex justify-end items-center'>
									<div className='w-[75%] aspect-square rounded-sm bg-slate-700 p-[2%] text-[60%] flex items-center justify-center'>
										<p>{suggestion.Country.ID}</p>
									</div>
								</div>
								<li
									key={index}
									className='p-[10px] flex-1 cursor-pointer text-start'
								>
									{suggestion.EnglishName}
								</li>
								<div className='w-[5%] pr-[1%] flex justify-end items-center'>
									{isFavorite(suggestion.EnglishName) && (
										<SvgHeart
											isFavorite={true}
											style='w-[55%]'
										/>
									)}
								</div>
							</Link>
						))}
					</ul>
				)}
			</div>

			{inputCity.length > 0 && (
				<motion.button
					initial={{ scaleX: 0, opacity: 0, x: "50%" }}
					animate={{
						scaleX: 1,
						opacity: 1,
						x: "0%",
						width: "fit-center",
						transition: {
							duration: 0.3,
						},
					}}
					type='submit'
					className='w-[15%] text-black bg-gray-50 rounded-full text-center hover:bg-gray-200 hover:font-bold focus:ring-[3px] focus:outline-none focus:ring-gray-700'
				>
					<motion.span
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
							transition: {
								duration: 0.3,
								delay: 0.3,
							},
						}}
					>
						{/* 2xl:w-[150px] 2xl:h-[60px] xl:w-[120px] xl:h-[48px] w-[95px] h-[38px] */}
						Search
					</motion.span>
				</motion.button>
			)}
		</form>
	);
};

export default SearchBar;
