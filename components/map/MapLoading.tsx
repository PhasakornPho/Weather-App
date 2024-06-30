import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {};

const MapLoading = (props: Props) => {
	return (
		<div className='rounded-3xl h-full  aspect-square'>
			<Skeleton className='size-full rounded-3xl' />
		</div>
	);
};

export default MapLoading;
