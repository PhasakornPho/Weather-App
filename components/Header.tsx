import React from "react";
import SearchBar from "./search/SearchBar";
import ThemeToggle from "./theme-toggle/ThemeToggle";
import TemperatureToggle from "./temp-unit-toggle/TempUnitToggle";
import Locate from "./Locate";

type Props = {};

const Header = (props: Props) => {
	return (
		<div className='flex h-[6%] w-[100%] justify-between items-start text-center'>
			<SearchBar />
			<div className='w-[10%] h-[100%] flex flex-row gap-x-[8px] justify-center items-center'>
				<Locate />
				<TemperatureToggle />
				<ThemeToggle />
			</div>
		</div>
	);
};

export default Header;
