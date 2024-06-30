"use client";

import React from "react";
import { useTempUnit } from "@/components/temp-unit-toggle/TempUnitProvider";

// Import Interface
import { ICurrent } from "@/interface/citiesWeather";

type Props = {
	weather?: ICurrent;
};

const Temperature = (props: Props) => {
	const { tempUnit } = useTempUnit();

	return (
		<>
			{tempUnit === "C" && (
				<h1 className='text-center text-[100%] font-medium animate-on-show'>
					{props.weather?.temp_c.toFixed(0)}
					<sup className='h-[100%] font-medium'>
						<sup>°C</sup>
					</sup>
				</h1>
			)}

			{tempUnit === "F" && (
				<h1 className='text-center text-[100%] font-medium animate-on-show'>
					{props.weather?.temp_f.toFixed(0)}
					<sup className='h-[100%] font-medium'>
						<sup>°F</sup>
					</sup>
				</h1>
			)}
		</>
	);
};

export default Temperature;
