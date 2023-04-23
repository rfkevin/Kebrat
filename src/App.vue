<script setup lang="ts">
import "primevue/resources/themes/lara-light-indigo/theme.css";     
    
    //core
import "primevue/resources/primevue.min.css";
import "/node_modules/primeflex/primeflex.css"
/*import { ref, provide } from 'vue';
import type { Category } from './Model/Category';
/*const transactions = ref([
    { id: 1, date: new Date('2023-03-25'), description: 'Salaire', montant: 50000n },
    { id: 2, date: new Date('2023-03-27'), description: 'Plein d\'essence', montant: -3000n },
    { id: 3, date: new Date('2023-03-28'), description: 'Dîner au restaurant', montant: -7500n }
]);

const listCategory = ref<Category[]>([
    {id: 1, nom:"transport"},
    {id: 2, nom:"resto"},
    {id: 3, nom:"Boisson"},
    {id: 4, nom:"course"}
])

function addCategory(newCategory: string): void {
    const newId = listCategory.value.length +1;
    listCategory.value.push({
        id: newId, nom: newCategory 
    })

}
/*function ajouterTransaction(nouvelleTransaction: Transaction): void {
    const nouvelId = transactions.value.length + 1;
    transactions.value.push({
        id: nouvelId,
        date: new Date(nouvelleTransaction.date),
        description: nouvelleTransaction.description,
        montant: BigInt(nouvelleTransaction.montant)

    })
provide("transactions", {
    transactions: transactions,
    ajouterTransaction: ajouterTransaction
})
provide("category", {
    listCategory: listCategory,
    addCategory: addCategory
})*/
</script>
<template>
    <div id="main">
        <h1>Transactions</h1>
        <router-view></router-view>
    </div>
</template>

<style>
#main {
    max-width: 960px;
    margin: auto;
    position: relative;
}

#tableau {
    margin-left: 100px;
    min-height: 150px;
}
</style>