<script>
    import { store }         from '../../data/store';

  export default {

    data(){
      return{
        store,
        inputFlag : false,
      }
    },
  }
  </script>

<template>
 <div class="container">

      <input id="searchBarInput" 
      :class="this.inputFlag ? 'clicked' : null"
      type="text" 
      placeholder="Cerca un Film o una Serie tv"
      v-model="store.titleToSearch"
      @keydown.enter="$emit('startSearch')">

      <span class="buttonSearch" @click.stop="this.inputFlag = !this.inputFlag">
        <i class="fa-solid fa-magnifying-glass"></i>
      </span>

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
  width: 0px;
  opacity: 0;
  height: 50px;
  border-radius: 15px;
  padding: 5px;
  margin: 10px;
  border: none;
  transition: all .3s;
  &:hover{
    width: 250px;
    transition: 1s;
  }
}

#searchBarInput.clicked{
  width: 250px;
  opacity: 1;
  padding: 15px;
  border-radius: 15px;
  margin: 10px;
  border: none;
  height: 50px;
  transition: all 1s;
}

.buttonSearch{
  height: 50px;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 15px;
  color: white;
  font-size: 1.5rem;
  &:hover{
    color: $brandRed;
    background-color: white;
  }
}

</style>