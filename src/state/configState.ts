import { atom } from "jotai";
import { Configs, initialConfig } from "../data/initialConfig";

export const storageKey = "controller-config";
export const configExistsInLocalStorage = Boolean(
    localStorage.getItem(storageKey)
);

const localStorageData: Configs = configExistsInLocalStorage
    ? JSON.parse(localStorage.getItem(storageKey) as string)
    : initialConfig;

const mendedData = { ...initialConfig, ...localStorageData };
export const initialConfigAtom = atom(mendedData);
export const activeElement = atom(null);
