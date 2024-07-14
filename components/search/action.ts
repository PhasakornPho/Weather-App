"use server";

import { redirect } from "next/navigation";

export type FormState = {
	message: FormDataEntryValue | null;
};

const gotoPage = (param: string[], query: string, currentPath: string) => {
	let path = "";
	switch (param[1]) {
		case "cities":
			if (param[2] !== undefined) {
				path = `/${param[1]}/${param[2]}/${query}`;
			}
			break;

		case "weather":
			path = `/cities/name%20(a-z)/${query}`;
			break;

		case "map":
			path = `/cities/name%20(a-z)/${query}`;
			break;

		default:
			path = currentPath;
			break;
	}

	redirect(path);
};

export async function searchAction(query: string, currentPath: string) {
	console.log("query: " + query);
	console.log("currentPath: " + currentPath);

	const param = currentPath.split("/");

	gotoPage(param, query, currentPath);
}

export async function ChooseSuggestion(path: string) {
	console.log("Choose Suggestion:", path);
}
