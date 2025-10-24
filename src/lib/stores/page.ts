import { writable } from "svelte/store";

export type Page = "about" | "projects" | "cv"

export const page = writable<Page>("about")

export function changePage(newPage: Page) { page.set(newPage) }
