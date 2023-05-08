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
        <div class="wrapper">

          <div class="col title">
            <h4>Titolo</h4>
            <p>{{ filmTitle }}</p>
          </div>
          
          
          <div class="col og-title">
            <h4>Titolo originale</h4>
            <p>{{ originalFilmTitle }}</p>
          </div>
            
          
          <div class="col rating-container">

            <div class="star-container">
              <span> Rate:</span>
              <i v-for="id in rate" :key="id" class="fa-solid fa-star"></i>
            </div>
            
            <div class="language-container">
              <img :src="`/flags/${lang}.png`" :alt="lang">
            </div>

          </div>
            
          </div>
      </div>

    </div>

</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars.scss' as*;

.mm-card{
  width: 80%;
  border-radius: 10px;
  margin: 10px;
  overflow: hidden;
  position: relative;

  &:hover .film-description{
    opacity: 1;
    transition: all .4s;
    left: 0;
  }
  &:hover .film-cover{
    transform: scale(1.3);
    transition: 3s;
  }
  &:hover .film-cover img{
    opacity: .3;
  }
  h4{
    font-weight: 800;
    font-size: 1.2rem;
    text-align: center;
    color: gray;
  }
  .film-cover{
    img{
      width: 100%;
      height: 100%;
      display: block;
    }
  }
   .film-description{
    padding: 2px; //Change
    // background-color: rgba(0, 0, 0, 0.9);
    color: white;
    position: absolute;
    opacity: 0;
    top: 0;
    left: 100%;
    height: 100%;
    width: 100%;
    transition: all .4s;

    .wrapper{
        height: 100%;
        img{
          width: 100%;
        }
          .col{
            height: calc(100% / 3);
            padding: 5px;
          }

        .title , .og-title {
          p{
            margin: 10px 0;
            text-align: center;
            font-style: italic;
          }
        }

        .rating-container{
          padding: 10px 5px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          .language-container{
            width: 30px;
          }
          .star-container{
            span{
              margin-right: 5px;
            }
            i{
              color: $rateStarsColor;
             }
          }        
        }
      }
    }
  }
</style>