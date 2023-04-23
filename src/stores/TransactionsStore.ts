import type { Transaction } from "@/Model/Transaction";
import { defineStore } from "pinia";
import { computed, ref } from 'vue';
export const UseTransactionStore = defineStore('transaction',() =>{
    const transactions = ref<Transaction[]>([
    ]);
    function ajouterTransaction(nouvelleTransaction: Transaction): void {
        const nouvelId = transactions.value.length + 1;
        transactions.value.push({
            id: nouvelId,
            date: new Date(nouvelleTransaction.date),
            description: nouvelleTransaction.description,
            montant: BigInt(nouvelleTransaction.montant),
            category: nouvelleTransaction.category
        })
    }
    /*const totalMontant = computed(() =>{
        return BigInt(transactions.reduce((total:any, transaction:any) => total + Number(transaction.montant), 0));
      })*/
    return {transactions, ajouterTransaction}
})