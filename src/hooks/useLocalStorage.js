import {useState, useEffect} from "react";

const useLocalStorage = (defaultValue, localStorageKey)=> {
    const [value, setValue] = useState(()=> {
        const localStorageValue = localStorage.getItem(localStorageKey);
        if(localStorageValue===null)
        return defaultValue;
        try {
            return JSON.parse(localStorageValue);
          } catch (err) {
            return defaultValue;
          }
    })


    useEffect(()=> {
        localStorage.setItem(localStorageKey,JSON.stringify(value));
    },[value])

    return [value, setValue]


}

export default useLocalStorage;
