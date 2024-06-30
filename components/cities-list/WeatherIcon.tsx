"use client";

import React from "react";
import Image from "next/image";

import { weatherIconList } from "@/utils/weatherIconList";

type Props = {
	icon?: number;
	className?: string;
};

const WeatherIcon = (props: Props) => {
	return (
		<div className={`${props.className}`}>
			{weatherIconList.map((weather) => {
				return weather.code?.map(
					(icon, index) =>
						icon === props.icon && (
							<Image
								key={`${index}k${icon}`}
								src={weather.icon}
								alt='Weather Icon'
								priority={true}
							/>
						),
				);
			})}
		</div>
	);
};

export default WeatherIcon;
