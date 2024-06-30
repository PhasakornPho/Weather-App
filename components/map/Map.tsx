"use client";

import React, { useEffect } from "react";
import { useTempUnit } from "../temp-unit-toggle/TempUnitProvider";
import { useLocationStore } from "@/store/locationStore";

type Props = {
	location?: { latitude: string; longitude: string };
};

const Map = ({ location }: Props) => {
	const { tempUnit } = useTempUnit();
	const currentPosition = useLocationStore((state) => state.currentPosition);
	const setCurrentPosition = useLocationStore((state) => state.setCurrentPosition);

	useEffect(() => {
		if (location?.latitude && location?.longitude) {
			console.log("setCurrentPosition");
			console.table(location);

			setCurrentPosition({
				timeStamp: Date.now(),
				data: {
					accuracy: currentPosition.data?.accuracy,
					altitude: currentPosition.data?.altitude,
					altitudeAccuracy: currentPosition.data?.altitudeAccuracy,
					heading: currentPosition.data?.heading,
					latitude: parseFloat(location.latitude),
					longitude: parseFloat(location.longitude),
					speed: currentPosition.data?.speed,
					select: false,
				},
				loading: false,
				error: null,
			});

			console.table(currentPosition.data);
		}
	}, []);

	return (
		<>
			<iframe
				title='Weather Map'
				src={`https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=°${tempUnit}&metricWind=km/h&zoom=6&overlay=temp&product=ecmwf&level=surface&lat=${
					currentPosition.data?.latitude?.toFixed(3) || 13.774
				}&lon=${currentPosition.data?.longitude?.toFixed(3) || 100.481}&detailLat=${
					currentPosition.data?.latitude?.toFixed(3) || 13.774
				}&detailLon=${
					currentPosition.data?.longitude?.toFixed(3) || 100.481
				}&marker=true&pressure=true&message=true `}
				className='rounded-3xl h-full w-full opacity-70'
				allowFullScreen
				loading='lazy'
			></iframe>
		</>
	);
};

export default Map;
