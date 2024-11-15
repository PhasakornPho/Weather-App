"use client";

import React from "react";
import { Button } from "./ui/button";

import { positionService } from "@/service/positionService";

import { useLocationStore } from "@/store/locationStore";

type Props = {};

const Locate = (props: Props) => {
	const setCurrentPosition = useLocationStore((state) => state.setCurrentPosition);

	const onClickHandler = async () => {
		try {
			console.log("Locate Me!");

			const locateResponse = await positionService.getCurrentLocation();
			if (locateResponse.status === 200) {
				// locateResponse status is OK
				console.log("User's location:", locateResponse.data);
				setCurrentPosition({
					timeStamp: Date.now(),
					data: {
						accuracy: locateResponse.data?.accuracy,
						altitude: locateResponse.data?.altitude,
						altitudeAccuracy: locateResponse.data?.altitudeAccuracy,
						heading: locateResponse.data?.heading,
						latitude: locateResponse.data?.latitude,
						longitude: locateResponse.data?.longitude,
						speed: locateResponse.data?.speed,
						select: false,
					},
					loading: false,
					error: null,
				});
			} else {
				// locateResponse error
				setCurrentPosition({
					timeStamp: Date.now(),
					loading: false,
					error: locateResponse.error,
				});
			}
		} catch (error) {
			// system error
			setCurrentPosition({
				timeStamp: Date.now(),
				loading: false,
				error: error,
			});
		}
	};

	return (
		<div className='h-full w-full flex justify-center items-center'>
			<div className='group bg-[rgb(85,140,185)] border-[rgb(44,77,103)] hover:bg-[rgb(166,196,241)] dark:bg-[rgb(44,47,57)] dark:border-[rgb(35,35,50)] dark:hover:bg-[rgb(35,35,40)] w-full h-[70%] flex rounded-full'>
				<Button
					variant='outline'
					size='icon'
					onClick={onClickHandler}
					className='h-[100%] flex-1 aspect-square p-[1%] text-[120%] flex justify-center items-center gap-x-[3%]  animate-on-show bg-transparent border-none hover:bg-transparent'
				>
					<span className='text-[0.75em] font-[600] text-gray-100 group-hover:text-slate-700 dark:group-hover:text-gray-300 text-center'>
						Locate Me
					</span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 448 512'
						className='fill-gray-100 group-hover:fill-slate-700 dark:group-hover:fill-gray-300 aspect-square h-[55%]'
					>
						<path d='M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8S32.7 256 48 256h176v176c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z' />
					</svg>
				</Button>
			</div>
		</div>
	);
};

export default Locate;
