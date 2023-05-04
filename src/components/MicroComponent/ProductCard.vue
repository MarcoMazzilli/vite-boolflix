<script>
  export default {
    data(){
      return{
        name : "ProductCard"
      }
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
        <img :src="imageLink" alt="nonesiste">
      </div>

      <div class="film-description">

        <h3>{{ filmTitle }}</h3>
        <h4>{{ originalFilmTitle }}</h4>
        <p>{{ lang }}</p>
        <p>{{ rate }}</p>

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
    img{
       width: 100%;
    }
   .film-description{
    padding: 10px;
    background-color: rgb(164, 184, 164);
   }
}

</style>