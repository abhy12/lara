import type { Category } from "./props";

export const categoryStoreKey = 'category-filter';

export function getStoredFilterCategoryValue(): null | Category {
   const item = localStorage.getItem(categoryStoreKey);
   if (item) return JSON.parse(item);
   return null;
}

export function storeCategoryFilterValue(category: Category) {
   localStorage.setItem(categoryStoreKey, JSON.stringify(category));
}

export function clearCategoryFilter() {
   localStorage.removeItem(categoryStoreKey);
}
