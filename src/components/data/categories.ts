import jsonCategories from './categories.json';

type Category = {
    name: string,
    title: string
};

export const categories : Category[] = jsonCategories;