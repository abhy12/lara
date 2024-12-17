import type { Category } from "./props";

export const categoryStoreKey = 'category-filter';

export function getStoredFilterCategoryValue(): null | Category {
   const item = sessionStorage.getItem(categoryStoreKey);
   if (item) return JSON.parse(item);
   return null;
}

export function storeCategoryFilterValue(category: Category) {
   sessionStorage.setItem(categoryStoreKey, JSON.stringify(category));
}

export function clearCategoryFilter() {
   sessionStorage.removeItem(categoryStoreKey);
}
