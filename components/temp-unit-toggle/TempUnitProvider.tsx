"use client";

import React, { useEffect, createContext, useContext, useState } from "react";
import dynamic from "next/dynamic";

type Props = {
    children?: React.ReactNode;
};

type TempUnitContextType = {
    tempUnit: string | undefined;
    setTempUnit: React.Dispatch<React.SetStateAction<string>>;
};

const isClient = typeof window !== "undefined";
const storedTempOption = isClient
    ? localStorage.getItem("TempOption") ?? undefined
    : undefined;

export const TempUnitContext = createContext<TempUnitContextType>({
    tempUnit: storedTempOption,
    setTempUnit: () => {},
});

const TempUnitProvider = ({ children }: Props) => {
    const [tempUnit, setTempUnit] = useState<string>("C");

    useEffect(() => {
        const storedTempOption = localStorage.getItem("TempOption");

        if (storedTempOption) {
            setTempUnit(storedTempOption);
        }
    }, []);

    useEffect(() => {
        if (tempUnit) {
            localStorage.setItem("TempOption", tempUnit);
        }
    }, [tempUnit]);

    return (
        <TempUnitContext.Provider value={{ tempUnit, setTempUnit }}>
            {children}
        </TempUnitContext.Provider>
    );
};

// Dynamically import the provider for client-side only rendering
const DynamicTempUnitProvider = dynamic(
    () => Promise.resolve(TempUnitProvider),
    {
        ssr: false,
    },
);

export const useTempUnit = () => {
    const context = useContext(TempUnitContext);
    if (!context) {
        throw new Error("useTempUnit must be used within a TempUnitProvider");
    }
    return context;
};

export { DynamicTempUnitProvider as TempUnitProvider };
