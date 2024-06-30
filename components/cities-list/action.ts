"use server";

import { redirect } from "next/navigation";

export type FormState = {
	message: FormDataEntryValue | null;
};

export async function sortAction(sort: string, query?: string): Promise<void> {
	if (query) {
		redirect(`/cities/${sort}/${query}`);
	} else {
		redirect(`/cities/${sort}`);
	}
}
