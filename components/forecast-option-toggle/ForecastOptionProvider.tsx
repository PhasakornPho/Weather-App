"use client";

import React, { useEffect, createContext, useContext, useState } from "react";
import dynamic from "next/dynamic";

type Props = {
    children?: React.ReactNode;
};

type ForecastOptionContextType = {
    forecastSelected: string | undefined;
    setForecastSelected: React.Dispatch<React.SetStateAction<string>>;
};

const isClient = typeof window !== "undefined";
const storedForecastSelected = isClient
    ? localStorage.getItem("ForecastOption") ?? undefined
    : undefined;

export const ForecastOptionContext = createContext<ForecastOptionContextType>({
    forecastSelected: storedForecastSelected,
    setForecastSelected: () => {},
});

const ForecastOptionProvider: React.FC<Props> = ({ children }) => {
    const [forecastSelected, setForecastSelected] = useState<string>("Hourly");

    useEffect(() => {
        const storedForecastSelected = localStorage.getItem("ForecastOption");
        if (storedForecastSelected) {
            setForecastSelected(storedForecastSelected);
        }
    }, []);

    useEffect(() => {
        if (forecastSelected) {
            localStorage.setItem("ForecastOption", forecastSelected);
        }
    }, [forecastSelected]);

    return (
        <ForecastOptionContext.Provider
            value={{ forecastSelected, setForecastSelected }}
        >
            {children}
        </ForecastOptionContext.Provider>
    );
};

// Dynamically import the provider for client-side only rendering
const DynamicForecastOptionProvider = dynamic(
    () => Promise.resolve(ForecastOptionProvider),
    {
        ssr: false,
    },
);

export const useForecastOption = () => {
    const context = useContext(ForecastOptionContext);
    if (!context) {
        throw new Error(
            "useForecastOption must be used within a ForecastOptionProvider",
        );
    }
    return context;
};

export { DynamicForecastOptionProvider as ForecastOptionProvider };
