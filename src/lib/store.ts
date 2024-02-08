import { writable } from "svelte/store";

type Store = {
    [key: string]: any;
};


export const data_store = writable<Store>({
});

export const is_all_selected = writable<boolean | null>(null);