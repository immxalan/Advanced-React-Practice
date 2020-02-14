import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() =>{
        const checkedValue = window.localStorage.getItem(key);
        return checkedValue ? JSON.parse(checkedValue) : initialValue;
    });

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value))
    };
    return [storedValue, setValue]
}