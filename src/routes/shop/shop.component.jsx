import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setCategories} from '../../store/categories/categories.action';
import { fetchCategoriesStartAsync } from '../../store/categories/categories.action';

import './shop.scss';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchCategoriesStartAsync());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
