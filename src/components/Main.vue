<script>
import ProductCard    from './MicroComponent/ProductCard.vue';
import { store }      from '../data/store';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Pagination, Navigation } from 'swiper';

  export default {
    data(){
      return{
        store
      }
    },
    components:{
      ProductCard,
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination, Navigation],
      };
    },
    methods:{ //Utile per le stelle
      floorNumber(vote){
        return Math.floor(vote)
      }
    }
  }
  </script>
<template>
  <div class="container">
    
    <h1 v-if="store.movieResultApiCall != 0">Film </h1>
    <div class="card-wrapper">  
      
      <swiper :slidesPerView="6" :spaceBetween="0" :loop="true" :navigation="true" :modules="modules" class="mySwiper">

        <swiper-slide v-for="(movie,id) in store.movieResultApiCall" 
        @click="store.counterJumbotronImg = id"
        :key="id">

          <ProductCard
            :imageLink="'http://image.tmdb.org/t/p/w342' + movie.poster_path"
            :filmTitle="movie.title"
            :originalFilmTitle="movie.original_title"
            :lang="movie.original_language"
            :rate="Math.ceil(movie.vote_average/2)"
          />

        </swiper-slide>
    
      </swiper>

</div>

  </div>
  
</template>

<style lang="scss" scoped>
@use '../scss/partials/vars.scss' as*;

.container{
  background-color: rgb(0, 0, 0);
  min-height: 100vh;
  width: 85%;
  max-width: 2000px;


  .card-wrapper{
    display: flex;
    flex-wrap: wrap;
  }

  h1{
    color: white;
    margin: 10px 0;
  }
}
// .mySwiper{
//    padding: 0 30px;


// }

</style>