<script setup lang="ts">
    
    import { useRouter } from 'vue-router';
    
    import Formulaire from '@/components/Formulaire.vue';
    import type { Transaction } from '@/Model/Transaction';

   /* import { UseTransactionStore } from '@/stores/TransactionsStore';
    import {useCategoryStore} from '@/stores/CategoryStore'
    import { storeToRefs } from 'pinia'
    import { inject } from 'vue';*/

    import { useFetch } from '@/utils/requete';
    import Button from 'primevue/button';

    /*const transactionStore = UseTransactionStore();
    const categoryStore = useCategoryStore();
    const listCategory= storeToRefs(categoryStore).listCategory*/


    /*const addTransaction = inject<{ajouterTransaction: (transaction :Transaction) => void}>('transactions')!.ajouterTransaction;
    const listCategory = inject<{listCategory: Category[]}>('category')!.listCategory;*/

    const route = useRouter()

    const {data, error} =  useFetch ("http://localhost:3000/categories",null)
    
    function onNewTransaction(newTransaction : Transaction): void {
        console.log(JSON.parse(JSON.stringify(newTransaction)));
        var option = {method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(newTransaction)}
        const {data, error} =  useFetch ("http://localhost:3000/transactions", option)
        console.log(error);
        
        route.push({ name: 'Home' });

    }
</script>
<template>
    
    <Formulaire @ajouter-transaction="onNewTransaction" v-bind:list-category="data" ></Formulaire >
    <Button @click="route.push({ name: 'Home' })" label="Annuler" severity="Danger" class="mt-5"/> 
</template>