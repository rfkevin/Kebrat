<script setup lang="ts">
import type { Category } from '@/Model/Category';
import type { Transaction } from '@/Model/Transaction';
import { computed } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Card from 'primevue/card';
import Carousel from 'primevue/carousel';

const props = defineProps<{
  transactions: Transaction[] | null,
  categories: Category[] | null
}>()

function showCategorie(id: number): string {
  if (props.categories != null) {
    const categorie = props.categories.find(category => category.id == id);

    return categorie!.name
  }
  return "error category"
}
function formatMontant(montant: bigint): string {
  return Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(Number(montant) / 100); // diviser par 100n pour convertir à nouveau en format décimal
};
function formatDate(date: string): string {

  return new Intl.DateTimeFormat("fr-FR").format(new Date(date)); // formater la date en chaîne de caractères local
};
const formatedTransactions = computed(() => {
  if (props.transactions != null && props.categories != null) {
    return props.transactions.map((transaction) => ({
      ...transaction,
      formattedMontant: formatMontant(transaction.montant),
      formattedDate: formatDate(transaction.date),
      category: showCategorie(transaction.categoryId)
    }));
  }
  return []
})
const totalCategories = computed(() => {
  let total: { [key: string]: any } = {};
  if (props.transactions != null) {
    for (let transaction of props.transactions) {
      if (total[transaction.categoryId]) {
        total[transaction.categoryId] += transaction.montant
      }
      else {
        total[transaction.categoryId] = transaction.montant
      }
    }
    return total
  }
  else {
    return 0n
  }


})
const totalMontant = computed(() => {
  if (props.transactions != null) {
    return BigInt(props.transactions.reduce((total: any, transaction: any) => total + Number(transaction.montant), 0));
  }
  else {
    return 0n
  }
})

</script>
<template>
  <div>
    <DataTable :value="formatedTransactions" tableStyle="min-width: 50rem" dataKey="id">
      <template #header>
        List of transactions
      </template>
      <Column field="description" header="description"></Column>
      <Column field=category header="Category"></Column>
      <Column field="formattedDate" header="Date"></Column>
      <Column field="formattedMontant" header="Montant"></Column>
      <template #footer>
        Votre Solde est de {{ formatMontant(totalMontant) }}
      </template>
    </DataTable>
    <div class="grid">
      <div v-for="total, category in totalCategories" key="category" class="col">
        <Card>
          <template #title> {{ showCategorie(Number(category)) }}</template>
          <template #content>
            <p>
              votre depense total est {{ formatMontant(total) }}
            </p>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>
<style>
th,
td {
  border: 1px solid black;
  padding: 8px;
}

thead th {
  width: 25%;
}
</style>