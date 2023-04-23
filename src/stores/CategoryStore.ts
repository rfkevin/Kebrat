import type { Category } from "@/Model/Category";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCategoryStore = defineStore('category', ()=>{
    const listCategory = ref<Category[]>([
        {id: 1, name:"transport"},
        {id: 2, name:"revenu"},
        {id: 3, name:"Boisson"},
        {id: 4, name:"course"}
    ])
    
    function addCategory(newCategory: string): void {
        const newId = listCategory.value.length +1;
        listCategory.value.push({
            id: newId, name: newCategory 
        })
    
    }
    return {listCategory, addCategory}
})