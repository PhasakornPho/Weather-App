import React from "react";

//user component
import SvgAqiGod from "./SvgAqiGood";
import SvgAqiModerate from "./SvgAqiModerate";
import SvgAqiSensitive from "./SvgAqiSensitive";
import SvgAqiUnhealthy from "./SvgAqiUnhealthy";
import SvgAqiVaryUnhealthy from "./SvgAqiVaryUnhealthy";
import SvgAqiHazardous from "./SvgAqiHazardous";
import SvgAqiIndex from "./SvgAqiIndex";

type Props = {
    aqiIndex?: number;
    svgStyle?: string;
};

const SvgAqiSelection = ({ aqiIndex, svgStyle }: Props) => {
    if (aqiIndex === undefined) {
        return <SvgAqiIndex />;
    }
    if (aqiIndex <= 50) {
        return <SvgAqiGod style={svgStyle} />;
    } else if (aqiIndex > 50 && aqiIndex <= 100) {
        return <SvgAqiModerate style={svgStyle} />;
    } else if (aqiIndex > 100 && aqiIndex <= 150) {
        return <SvgAqiSensitive style={svgStyle} />;
    } else if (aqiIndex > 150 && aqiIndex <= 200) {
        return <SvgAqiUnhealthy style={svgStyle} />;
    } else if (aqiIndex > 200 && aqiIndex <= 300) {
        return <SvgAqiVaryUnhealthy style={svgStyle} />;
    } else if (aqiIndex > 300) {
        return <SvgAqiHazardous style={svgStyle} />;
    }
};

export default SvgAqiSelection;
