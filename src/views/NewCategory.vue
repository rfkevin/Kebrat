<script setup lang="ts"> 
    import { useRouter } from 'vue-router';
    import  CategorieFormVue from '@/components/CategorieForm.vue';
    import { useCategoryStore } from '@/stores/CategoryStore';
    import { useFetch } from '@/utils/requete';
    import Button from 'primevue/button';   
    const categoryStore = useCategoryStore()
    const route = useRouter()
    /*const addCategory= inject<{addCategory: (newCategorie :string) => void}>('category')!.addCategory;*/

    function onNewCategory(newCategorie :string): void {
        console.log(newCategorie);
        
        var option = {method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({name: newCategorie})};
        useFetch ("http://localhost:3000/categories", option)

        route.push({ name: 'Home' });

    }
</script>
<template>
    
    <CategorieFormVue @add-category="onNewCategory"></CategorieFormVue>
    <Button @click="route.push({ name: 'Home' })" label="Annuler" severity="Danger" class="mt-5"/> 
</template>