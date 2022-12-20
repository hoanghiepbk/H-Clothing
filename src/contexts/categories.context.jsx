import { createContext, useState , useEffect } from 'react';
// import SHOP_DATA from '../shop-data.js';
// import {addCollectionAndDocuments} from '../utils/firebase/firebase.utils';
import {getCategoriesAndDocuments} from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext(
  {
    categoriesMap: {},
  }
);

export const CategoriesProvider = ({children}) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  // useEffect(()=> {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // },[]);

  useEffect(()=> {
    const func = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoriesMap);
    }
    func();
  },[]);

  const value = {categoriesMap}
  return(
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
};
