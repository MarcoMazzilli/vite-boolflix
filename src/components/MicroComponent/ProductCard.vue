<script>
  export default {
    data(){
      return{
        name : "ProductCard"
      }
    },
    methods:{


    },
    props:{
      imageLink : String,
      filmTitle : String,
      originalFilmTitle : String,
      lang : String,
      rate : Number
    }
  }
  </script>

<template>


    <div class="mm-card">

      <div class="film-cover">
        <img :src="imageLink" alt=" Image Not Found">
      </div>

      <div class="film-description">

        <h3>{{ filmTitle }}</h3>
        <h4>{{ originalFilmTitle }}</h4>
        <p class="language-container">
          <img :src="`/flags/${lang}.png`" :alt="lang">
        </p>
        <div><i v-for="id in rate" :key="id" class="fa-solid fa-star"></i></div>

      </div>

    </div>

</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars.scss' as*;

.mm-card{
  width: 200px;
  border-radius: 15px;
  margin: 10px;
  overflow: hidden;
  position: relative;
  &:hover .film-description{
    opacity: 1;
    transition: all .3s;
  }
  .film-cover{
    img{
      width: 100%;
      object-fit: cover;
      display: block;
    }
  }
   .film-description{
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.85);
    color: white;
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    }

    img{
      width: 100%;
    }
    .language-container{
      width: 30px;
      margin: 10px 0;
    }

    i{
      color: $rateStarsColor;
    }
   
}

</style>