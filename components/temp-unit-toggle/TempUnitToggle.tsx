"use client";
import { Button } from "../ui/button";

import { useTempUnit } from "./TempUnitProvider";

type Props = {};

const TempUnitToggle = (props: Props) => {
    const { tempUnit, setTempUnit } = useTempUnit();

    const onClickHandler = () => {
        setTempUnit((prev) => (prev === "C" ? "F" : "C"));
    };
    return (
        <div className='bg-[rgb(85,140,185)] border-[rgb(44,77,103)] hover:bg-[rgb(44,77,103)] dark:bg-[rgb(44,47,57)] dark:border-[rgb(35,35,50)] dark:hover:bg-[rgb(35,35,40)] w-fit h-fit flex rounded-[30%]'>
            {tempUnit === "C" && (
                <Button
                    variant='outline'
                    size='icon'
                    onClick={onClickHandler}
                    className='h-[100%] flex-1 aspect-square rounded-[30%] p-[1%] text-[120%] flex justify-center items-center animate-on-show bg-transparent border-none hover:bg-transparent'
                >
                    °C
                </Button>
            )}
            {tempUnit === "F" && (
                <Button
                    variant='outline'
                    size='icon'
                    onClick={onClickHandler}
                    className='h-[100%] flex-1 aspect-square rounded-[30%] p-[1%] text-[120%] flex justify-center items-center animate-on-show bg-transparent border-none hover:bg-transparent'
                >
                    °F
                </Button>
            )}
        </div>
    );
};

export default TempUnitToggle;
