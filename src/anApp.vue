<script lang="ts">
export default {
  data(){
    return{
      transactions:[
        { id: 1, date: new Date('2023-03-25'), description: 'Courses', montant: 500n},
        { id: 2, date: new Date('2023-03-27'), description: 'Plein d\'essence', montant: 3000n },
        { id: 3, date: new Date('2023-03-28'), description: 'Dîner au restaurant', montant: 7500n },
  ],
 
      nouvelleTransaction:{
        date: "",
        description: '',
        montant: 0n,
      }
}},
  methods:{
    formatMontant(montant: bigint): string {
      return Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(Number(montant)/100); // diviser par 100n pour convertir à nouveau en format décimal
    },
    formatDate(date: Date): string {
      return new Intl.DateTimeFormat("fr-FR").format(date); // formater la date en chaîne de caractères local
    },

    ajouterTransaction(): void {
      const nouvelId = this.transactions.length + 1;
      this.transactions.push({
        id: nouvelId,
        date: new Date(this.nouvelleTransaction.date),
        description: this.nouvelleTransaction.description,
        montant: BigInt(this.nouvelleTransaction.montant), // multiplier par 100 pour stocker en format bigint
      });
      this.nouvelleTransaction = {
        date: "",
        description: '',
        montant: 0n,
      };
    },
  },
    computed:{
    totalMontant(): bigint {
        return BigInt(this.transactions.reduce((total, transaction) => total + Number(transaction.montant), 0));
      }
}

}
  </script>

<template>
    <div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Montant</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transaction in transactions" :key="transaction.id">
            <td>{{ formatDate(transaction.date) }}</td>
            <td>{{ transaction.description }}</td>
            <td>{{ formatMontant(transaction.montant) }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2">Total :</td>
            <td>{{formatMontant(totalMontant)}}</td>
          </tr>
        </tfoot>
      </table>
      <form @submit.prevent="ajouterTransaction">
        <div>
          <label for="date">Date :</label>
          <input type="date" id="date" v-model="nouvelleTransaction.date" required>
        </div>
        <div>
          <label for="description">Description :</label>
          <input type="text" id="description" v-model="nouvelleTransaction.description" required>
        </div>
        <div>
          <label for="montant">Montant :</label>
          <input type="number" id="montant" v-model.number="nouvelleTransaction.montant" required>
        </div>
        <button type="submit">Ajouter Transaction</button>
      </form>
    </div>
  </template>
  
  