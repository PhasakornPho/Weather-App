export const runtime = "edge";

import React, { Suspense } from "react";

import Map from "@/components/map/Map";
//import Loading
import MapLoading from "@/components/map/MapLoading";

type Props = { params: { slug?: string[] } };

const MapPage = async ({ params }: { params: { slug?: string[] } }) => {
	const location = {} as { latitude: string; longitude: string };
	if (params.slug?.[0] && params.slug?.[1]) {
		location.latitude = params.slug[0];
		location.longitude = params.slug[1];
	}

	return (
		<Suspense fallback={<MapLoading />}>
			<div className='rounded-3xl h-full aspect-square'>
				<Map location={location} />
			</div>
		</Suspense>
	);
};

export default MapPage;
