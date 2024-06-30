export const convertToFahrenheit = (Value: number | undefined): string | undefined => {
	if (Value === undefined) {
		return undefined;
	}

	return (Value * (9 / 5) + 32).toFixed(0);
};

export const setMainPath = (path: string) => {
	const mainPath = path.split("/")[1];

	switch (mainPath) {
		case "weather":
			return "/weather/city/location/";
		case "cities":
			return "/weather/city/location/";
		case "map":
			return "/map/";
		default:
			return "/weather/city/location/";
	}
};
