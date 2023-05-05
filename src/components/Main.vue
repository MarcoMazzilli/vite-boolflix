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
    
    <h1>Film</h1>
    <div class="card-wrapper">  
      <ProductCard 
      v-for="(film,id) in store.movieResultApiCall" 
      :key="id"
      :imageLink="'http://image.tmdb.org/t/p/w342' + film.poster_path"
      :filmTitle="film.title"
      :originalFilmTitle="film.original_title"
      :lang="film.original_language"
      :rate="film.vote_average"
      />
    </div>
    <h1>Tv-Series</h1>
    <div class="card-wrapper">  
      <ProductCard 
      v-for="(tvSerie,id) in store.tvSeriesResultApiCall" 
      :key="id"
      :imageLink="'http://image.tmdb.org/t/p/w342' + tvSerie.poster_path"
      :filmTitle="tvSerie.name"
      :originalFilmTitle="tvSerie.original_name"
      :lang="tvSerie.original_language"
      :rate="tvSerie.vote_average"
      />
    </div>
    
  </div>
</template>

<style lang="scss" scoped>
@use '../scss/partials/vars.scss' as*;

.container{
  background-color: rgb(0, 0, 0);
  min-height: 100vh;

  .card-wrapper{
    display: flex;
    flex-wrap: wrap;
  }

  h1{
    color: white;
    width: 100%;
    height: 50px;
  }
}

</style>