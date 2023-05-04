<script>
    import { store }         from '../../data/store';

  export default {

    data(){
      return{
        store,
      }
    }
  }
  </script>

<template>
 <div class="container">

      <input id="searchBarInput" 
      type="text" 
      placeholder="Cerca un Film o una Serie tv"
      v-model="store.titleToSearch"
      @keydown.enter="$emit('startSearch')">

      <span class="buttonSearch" @click.stop="$emit('startSearch')">Search</span>

 </div>
</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars.scss' as*;
//TODO: ADD MIXIN
.container{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

#searchBarInput{
  width: 30%;
  padding: 15px;
  border-radius: 15px;
  margin: 10px;
  border: none;
  height: 50px;
}

.buttonSearch{
  display: inline-block;
  padding: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: white;
  border-radius: 15px;
}

</style>