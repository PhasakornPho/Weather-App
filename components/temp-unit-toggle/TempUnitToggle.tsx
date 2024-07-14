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
		<div className='h-full aspect-[1.2/1] flex justify-center items-center '>
			<div
				onClick={onClickHandler}
				className='bg-[rgb(166,196,241)] hover:bg-[rgba(166,196,241,0.80)] dark:bg-[rgb(50,50,50)] dark:hover:bg-[rgba(65,65,65,0.80)] w-full h-[70%] rounded-lg cursor-pointer transition-all duration-500 flex justify-center items-center relative '
			>
				<div
					className={`absolute h-[80%] aspect-square rounded-lg top-[50%] translate-y-[-50%] transition-all duration-500 bg-[rgb(85,140,185)] border-[rgb(44,77,103)] dark:bg-[rgb(30,30,30)] dark:border-[rgb(35,35,50)] ${
						tempUnit === "C" ? "left-[5%]" : "left-[46%]"
					}`}
				></div>
				<div
					className={`absolute top-[50%]  translate-y-[-55%] ${
						tempUnit === "C" ? "left-[5%] opacity-100" : "left-[46%] opacity-0"
					} z-10 h-[80%] aspect-square flex justify-center items-center text-sm transition-all duration-700 `}
				>
					°C
				</div>

				<div
					className={`absolute top-[50%] translate-y-[-55%] ${
						tempUnit === "C" ? "left-[5%] opacity-0" : "left-[46%] opacity-100"
					} z-10 h-[80%] aspect-square flex justify-center items-center text-sm transition-all duration-700 `}
				>
					°F
				</div>
				{/* absolute w-[80%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-55%] scale-[1] opacity-100 selection:transition-all duration-500 dark:rotate-180 dark:scale-[0.2] dark:opacity-0 */}
			</div>{" "}
		</div>
	);
};

export default TempUnitToggle;
