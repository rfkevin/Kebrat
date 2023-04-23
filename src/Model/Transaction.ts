import type { Category } from "./Category";

export interface Transaction {
[x: string]: any;
    id: string,
    description:string,
    date: string,
    montant:bigint,
    categoryId: number
}