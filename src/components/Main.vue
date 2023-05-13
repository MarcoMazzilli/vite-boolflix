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
    
    
    <select v-model="store.language">
      <option value="it"> IT </option>
      <option value="en"> EN </option>
    </select>
    
    <div v-for="(type, index) in ['movie', 'tv', 'upcoming']" :key="index">


    <h1 v-if="store[type].length != 0">{{ store.lang[store.language][type] }}</h1>
    <div class="card-wrapper">  
      
      <swiper :slidesPerView="6" :spaceBetween="20" :loop="true" :navigation="true" :modules="modules" class="mySwiper"  :pagination="{ clickable: true }">

        <swiper-slide v-for="movie in store[type]" 
        :key="movie.id"
        @click="store.counterJumbotronImg = movie"
        >

          <ProductCard
            :imageLink="'http://image.tmdb.org/t/p/w342' + movie.poster_path"
            :filmTitle="movie.title || movie.name"
            :originalFilmTitle="movie.original_title || movie.original_name"
            :lang="movie.original_language"
            :rate="Math.ceil(movie.vote_average/2)"
          />

        </swiper-slide>
    
      </swiper>
    </div>
  </div>

    
<!--     
    <h1 v-if="store.tv != 0">Serie Tv </h1>
    <div class="card-wrapper">  
      
      <swiper :slidesPerView="6" :spaceBetween="0" :loop="true" :navigation="true" :modules="modules" class="mySwiper">

        <swiper-slide v-for="tvSeries in store.tv" 
        :key="tvSeries.id"
        @click="store.counterJumbotronImg = tvSeries.id"
        >

          <ProductCard
            :imageLink="'http://image.tmdb.org/t/p/w342' + tvSeries.poster_path"
            :filmTitle="tvSeries.name"
            :originalFilmTitle="tvSeries.original_name"
            :lang="tvSeries.original_language"
            :rate="Math.ceil(tvSeries.vote_average/2)"
          />

        </swiper-slide>
    
      </swiper>
    </div> -->

    <!-- <h1 v-if="store.upcoming != 0">In arrivo solo su Boolflix </h1>
    <div class="card-wrapper">  
      
      <swiper :slidesPerView="6" :spaceBetween="0" :loop="true" :navigation="true" :modules="modules" class="mySwiper">

        <swiper-slide v-for="product in store.upcoming" 
        :key="product.id"
        @click="store.counterJumbotronImg = product.id"
        >

          <ProductCard
            :imageLink="'http://image.tmdb.org/t/p/w342' + product.poster_path"
            :filmTitle="product.title"
            :originalFilmTitle="product.original_title"
            :lang="product.original_language"
            :rate="Math.ceil(product.vote_average/2)"
          />

        </swiper-slide>
    
      </swiper>
    </div> -->

  </div>
  
</template>

<style lang="scss" scoped>
@use '../scss/partials/vars.scss' as*;

.container{
  background-color: rgb(0, 0, 0);
  min-height: 100vh;
  padding-bottom: 50px;
  width: 85%;
  max-width: 2000px;


  .card-wrapper{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
  }

  h1{
    color: white;
    margin: 10px 0;
  }
}
.mySwiper{
  width: 100%;
}

</style>