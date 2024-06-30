import { IResponse } from "@/utils/handleResponse";

export interface IGetDailyForecasts extends IResponse {
    status: number | undefined;
    data?: IDailyForecastsReasons;
}

export interface IDailyForecastsReasons {
    Headline: Headline;
    DailyForecasts: DailyForecast[];
}

export interface Headline {
    EffectiveDate: string;
    EffectiveEpochDate: number;
    Severity: number;
    Text: string;
    Category: string;
    EndDate: string;
    EndEpochDate: number;
    MobileLink: string;
    Link: string;
}

export interface DailyForecast {
    Date: string;
    EpochDate: number;
    Sun: Sun;
    Moon: Moon;
    Temperature: Temperature;
    RealFeelTemperature: RealFeelTemperature;
    RealFeelTemperatureShade: RealFeelTemperatureShade;
    HoursOfSun: number;
    DegreeDaySummary: DegreeDaySummary;
    AirAndPollen: AirAndPollen[];
    Day: Day;
    Night: Night;
    Sources: string[];
    MobileLink: string;
    Link: string;
}

export interface Sun {
    Rise: string;
    EpochRise: number;
    Set: string;
    EpochSet: number;
}

export interface Moon {
    Rise?: string | null;
    EpochRise?: number | null;
    Set: string;
    EpochSet: number;
    Phase: string;
    Age: number;
}

export interface Temperature {
    Minimum: Minimum;
    Maximum: Maximum;
}

export interface Minimum {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface Maximum {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface RealFeelTemperature {
    Minimum: Minimum2;
    Maximum: Maximum2;
}

export interface Minimum2 {
    Value: number;
    Unit: string;
    UnitType: number;
    Phrase: string;
}

export interface Maximum2 {
    Value: number;
    Unit: string;
    UnitType: number;
    Phrase: string;
}

export interface RealFeelTemperatureShade {
    Minimum: Minimum3;
    Maximum: Maximum3;
}

export interface Minimum3 {
    Value: number;
    Unit: string;
    UnitType: number;
    Phrase: string;
}

export interface Maximum3 {
    Value: number;
    Unit: string;
    UnitType: number;
    Phrase: string;
}

export interface DegreeDaySummary {
    Heating: Heating;
    Cooling: Cooling;
}

export interface Heating {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface Cooling {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface AirAndPollen {
    Name: string;
    Value: number;
    Category: string;
    CategoryValue: number;
    Type?: string;
}

export interface Day {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
    PrecipitationType: string;
    PrecipitationIntensity: string;
    ShortPhrase: string;
    LongPhrase: string;
    PrecipitationProbability: number;
    ThunderstormProbability: number;
    RainProbability: number;
    SnowProbability: number;
    IceProbability: number;
    Wind: Wind;
    WindGust: WindGust;
    TotalLiquid: TotalLiquid;
    Rain: Rain;
    Snow: Snow;
    Ice: Ice;
    HoursOfPrecipitation: number;
    HoursOfRain: number;
    HoursOfSnow: number;
    HoursOfIce: number;
    CloudCover: number;
    Evapotranspiration: Evapotranspiration;
    SolarIrradiance: SolarIrradiance;
    RelativeHumidity: RelativeHumidity;
    WetBulbTemperature: WetBulbTemperature;
    WetBulbGlobeTemperature: WetBulbGlobeTemperature;
}

export interface Wind {
    Speed: Speed;
    Direction: Direction;
}

export interface Speed {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface Direction {
    Degrees: number;
    Localized: string;
    English: string;
}

export interface WindGust {
    Speed: Speed2;
    Direction: Direction2;
}

export interface Speed2 {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface Direction2 {
    Degrees: number;
    Localized: string;
    English: string;
}

export interface TotalLiquid {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface Rain {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface Snow {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface Ice {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface Evapotranspiration {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface SolarIrradiance {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface RelativeHumidity {
    Minimum: number;
    Maximum: number;
    Average: number;
}

export interface WetBulbTemperature {
    Minimum: Minimum4;
    Maximum: Maximum4;
    Average: Average;
}

export interface Minimum4 {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface Maximum4 {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface Average {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface WetBulbGlobeTemperature {
    Minimum: Minimum5;
    Maximum: Maximum5;
    Average: Average2;
}

export interface Minimum5 {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface Maximum5 {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface Average2 {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface Night {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
    PrecipitationType?: string;
    PrecipitationIntensity?: string;
    ShortPhrase: string;
    LongPhrase: string;
    PrecipitationProbability: number;
    ThunderstormProbability: number;
    RainProbability: number;
    SnowProbability: number;
    IceProbability: number;
    Wind: Wind2;
    WindGust: WindGust2;
    TotalLiquid: TotalLiquid2;
    Rain: Rain2;
    Snow: Snow2;
    Ice: Ice2;
    HoursOfPrecipitation: number;
    HoursOfRain: number;
    HoursOfSnow: number;
    HoursOfIce: number;
    CloudCover: number;
    Evapotranspiration: Evapotranspiration2;
    SolarIrradiance: SolarIrradiance2;
    RelativeHumidity: RelativeHumidity2;
    WetBulbTemperature: WetBulbTemperature2;
    WetBulbGlobeTemperature: WetBulbGlobeTemperature2;
}

export interface Wind2 {
    Speed: Speed3;
    Direction: Direction3;
}

export interface Speed3 {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface Direction3 {
    Degrees: number;
    Localized: string;
    English: string;
}

export interface WindGust2 {
    Speed: Speed4;
    Direction: Direction4;
}

export interface Speed4 {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface Direction4 {
    Degrees: number;
    Localized: string;
    English: string;
}

export interface TotalLiquid2 {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface Rain2 {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface Snow2 {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface Ice2 {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface Evapotranspiration2 {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface SolarIrradiance2 {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface RelativeHumidity2 {
    Minimum: number;
    Maximum: number;
    Average: number;
}

export interface WetBulbTemperature2 {
    Minimum: Minimum6;
    Maximum: Maximum6;
    Average: Average3;
}

export interface Minimum6 {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface Maximum6 {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface Average3 {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface WetBulbGlobeTemperature2 {
    Minimum: Minimum7;
    Maximum: Maximum7;
    Average: Average4;
}

export interface Minimum7 {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface Maximum7 {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface Average4 {
    Value: number;
    Unit: string;
    UnitType: number;
}
