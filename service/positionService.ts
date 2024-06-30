"use client";

import { IGetGeoToCity } from "@/interface/geoToCity";
import { GEO_TO_CITY_ENDPOINT } from "@/utils/constants";
import { handleResponse } from "@/utils/handleResponse";
import axios from "axios";

export type IGetGeolocationPosition = {
    status: number;
    data?: GeolocationCoordinates;
    error?: string;
};

export const positionService = {
    getCurrentLocation: async (): Promise<IGetGeolocationPosition> => {
        const options = {
            enableHighAccuracy: true,
        };

        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position: GeolocationPosition) =>
                        resolve({
                            status: 200,
                            data: position.coords,
                        }),
                    (error: GeolocationPositionError) => {
                        console.log("error: " + error.message);

                        reject({
                            status: 400,
                            error: error.message,
                        });
                    },
                    options,
                );
            } else {
                reject(
                    reject({
                        status: 400,
                        error: "Geolocation is not supported by this browser.",
                    }),
                );
            }
        });
    },
    watchPosition: (): Promise<IGetGeolocationPosition> => {
        const options: PositionOptions = {
            enableHighAccuracy: true,
        };

        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                const watchId = navigator.geolocation.watchPosition(
                    (position: GeolocationPosition) => {
                        resolve({
                            status: 200,
                            data: position.coords,
                        });
                    },
                    (error: GeolocationPositionError) => {
                        console.log("error: " + error.message);
                        reject({
                            status: 400,
                            error: error.message,
                        });
                    },
                    options,
                );

                return {
                    status: 200,
                    data: {
                        watchId,
                    },
                };
            } else {
                reject({
                    status: 400,
                    error: "Geolocation is not supported by this browser.",
                });
            }
        });
    },

    clearWatch: (watchId: number) => {
        navigator.geolocation.clearWatch(watchId);
    },

    getCityNameByGeolocation: async (
        latitude?: number,
        longitude?: number,
    ): Promise<IGetGeoToCity> => {
        // Usage with async/await
        try {
            const response = await axios.get(
                GEO_TO_CITY_ENDPOINT +
                    `?latitude=${latitude || 13.756}&longitude=${
                        longitude || 100.502
                    }&localityLanguage=en`,
            );
            return handleResponse.success(response);
        } catch (error: any) {
            return handleResponse.error(error);
        }
    },
};
