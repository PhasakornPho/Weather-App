"use client";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

import Image from "next/image";

//Image
import Sun from "@/public/theme/Sun.png";
import Moon from "@/public/theme/Moon.png";

type Props = {};

const ThemeToggle = (props: Props) => {
    const { theme, setTheme } = useTheme();

    const handleClick = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <div className=''>
            <Button
                variant='outline'
                size='icon'
                onClick={handleClick}
                className='max-h-[100%] flex-1 aspect-square rounded-[30%] bg-[rgb(85,140,185)] border-[rgb(44,77,103)] hover:bg-[rgb(44,77,103)] dark:bg-[rgb(44,47,57)] dark:border-[rgb(35,35,50)] dark:hover:bg-[rgb(35,35,40)] '
            >
                <div className='h-[90%] aspect-square flex flex-col justify-center items-center relative '>
                    <Image
                        src={Sun}
                        alt='Sun theme icon toggle'
                        className='h-[40%] w-[80%] scale-100 transition-all duration-300 dark:rotate-180 dark:scale-0 '
                    />
                    <Image
                        src={Moon}
                        alt='Moon theme icon toggle'
                        className='absolute h-[60%] w-[60%] rotate-180 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 '
                    />
                </div>
            </Button>
        </div>
    );
};

export default ThemeToggle;
