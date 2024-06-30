import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
	return (
		<div className='flex-1 w-[100%] h-[70%]'>
			<div className='flex-1 h-[100%] w-[100%] flex flex-col gap-y-[3%] overflow-x-scroll no-scrollbar rounded-lg'>
				{Array.from({ length: 5 }).map((item, idex) => {
					return (
						<div
							key={`k${idex}`}
							className='w-[98%] min-h-[20%] h-[20%] p-[2%] flex justify-between gap-x-[0.7%] items-center cursor-pointer bg-[rgb(15,20,40)] rounded-xl animate-pulse'
							// onClick={() => onClickHandler(item?.GeoPosition)}
						>
							{/* City Name */}

							<div className='w-[18%] h-[80%] flex items-center justify-center'>
								<Skeleton className='w-[60%] h-[20%]' />
							</div>

							{/* Weather Icon */}
							<div className='w-[25%] h-[80%] flex justify-around items-center gap-x-[5%]'>
								<Skeleton className='h-[85%] aspect-square flex justify-center items-center' />

								<Skeleton className='flex-1 h-[20%]' />
							</div>

							{/* Feels like */}
							<div className='w-[8%] h-[90%] flex flex-col justify-around items-center'>
								<Skeleton className='w-[90%] h-[95%] flex flex-col justify-around items-center' />
							</div>

							{/* Wind speed  */}
							<div className='w-[8%] h-[90%] flex flex-col justify-around items-center'>
								<Skeleton className='w-[90%] h-[95%] flex flex-col justify-around items-center' />
							</div>

							{/* Precipitation */}
							<div className='w-[8%] h-[90%] flex flex-col justify-around items-center'>
								<Skeleton className='w-[90%] h-[95%] flex flex-col justify-around items-center' />
							</div>

							{/* Humidity  */}
							<div className='w-[8%] h-[90%] flex flex-col justify-around items-center'>
								<Skeleton className='w-[90%] h-[95%] flex flex-col justify-around items-center' />
							</div>

							{/* UV Index  */}
							<div className='w-[8%] h-[90%] flex flex-col justify-around items-center'>
								<Skeleton className='w-[90%] h-[95%] flex flex-col justify-around items-center' />
							</div>

							{/* air quality */}
							<div className='w-[8%] h-[90%] flex flex-col justify-around items-center'>
								<Skeleton className='w-[90%] h-[95%] flex flex-col justify-around items-center' />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
