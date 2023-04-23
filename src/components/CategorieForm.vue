<script setup lang="ts">
import {ref} from 'vue';
const nouvelleCategory = ref({
    name:""
});
const emit = defineEmits <{
    (e:'addCategory', nouvelleCategory:string): void
  }>();

function Onsubmit(){
  if (nouvelleCategory.value.name.length === 0) {
				return false;
			}
  emit("addCategory", nouvelleCategory.value.name);

}  

</script>
<template>
    <div id="formulaire">
        <form @submit.prevent="Onsubmit">
        <div>
          <label for="Categorie">Categorie :</label>
          <input type="text" id="categorie" v-model="nouvelleCategory.name" required>
        </div>
        <button type="submit">Ajouter Categorie</button>
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