import React from "react";

//user component
import SvgWeather from "./SvgWeather";
import SvgAqi from "./SvgAqi";
import SvgCites from "./SvgCities";
import SvgMap from "./SvgMap";
import SvgContact from "./SvgContact";

type Props = {
	svgName: string;
	svgStyle?: string;
};

const SvgSelection = ({ svgName, svgStyle }: Props) => {
	return (
		<>
			{svgName === "Weather" && <SvgWeather className={svgStyle} />}
			{svgName === "AQI" && <SvgAqi className={svgStyle} />}
			{svgName === "Cities" && <SvgCites className={svgStyle} />}
			{svgName === "Map" && <SvgMap className={svgStyle} />}
			{svgName === "Contact" && <SvgContact className={svgStyle} />}
		</>
	);
};

export default SvgSelection;
