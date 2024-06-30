import { IResponse } from "@/utils/handleResponse";

export interface IGetPopularCities extends IResponse {
    status: number | undefined;
    data?: IPopularCities[];
}

export interface IPopularCities {
    rank: number;
    city: string;
    country: string;
    detailWeather?: DetailWeather;
}

export interface DetailWeather {
    Key: string;
    LocalizedName: string;
    EnglishName: string;
    Country: Country;
    TimeZone: TimeZone;
    GeoPosition: GeoPosition;
    LocalObservationDateTime: string;
    EpochTime: number;
    WeatherText: string;
    WeatherIcon: number;
    HasPrecipitation: boolean;
    PrecipitationType: any;
    IsDayTime: boolean;
    Temperature: Temperature;
    MobileLink: string;
    Link: string;
}

export interface Country {
    ID: string;
    LocalizedName: string;
    EnglishName: string;
}

export interface TimeZone {
    Code: string;
    Name: string;
    GmtOffset: number;
    IsDaylightSaving: boolean;
    NextOffsetChange: any;
}

export interface GeoPosition {
    Latitude: number;
    Longitude: number;
    Elevation: Elevation;
}

export interface Elevation {
    Metric: Metric;
    Imperial: Imperial;
}

export interface Metric {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface Imperial {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface Temperature {
    Metric: Metric2;
    Imperial: Imperial2;
}

export interface Metric2 {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface Imperial2 {
    Value: number;
    Unit: string;
    UnitType: number;
}
