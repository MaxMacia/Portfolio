import jsonCategories from './categories.json';

type Category = {
    name: string,
    title: string,
    subDirectories?: { [key: string]: string[] | string | boolean }[],
    description?: string[]
};

export const categories : Category[] = jsonCategories;