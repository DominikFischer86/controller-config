import { atom } from "jotai";
import { Configs, initialConfig } from "../data/initialConfig";

export const storageKey = "controller-config";
export const configExistsInLocalStorage = Boolean(
    localStorage.getItem(storageKey)
);

const localStorageData: Configs = configExistsInLocalStorage
    ? JSON.parse(localStorage.getItem(storageKey) as string)
    : initialConfig;

export const initialConfigAtom = atom(localStorageData);
export const activeElement = atom(null);
