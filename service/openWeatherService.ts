import axios, { AxiosError, AxiosResponse } from "axios";

//constants values
import { handleResponse } from "@/utils/handleResponse";
import {
    OPEN_CURRENT_AIR_POLLUTION_ENDPOINT,
    OPEN_CURRENT_API_KEY,
} from "@/utils/constants";

import { IGetAirPollution } from "@/interface/airPollution";

// interface

export const openWeatherService = {
    getCurrentAirPollution: async (
        lat?: number,
        lon?: number,
    ): Promise<IGetAirPollution> => {
        try {
            const response = await axios.get(
                `${OPEN_CURRENT_AIR_POLLUTION_ENDPOINT}lat=${lat?.toFixed(
                    2,
                )}&lon=${lon?.toFixed(2)}&appid=${OPEN_CURRENT_API_KEY}`,
            );

            return handleResponse.success(response);
        } catch (error: any) {
            return handleResponse.error(error);
        }
    },
};
