"use client";

import React, { useEffect } from "react";

// User Components
import WeatherLoading from "@/components/weather/WeatherLoading";
import { isBefore, subHours } from "date-fns";
import { TUseLocationStore, useLocationStore } from "@/store/locationStore";
import { callCurrentPositionsService } from "@/hook/CityDetail.hook";
import { redirect } from "next/navigation";

type Props = {};

const LocationPage = ({ params }: { params: { slug?: string[] } }) => {
	//use Location Store
	const setCurrentPosition = useLocationStore((state) => state.setCurrentPosition);

	//Render Current Positions
	useEffect(() => {
		console.log("Render Current Positions");
		const now = new Date();
		const pastDate = subHours(now, 5);

		// Get location store from local storage
		const localLocationStorage: TUseLocationStore =
			localStorage.getItem("location-store") !== null
				? JSON.parse(localStorage.getItem("location-store") as string).state
				: undefined;

		const latitude = parseFloat(params.slug?.[0] ?? "");
		const longitude = parseFloat(params.slug?.[1] ?? "");

		if (latitude && longitude) {
			setCurrentPosition({
				timeStamp: Date.now(),
				data: {
					accuracy: localLocationStorage.currentPosition.data?.accuracy,
					altitude: localLocationStorage.currentPosition.data?.altitude,
					altitudeAccuracy: localLocationStorage.currentPosition.data?.altitudeAccuracy,
					heading: localLocationStorage.currentPosition.data?.heading,
					latitude: latitude,
					longitude: longitude,
					speed: localLocationStorage.currentPosition.data?.speed,
					select: false,
				},
				loading: false,
				error: null,
			});
		}
		// If the current city is undefined. Calling Current City Service
		else if (localLocationStorage.currentPosition.data?.latitude === undefined) {
			// If the current position is defined. Calling Current Position Service
			callCurrentPositionsService(setCurrentPosition);
		} else {
			// If 1 hour ago the calling service. calling Current City Service
			isBefore(localLocationStorage.currentPosition.timeStamp, pastDate) &&
				callCurrentPositionsService(setCurrentPosition);
		}

		redirect(`/weather/city`);
	}, [params.slug, setCurrentPosition]);

	return <WeatherLoading />;
};

export default LocationPage;
