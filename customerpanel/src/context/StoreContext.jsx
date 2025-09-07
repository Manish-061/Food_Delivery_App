import { createContext, useEffect, useState } from "react";
import { fetchFoodList } from "../service/foodService";


// eslint-disable-next-line react-refresh/only-export-components
export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {

  const [foodList, setFoodList] = useState([]);

  const contextValue = {
    foodList
  };

  useEffect(() => {
    async function loadData(){
      const data = await fetchFoodList();
      setFoodList(data);
      console.log(data);
    }
    loadData();
  }, [])

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};