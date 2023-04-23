<script setup lang="ts">
import type { Transaction } from '@/Model/Transaction';
import {ref} from 'vue';
  const props = defineProps(['listCategory'])
  const nouvelleTransaction = ref({
    date: "",
    description: '',
    montant: 0n,
    categoryId:''
  });

  const emit = defineEmits <{
    (e:'ajouterTransaction', nouvelleTransaction:any): void
  }>();

  function Onsubmit(){
      if (/\d{4}-\d{2}-\d{2}/.test(nouvelleTransaction.value.date) === false) {
				return false;
			}

			if (typeof nouvelleTransaction.value.montant !== "number") {
				return false;
			}

			if (nouvelleTransaction.value.description.length === 0) {
				return false;
			}


        emit("ajouterTransaction", nouvelleTransaction.value);
    }
</script>
<template>
    <div id="formulaire">
        <form @submit.prevent="Onsubmit">
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
        <div>
          <label for="category">Category :</label>
          <select v-model="nouvelleTransaction.categoryId">
            <option v-for="c in listCategory" :key="c.id" :value="c.id">{{c.name }}</option>
          </select>
        </div>
        <button type="submit">Ajouter Transaction</button>
      </form>
    </div>
</template>
<style>
  #formulaire{
    padding: 20px;
    background-color: rgb(141, 137, 137);
    min-width: 350px;
  }
  button{
    margin-top: 20px;
    min-width: 300px;
  }
  label{
    min-width: 500px;
    font-size: small;
  }
  input{
  min-width: 300px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.232);
  background-image: url('searchicon.png');
  background-position: 10px 10px;
  box-sizing: border-box;
}
</style>