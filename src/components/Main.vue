<script>
import ProductCard    from './MicroComponent/ProductCard.vue';
import { store }      from '../data/store';

  export default {
    data(){
      return{
        store
      }
    },
    components:{
      ProductCard,
    }
  }
  </script>
<template>
  <div class="container">

    <ProductCard 
    v-for="(film,id) in store.resultApiCall" 
    :key="id"
    :imageLink="'http://image.tmdb.org/t/p/w342' + film.poster_path"
    :filmTitle="film.title"
    :originalFilmTitle="film.original_title"
    :lang="film.original_language"
    :rate="film.vote_average"
    />
    
  </div>
</template>

<style lang="scss" scoped>
@use '../scss/partials/vars.scss' as*;

.container{
  display: flex;
  flex-wrap: wrap;
  background-color: rgb(0, 0, 0);
  min-height: 100vh;
}

</style>