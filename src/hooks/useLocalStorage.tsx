import { useState } from "react";

const useLocalStorage = (key: string, initialValue: any) => {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialValue;
    });

    const setLocalStorageValue = (newValue: any) => {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    };

    const getLocalStorageValue = () => localStorage.getItem(key);

    const removeLocalStorageValue = () => {
        setValue(initialValue);
        localStorage.removeItem(key);
    };

    return [
        value,
        setLocalStorageValue,
        removeLocalStorageValue,
        getLocalStorageValue,
    ];
};

export default useLocalStorage;
