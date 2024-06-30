import { Skeleton } from "@/components/ui/skeleton";

export default function WeatherLoading() {
	return (
		<div className='h-[100%] w-[100%] flex flex-col gap-y-[2%]'>
			<div className='h-[30%] w-[100%]'>
				<Skeleton className='h-[98%] w-[98%] rounded-xl' />
			</div>
			<div className='h-[30%] w-[100%]'>
				<Skeleton className='h-[98%] w-[98%] rounded-xl' />
			</div>
			<div className='h-[40%] w-[100%]'>
				<Skeleton className='h-[98%] w-[98%] rounded-xl' />
			</div>
		</div>
	);
}
