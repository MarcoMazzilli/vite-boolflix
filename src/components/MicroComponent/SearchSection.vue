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

  <div class="select-section">
    <select 
    :class="this.inputFlag ? 'clicked' : null"
    v-model="store.seriesType"
    name="" 
    id="">
      <option value="movies">Movies</option>
      <option value="tvSeries">TV Series</option>
    </select>
  </div>

      <input class="searchBarInput" 
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
  height: 100%;
  }

.select-section select{
  height: 30px;
  width: 0px;
  border-radius: 5px;
  border: none;
  text-align: center;
  background-color: white;
  letter-spacing: 1px;
  transition: all .3s;
  &.clicked{
    width: 80px;
    padding: 5px 0;
    border-radius: 5px;
    border: none;
    transition: all 1s;
  }
}

.searchBarInput{
  width: 0px;
  height: 30px;
  border-radius: 5px;
  border: none;
  transition: all .3s;
&.clicked{
    width: 250px;
    padding: 15px;
    border-radius: 5px;
    margin: 0 10px;
    border: none;
    transition: all 1s;
  }
}

.buttonSearch{
  height: 30px;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;
  color: white;
  font-size: 1.3rem;
  &:hover{
    color: $brandRed;
    background-color: white;
  }
}

</style>