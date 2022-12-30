import { createSelector } from 'reselect';

const selectCategoryState = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryState],
  (categoriesState) => categoriesState.categories
)

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectIsShowLoading = createSelector(
  [selectCategoryState],
  (categoriesState) => categoriesState.loading
)
