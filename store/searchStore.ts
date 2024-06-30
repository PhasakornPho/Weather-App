// store/searchStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

import { IPopularCities } from "@/interface/popularCities";
import { ITopCitesWeatherResponse } from "@/interface/topCitesWeather";

type SearchState = {
	query: string;
	suggestions?: ITopCitesWeatherResponse[];
	focus?: boolean;
	setQuery: (query: string) => void;
	setSuggestions: (suggestions?: ITopCitesWeatherResponse[]) => void;
	setFocus: (focus?: boolean) => void;
};

export const searchStore = persist<SearchState>(
	(set) => ({
		query: "",
		suggestions: [],
		focus: false,
		setQuery: (query) => set({ query }),
		setSuggestions: (suggestions) => set({ suggestions }),
		setFocus: (focus) => set({ focus }),
	}),
	{
		name: "search-storage",
	},
);

export const useSearchStore = create(searchStore);
