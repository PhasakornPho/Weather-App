import { IResponse } from "@/utils/handleResponse";

export interface IGetSearchCities extends IResponse {
	status: number | undefined;
	data?: ISearchCities;
}

export interface ISearchCities {
	cities: ICities[];
	meta: {
		currentPage: number;
		firstPage: number;
		lastPage: number;
		perPage: number;
		total: number;
	};
}

export interface ICities {
	code: string;
	continent: {
		code: string;
		latitude: string;
		longitude: string;
		name: string;
		nameEs: string;
		nameFr: string;
	};
	country: {
		code: string;
		latitude: string;
		longitude: string;
		name: string;
		nameEs: string;
		nameFr: string;
	};
	county: any;
	latitude: string;
	longitude: string;
	name: string;
	postcode: any;
	state: {
		code: string;
		latitude: string;
		longitude: string;
		name: string;
	};
}
