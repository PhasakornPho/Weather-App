/** @format */
import { IWeatherIcon } from "@/interface/weatherIcon";

//User Image
import SunnyIcon from "@/assets/WeatherIcon/Sunny.png";
import MostlySunnyIcon from "@/assets/WeatherIcon/Mostly Sunny.png";
import PartlySunnyIcon from "@/assets/WeatherIcon/Partly Sunny.png";
import IntermittentCloudsIcon from "@/assets/WeatherIcon/Intermittent Clouds.png";
import HazySunshineIcon from "@/assets/WeatherIcon/Hazy Sunshine.png";
import MostlyCloudyIcon from "@/assets/WeatherIcon/Mostly Cloudy.png";
import CloudyIcon from "@/assets/WeatherIcon/Cloudy.png";
import Dreary_Overcast_Icon from "@/assets/WeatherIcon/Dreary (Overcast).png";
import FogIcon from "@/assets/WeatherIcon/Fog.png";
import ShowersIcon from "@/assets/WeatherIcon/Showers.png";
import MostlyCloudyW_ShowersIcon from "@/assets/WeatherIcon/Mostly Cloudy w_ Showers.png";
import PartlySunnyW_ShowersIcon from "@/assets/WeatherIcon/Partly Sunny w_ Showers.png";
import TStormsIcon from "@/assets/WeatherIcon/T-Storms.png";
import MostlyCloudyW_TStormsIcon from "@/assets/WeatherIcon/Mostly Cloudy w_ T-Storms.png";
import PartlySunnyW_TStormsIcon from "@/assets/WeatherIcon/Partly Sunny w_ T-Storms.png";
import RainIcon from "@/assets/WeatherIcon/Rain.png";
import FlurriesIcon from "@/assets/WeatherIcon/Flurries.png";
import MostlyCloudyW_FlurriesIcon from "@/assets/WeatherIcon/Mostly Cloudy w_ Flurries.png";
import PartlySunnyW_FlurriesIcon from "@/assets/WeatherIcon/Partly Sunny w_ Flurries.png";
import SnowIcon from "@/assets/WeatherIcon/Snow.png";
import MostlyCloudyW_SnowIcon from "@/assets/WeatherIcon/Mostly Cloudy w_ Snow.png";
import IceIcon from "@/assets/WeatherIcon/Ice.png";
import SleetIcon from "@/assets/WeatherIcon/Sleet.png";
import FreezingRainIcon from "@/assets/WeatherIcon/Freezing Rain.png";
import RainAndSnowIcon from "@/assets/WeatherIcon/Rain and Snow.png";
import HotIcon from "@/assets/WeatherIcon/Hot.png";
import ColdIcon from "@/assets/WeatherIcon/Cold.png";
import WindyIcon from "@/assets/WeatherIcon/Windy.png";
import ClearIcon from "@/assets/WeatherIcon/Clear.png";
import MostlyClearIcon from "@/assets/WeatherIcon/Mostly Clear.png";
import PartlyCloudyIcon from "@/assets/WeatherIcon/Partly Cloudy.png";
import MoonIntermittentCloudsIcon from "@/assets/WeatherIcon/Moon Intermittent Clouds.png";
import HazyMoonlightIcon from "@/assets/WeatherIcon/Hazy Moonlight.png";
import NightMostlyCloudyIcon from "@/assets/WeatherIcon/Night Mostly Cloudy.png";
import NightMostlyCloudyW_ShowersIcon from "@/assets/WeatherIcon/Night Mostly Cloudy w_ Showers.png";
import MoonMostlyCloudyW_ShowersIcon from "@/assets/WeatherIcon/Moon Mostly Cloudy w_ Showers.png";
import PartlyCloudyW_TStormsIcon from "@/assets/WeatherIcon/Partly Cloudy w_ T-Storms.png";
import NightMostlyCloudyW_TStormsIcon from "@/assets/WeatherIcon/Night Mostly Cloudy w_ T-Storms.png";
import NightMostlyCloudyW_FlurriesIcon from "@/assets/WeatherIcon/Night Mostly Cloudy w_ Flurries.png";
import NightMostlyCloudyW_SnowIcon from "@/assets/WeatherIcon/Night Mostly Cloudy w_ Snow.png";

export const weatherIconList: IWeatherIcon[] = [
	{
		id: 1,
		description: "Sunny",
		icon: SunnyIcon,
		code: [1000],
	},

	{
		id: 2,
		description: "Mostly Sunny",
		icon: MostlySunnyIcon,
	},

	{
		id: 3,
		description: "Partly Sunny",
		icon: PartlySunnyIcon,
	},

	{
		id: 4,
		description: "Intermittent Clouds",
		icon: IntermittentCloudsIcon,
	},

	{
		id: 5,
		description: "Hazy Sunshine",
		icon: HazySunshineIcon,
	},

	{
		id: 6,
		description: "Mostly Cloudy",
		icon: MostlyCloudyIcon,
	},

	{
		id: 7,
		description: "Cloudy",
		icon: CloudyIcon,
		code: [1006],
	},

	{
		id: 8,
		description: "Dreary (Overcast)",
		icon: Dreary_Overcast_Icon,
		code: [1009],
	},

	{
		id: 11,
		description: "Fog",
		icon: FogIcon,
		code: [1030, 1135],
	},

	{
		id: 12,
		description: "Showers",
		icon: ShowersIcon,
		code: [1150],
	},

	{
		id: 13,
		description: "Mostly Cloudy w/ Showers",
		icon: MostlyCloudyW_ShowersIcon,
		code: [1240],
	},

	{
		id: 14,
		description: "Partly Sunny w/ Showers",
		icon: PartlySunnyW_ShowersIcon,
		code: [1153, 1180],
	},

	{
		id: 15,
		description: "T-Storms",
		icon: TStormsIcon,
		code: [1087],
	},

	{
		id: 16,
		description: "Mostly Cloudy w/ T-Storms",
		icon: MostlyCloudyW_TStormsIcon,
	},

	{
		id: 17,
		description: "Partly Sunny w/ T-Storms",
		icon: PartlySunnyW_TStormsIcon,
	},

	{
		id: 18,
		description: "Rain",
		icon: RainIcon,
		code: [1063, 1183, 1192, 1195],
	},

	{
		id: 19,
		description: "Flurries",
		icon: FlurriesIcon,
		code: [1147],
	},

	{
		id: 20,
		description: "Mostly Cloudy w_ Flurries",
		icon: MostlyCloudyW_FlurriesIcon,
	},

	{
		id: 21,
		description: "Partly Sunny w/ Flurries",
		icon: PartlySunnyW_FlurriesIcon,
		code: [1252],
	},

	{
		id: 22,
		description: "Snow",
		icon: SnowIcon,
		code: [1066, 1114, 1213, 1279],
	},

	{
		id: 23,
		description: "Mostly Cloudy w/ Snow",
		icon: MostlyCloudyW_SnowIcon,
		code: [1210, 1216],
	},

	{
		id: 24,
		description: "Ice",
		icon: IceIcon,
		code: [1117, 1222, 1225, 1237],
	},

	{
		id: 25,
		description: "Sleet",
		icon: SleetIcon,
		code: [1069, 1204, 1207, 1249],
	},

	{
		id: 26,
		description: "Freezing Rain",
		icon: FreezingRainIcon,
		code: [1072, 1168, 1171, 1198],
	},

	{
		id: 29,
		description: "Rain and Snow",
		icon: RainAndSnowIcon,
		code: [1255, 1258, 1261, 1264],
	},

	{
		id: 30,
		description: "Hot",
		icon: HotIcon,
	},

	{
		id: 31,
		description: "Cold",
		icon: ColdIcon,
	},

	{
		id: 32,
		description: "Windy",
		icon: WindyIcon,
	},

	{
		id: 33,
		description: "Clear",
		icon: ClearIcon,
	},

	{
		id: 34,
		description: "Mostly Clear",
		icon: MostlyClearIcon,
		code: [1003],
	},

	{
		id: 35,
		description: "Partly Cloudy",
		icon: PartlyCloudyIcon,
	},

	{
		id: 36,
		description: "Intermittent Clouds",
		icon: MoonIntermittentCloudsIcon,
	},

	{
		id: 37,
		description: "Hazy Moonlight",
		icon: HazyMoonlightIcon,
	},

	{
		id: 38,
		description: "Mostly Cloudy",
		icon: NightMostlyCloudyIcon,
	},

	{
		id: 39,
		description: "Partly Cloudy w/ Showers",
		icon: NightMostlyCloudyW_ShowersIcon,
		code: [1201],
	},

	{
		id: 40,
		description: "Mostly Cloudy w/ Showers",
		icon: MoonMostlyCloudyW_ShowersIcon,
		code: [1186, 1189, 1243, 1246],
	},

	{
		id: 41,
		description: "Partly Cloudy w_ T-Storms",
		icon: PartlyCloudyW_TStormsIcon,
		code: [1273],
	},

	{
		id: 42,
		description: "Mostly Cloudy w/ T-Storms",
		icon: NightMostlyCloudyW_TStormsIcon,
		code: [1276],
	},

	{
		id: 43,
		description: "Mostly Cloudy w/ Flurries",
		icon: NightMostlyCloudyW_FlurriesIcon,
	},

	{
		id: 44,
		description: "Mostly Cloudy w/ Snow",
		icon: NightMostlyCloudyW_SnowIcon,
		code: [1219, 1279],
	},
];
