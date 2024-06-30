import React, { Suspense } from "react";

// User Components
import { ForecastOptionProvider } from "@/components/forecast-option-toggle/ForecastOptionProvider";
import CityDetail from "@/components/weather/CityDetail";
import Forecast from "@/components/weather/Forecast";
import AirConditions from "@/components/weather/AirConditions";
import WeatherLoading from "@/components/weather/WeatherLoading";
const CityPage = ({ params }: { params: { slug?: string[] } }) => {
	return (
		<Suspense fallback={<WeatherLoading />}>
			<div className='h-[100%] w-[100%] flex flex-col gap-y-[2%]'>
				<div className='h-[30%] w-[100%]'>
					<CityDetail />
				</div>
				<div className='h-[30%] w-[100%]'>
					<ForecastOptionProvider>
						<Forecast />
					</ForecastOptionProvider>
				</div>
				<div className='h-[40%] w-[100%]'>
					<AirConditions />
				</div>
			</div>
		</Suspense>
	);
};

export default CityPage;
