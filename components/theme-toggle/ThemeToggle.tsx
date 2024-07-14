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
		<div className='h-full aspect-[1.2/1] flex justify-center items-center'>
			<div
				onClick={handleClick}
				className='bg-[rgb(166,196,241)] hover:bg-[rgba(166,196,241,0.80)] dark:bg-[rgb(50,50,50)] dark:hover:bg-[rgba(65,65,65,0.80)] w-full h-[70%] rounded-full cursor-pointer transition-all duration-500 justify-center items-start relative '
			>
				<div
					className={`absolute h-[80%] aspect-square rounded-full top-[50%] translate-y-[-50%] transition-all duration-500 bg-[rgb(85,140,185)] border-[rgb(44,77,103)] dark:bg-[rgb(30,30,30)] dark:border-[rgb(35,35,50)] left-[5%] dark:left-[46%] `}
					//   rotate-0 dark:rotate-[360deg] dark:left-[55%]
				>
					<Image
						src={Sun}
						alt='Sun theme icon toggle'
						className='absolute w-[80%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-55%] scale-[1] opacity-100 selection:transition-all duration-500 dark:rotate-180 dark:scale-[0.2] dark:opacity-0'
						//
					/>
					<Image
						src={Moon}
						alt='Moon theme icon toggle'
						className='absolute w-[80%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-55%] scale-[0.2] opacity-0 transition-all duration-500 dark:rotate-0 dark:scale-[0.8] dark:opacity-100'
						//
					/>
				</div>
			</div>{" "}
		</div>
	);
};

export default ThemeToggle;
