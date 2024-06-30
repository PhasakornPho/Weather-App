import { IResponse } from "@/utils/handleResponse";

export interface IGetGeolocationSearch extends IResponse {
    status: number | undefined;
    data?: IGeolocationSearch;
}

export interface IGetCityNameSearch extends IResponse {
    status: number | undefined;
    data?: IGeolocationSearch[];
}

export type IGeolocationSearch = {
    Version: number;
    Key: string;
    Type: string;
    Rank: number;
    LocalizedName: string;
    EnglishName: string;
    PrimaryPostalCode: string;
    Region: {
        ID: string;
        LocalizedName: string;
        EnglishName: string;
    };
    Country: {
        ID: string;
        LocalizedName: string;
        EnglishName: string;
    };
    AdministrativeArea: {
        ID: string;
        LocalizedName: string;
        EnglishName: string;
        Level: number;
        LocalizedType: string;
        EnglishType: string;
        CountryID: string;
    };
    TimeZone: {
        Code: string;
        Name: string;
        GmtOffset: number;
        IsDaylightSaving: boolean;
        NextOffsetChange: any;
    };
    GeoPosition: {
        Latitude: number;
        Longitude: number;
        Elevation: {
            Metric: {
                Value: number;
                Unit: string;
                UnitType: number;
            };
            Imperial: {
                Value: number;
                Unit: string;
                UnitType: number;
            };
        };
    };
    IsAlias: boolean;
    SupplementalAdminAreas: Array<any>;
    DataSets: Array<string>;
    Details: {
        Key: string;
        StationCode: string;
        StationGmtOffset: number;
        BandMap: string;
        Climo: string;
        LocalRadar: string;
        MediaRegion: any;
        Metar: string;
        NXMetro: string;
        NXState: string;
        Population: number;
        PrimaryWarningCountyCode: string;
        PrimaryWarningZoneCode: string;
        Satellite: string;
        Synoptic: string;
        MarineStation: string;
        MarineStationGMTOffset: any;
        VideoCode: string;
        LocationStem: string;
        PartnerID: any;
        Sources: Array<{
            DataType: string;
            Source: string;
            SourceId: number;
            PartnerSourceUrl?: string;
        }>;
        CanonicalPostalCode: string;
        CanonicalLocationKey: string;
    };
};
