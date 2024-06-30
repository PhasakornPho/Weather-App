"use Server";
import React, { Suspense, useState } from "react";

// import user components
import CitesList from "@/components/cities-list/CitiesList";
import SortCities from "@/components/cities-list/SortCities";

//import Loading page
import Loading from "@/components/cities-list/CitiesLoading";

type Props = {};

const CitesPage = async ({ params }: { params: { slug?: string[] } }) => {
	const sortOption = params.slug?.[0].replaceAll("%20", " ");
	const query = params.slug?.[1];

	return (
		<div className='h-[100%] w-[100%] flex flex-col gap-y-[2%] '>
			{/* Header */}
			<div className='h-[8%] w-[98%] flex justify-between items-center px-[2%] rounded-2xl'>
				<h1 className='font-medium text-lg'>{`${
					query ? `Showing cities for "${query}"` : "Showing cities"
				}`}</h1>

				{/* Sort By */}
				<div className='block h-[100%] w-[55%] '>
					<SortCities
						Query={query}
						SortOption={sortOption || "Name (A-Z)"}
					/>
				</div>
			</div>

			<Suspense fallback={<Loading />}>
				{/* Cities List */}
				<CitesList
					Query={query}
					SortOption={sortOption || "Name (A-Z)"}
				/>
			</Suspense>
		</div>
	);
};

export default CitesPage;
