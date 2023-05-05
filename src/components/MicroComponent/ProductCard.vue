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
        <span><i v-for="id in rate" :key="id" class="fa-solid fa-star"></i></span>

      </div>

    </div>

</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars.scss' as*;

.mm-card{
  width: 210px;
  border: 1px solid black;
  margin: 10px;
  background-color: rgb(33, 114, 87);
  height: 600px;
  border-radius: 15px;
  overflow: hidden;
  .film-cover{
    min-height: 313px ;
    img{
      width: 100%;
      object-fit: cover;
    }
  }
   .film-description{
    padding: 10px;
    background-color: rgb(164, 184, 164);

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
}

</style>