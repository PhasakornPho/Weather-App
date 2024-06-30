import { IResponse } from "@/utils/handleResponse";

export interface IGetGeoToCity extends IResponse {
    status: number | undefined;
    data?: IGeoToCity;
}

export interface GeolocationCoords {
    accuracy?: number;
    altitude?: number | null;
    altitudeAccuracy?: number | null;
    heading?: number | null;
    latitude?: number;
    longitude?: number;
    speed?: number | null;
    select?: boolean;
}

export interface IGeoToCity {
    latitude: number;
    lookupSource: string;
    longitude: number;
    localityLanguageRequested: string;
    continent: string;
    continentCode: string;
    countryName: string;
    countryCode: string;
    principalSubdivision: string;
    principalSubdivisionCode: string;
    city: string;
    locality: string;
    postcode: string;
    plusCode: string;
    fips: Fips;
    localityInfo: LocalityInfo;
}

export interface Fips {
    state: string;
    county: string;
    countySubdivision: string;
    place: string;
}

export interface LocalityInfo {
    administrative: Administrative[];
    informative: Informative[];
}

export interface Administrative {
    name: string;
    description: string;
    isoName?: string;
    order: number;
    adminLevel: number;
    isoCode?: string;
    wikidataId: string;
    geonameId: number;
}

export interface Informative {
    name: string;
    description: string;
    isoName?: string;
    order: number;
    isoCode?: string;
    wikidataId?: string;
    geonameId?: number;
}
