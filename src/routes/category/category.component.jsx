import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';

import { useSelector } from 'react-redux';

import { selectCategoriesMap, selectIsShowLoading } from '../../store/categories/categories.selector';

import Spinner from '../../components/spinner/spinner.component';

import './category.scss';

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isShowLoading = useSelector(selectIsShowLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
    <h2 className='category-title'>{category.toUpperCase()}</h2>
    {
      isShowLoading ?
      (
      <Spinner />
      )
     :
     (
      <div className='category-container'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      )
    }
    </Fragment>
  );
};

export default Category;
