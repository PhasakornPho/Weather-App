import React from "react";
import SearchBar from "./search/SearchBar";
import ThemeToggle from "./theme-toggle/ThemeToggle";
import TemperatureToggle from "./temp-unit-toggle/TempUnitToggle";
import Locate from "./Locate";

type Props = {};

const Header = (props: Props) => {
	return (
		<div className='flex h-[6%] w-[100%] justify-between items-start text-center'>
			<div className='h-full w-[70%] '>
				<SearchBar />
			</div>

			<div className='w-[25%] h-full flex flex-row justify-end items-center gap-x-[5%]'>
				<div className='w-[40%] h-full flex justify-center items-center'>
					<Locate />
				</div>
				<div className='h-full flex justify-center items-center'>
					<TemperatureToggle />
				</div>
				<div className='h-full flex justify-center items-center'>
					<ThemeToggle />
				</div>
			</div>
		</div>
	);
};

export default Header;
