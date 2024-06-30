"use client";
import React, { useState } from "react";

//const
import { sortKey } from "@/utils/constants";
import { sortAction } from "./action";
import { usePathname } from "next/navigation";

type Props = {
	SortOption: string;
	Query?: string;
};

const SortCities = ({ SortOption, Query }: Props) => {
	const currentPath = usePathname();
	const [sortOption, setSortOption] = useState<string>(SortOption);

	console.log("sort option:", sortOption);

	const sortHandlerChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSortOption((prev) => (prev = event.target.value));

		sortAction(event.target.value, Query);
	};

	return (
		<form className='h-full w-full flex items-center justify-end gap-x-[10px]'>
			<label
				htmlFor='sort'
				className='capitalize font-medium text-sm text-gray-200 hover:text-gray-100 cursor-pointer w-fit'
			>
				Sort By
			</label>
			<select
				name='sort'
				id='sort'
				className='h-fit w-fit bg-gray-700 border border-gray-600 placeholder-gray-400 text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 p-[1%_2%] capitalize'
				onChange={sortHandlerChange}
				value={SortOption}
			>
				{sortKey.map((sort, index) => {
					return (
						<option
							className='capitalized'
							key={`sort-key-${index}`}
							value={sort}
						>
							{sort}
						</option>
					);
				})}
			</select>
		</form>
	);
};

export default SortCities;
