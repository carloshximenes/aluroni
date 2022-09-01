interface ICategory {
    id: number;
    label: string;
    value: string;
}

export interface IItem {
    title: string;
    description: string;
    photo: string;
    size: number;
    serving: number;
    price: number;
    id: number;
    category: ICategory;
}
