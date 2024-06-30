"use client";

import React from "react";

import { motion } from "framer-motion";

import { useForecastOption } from "./ForecastOptionProvider";

type Props = { layoutId?: string };
const forecastOption: string[] = ["Hourly", "Day"];

const ForecastOptionToggle = ({ layoutId }: Props) => {
	const { forecastSelected, setForecastSelected } = useForecastOption();

	if (layoutId === undefined) {
		layoutId = "layoutForecast";
	}

	return (
		<div className='relative h-[100%] min-h-[3.8vw] w-[20%] flex justify-center items-center'>
			<div className='relative bg-[rgba(51,65,91,0.6)] flex rounded-[0.3vw] h-[45%] w-[100%] p-[2%]'>
				{forecastOption.map((item, index) => {
					return (
						<div
							key={index}
							className='h-[100%] w-[100%]'
						>
							{forecastSelected === item ? (
								<motion.div
									transition={{
										type: "spring",
										bounce: 0.25,
										duration: 0.8,
									}}
									layoutId={layoutId}
									className={`selection bg-[rgb(31,40,55)] h-[100%] w-[100%] rounded-[0.2vw]`}
								></motion.div>
							) : (
								<div
									className={`bg-[rgba(51,65,91,0.6)] h-[100%] w-[100%] rounded-[0.2vw]`}
								></div>
							)}
						</div>
					);
				})}
			</div>

			<div className='flex justify-center items-center absolute top-[50%] translate-y-[-50%] rounded-[8px] text-center h-[60%] w-[100%]'>
				<div
					className='h-[90%] w-[100%] cursor-pointer rounded-[8px] flex justify-center items-center'
					onClick={() => setForecastSelected("Hourly")}
				>
					<h1 className='block text-[80%] text-center'>Hourly</h1>
				</div>
				<div
					className='h-[90%] w-[100%] cursor-pointer rounded-[8px] flex justify-center items-center'
					onClick={() => setForecastSelected("Day")}
				>
					<h1 className='block text-[80%] text-center'>Day</h1>
				</div>
			</div>
		</div>
	);
};

export default ForecastOptionToggle;
