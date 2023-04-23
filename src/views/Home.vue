<script setup lang="ts">
/*import { inject } from 'vue';*/
import TabVue from '@/components/Tab.vue'
    /*import { storeToRefs } from 'pinia'*/
    /*import { UseTransactionStore } from '@/stores/TransactionsStore'*/;
import { useFetch } from '@/utils/requete';
/*const transactionStore = UseTransactionStore();
/*const transactions = storeToRefs(transactionStore).transactions*/
import Button from 'primevue/button';
import { useRouter } from 'vue-router';
const route = useRouter()

/*const transactions = inject<{transactions : Transaction[]}>('transactions')!.transactions;*/
const { data, error } = useFetch("http://localhost:3000/transactions", null)
const categories = useFetch("http://localhost:3000/categories", null).data

</script>
<template>
    <TabVue v-bind:transactions="data" v-bind:categories="categories" />
    <div class="grid pt-5 pb-5">
    <Button @click="route.push({ name: 'AddTransaction' })" class="col " label="Ajouter transactions"/> 
     <div class="col"></div>
    <Button @click="route.push({ name: 'AddCategory' })" class="col" label="Ajouter Category"/>
    </div>
</template>