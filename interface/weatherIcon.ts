import { StaticImageData } from "next/image";

export interface IWeatherIcon {
	id: number;
	description: string;
	icon: StaticImageData;
	code?: number[];
}
