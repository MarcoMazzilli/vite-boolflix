<script>
    import { store }         from '../../data/store';

  export default {

    data(){
      return{
        store,
        inputFlag : false,
      }
    },
    methods:{
      ifDataComplete(){
        if(store.titleToSearch.length != 0){
          this.$emit('startSearch')
        }
      }
    }
  }
  </script>

<template>
 <div class="container">

  <div class="select-section">
    <select 
    @change="ifDataComplete()"
    :class="this.inputFlag ? 'clicked' : null"
    v-model="store.seriesType"
    name="" 
    id="">
      <option value="movies">Movies</option>
      <option value="tvSeries">TV Series</option>
    </select>
  </div>

    <div class="input-section">
      <input class="searchBarInput" 
      :class="this.inputFlag ? 'clicked' : null"
      type="text" 
      placeholder="Cerca un Film o una Serie tv"
      v-model="store.titleToSearch"
      @keydown.enter="ifDataComplete()">
      <span class="button-search" :class="this.inputFlag ? 'clicked' : null">
        <i @click.stop="ifDataComplete()" v-if="inputFlag" class="fa-solid fa-magnifying-glass"></i>
      </span>
      
      <span class="open-search" @click.stop="this.inputFlag = !this.inputFlag">
        <i v-if="!inputFlag" class="fa-solid fa-magnifying-glass"></i>
        <i v-if="inputFlag" class="fa-solid fa-chevron-right"></i>
      </span>
    </div>
      
 </div>
</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars.scss' as*;
//TODO: ADD MIXIN
.container{
  display: flex;
  height: 100%;
  }

.select-section select{
  height: 30px;
  width: 0px;
  border: none;
  text-align: center;
  background-color: white;
  letter-spacing: 1px;
  transition: all .2s;
  outline: none;
  &.clicked{
    width: 80px;
    padding: 5px 0;
    border-radius: 5px;
    border: none;
    transition: all .2s;
  }
}
textarea:focus, input:focus{
    outline: none;
}

.input-section{
  display: flex;
  .searchBarInput{
    width: 0px;
    height: 30px;
    border: none;
    transition: all .2s;
    &.clicked{
      width: 250px;
      padding: 15px;
      border-radius: 5px 0 0 5px;
      margin-left: 10px;
      border: none;
      transition: all 1s;
    }
  }
  .button-search{
    height: 30px;
    width: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 5px 5px 0;
    font-size: 1.3rem;
    color:gray;
    background-color:white;
    cursor: pointer;
    margin-right: 20px;
    transition: all .3s;
      &:hover{
      color: $brandRed;
    }
      &.clicked{
        width: 30px;
        // transition: .5s;
      

      }
    }

  .open-search{
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
}

</style>