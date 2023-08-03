import { useState, useEffect } from "react";

function useLocalStorageState(key, defaultVal) {
  // make piece of state, based off of value in localstorage if its not there were going to use the defaultVal
  const [state, setState] = useState(() => {
    let value;
    try {
      value = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (error) {
      value = defaultVal;
    }
    return value;
  });

  //  useEffect to update local storage when state changes

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state), [state]);
  });

  // if there is nothing in localStorage under the key, we are going to use defaultVal
  return [state, setState];
}

export default useLocalStorageState;
