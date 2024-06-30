"use client";

import React from "react";

// user component
import ForecastOptionToggle from "@/components/forecast-option-toggle/ForecastOptionToggle";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";

//user Interface

//user mockup data
import { dailyForecasts } from "@/utils/weatherData";
import { useForecastOption } from "../forecast-option-toggle/ForecastOptionProvider";

type Props = {};

const Forecast = (props: Props) => {
    const { forecastSelected } = useForecastOption();

    return (
        <div className='bg-[var(--bg-secondary)] h-[100%] rounded-[1.2vw] p-[2%] flex flex-col justify-around  gap-y-[10%]'>
            {/* Forecast header */}
            <div className='flex justify-between items-center h-[20%] w-[100%]'>
                <h1 className='px-[1%] font-medium text-lg'>Forecast</h1>
                <ForecastOptionToggle />
            </div>

            <div className='flex h-[70%] w-[100%] justify-center items-center'>
                {forecastSelected === "Hourly" && <HourlyForecast />}
                {forecastSelected === "Day" && <DailyForecast />}
            </div>
        </div>
    );
};

export default Forecast;
