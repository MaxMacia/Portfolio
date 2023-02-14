import jsonCategories from './categories.json';

type Category = {
    name: string,
    title: string,
    subDirectories?: { [key: string]: string | boolean }[]
};

export const categories : Category[] = jsonCategories;