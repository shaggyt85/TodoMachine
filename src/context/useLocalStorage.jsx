import { useState, useEffect, useCallback } from "react";

function useLocalStorage(itemName, initialValue) {
  
    const [item, setItem] = useState(() =>
    JSON.parse(localStorage.getItem(itemName)) || initialValue
    )
  
    const saveItem = useCallback((newItem) => {
      setItem(newItem);
    }, []);
    
    useEffect(() => {
      localStorage.setItem(itemName, JSON.stringify(item));
    }, [item, itemName]);
    return [item, saveItem]
  }

export default useLocalStorage;