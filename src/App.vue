<script>
import Header            from './components/Header.vue'
import Jumbotron         from './components/Jumbotron.vue'
import Main              from './components/Main.vue'
import Footer            from './components/Footer.vue'
import SearchSection     from './components/MicroComponent/SearchSection.vue'
import { store }         from './data/store'
import axios             from 'axios'



  export default {
    components:{
      Header,
      Jumbotron,
      SearchSection,
      Main,
      Footer,
      store,
    },
    data(){
      return{
        name : "appVue"
      }
    },
    methods:{
      homeGetApi(type,params){
        axios.get(store.baseUrl + '/' + `/${type}` + `/${params}`,{
          params:{
            api_key : store.api_key,
            language : store.language,
          }
        })
        .then(result => {

          store.titleToSearch = "";

          result.data.results.forEach(element => {

              store.allResults.push(element);
              
          })
          console.log(store.allResults)
          
          if (type === 'movie' && params === 'popular') {
            store.movie = result.data.results;
          }
          if (type === 'tv') {
            store.tv = result.data.results;
          }
          if ( type === 'movie' && params === 'upcoming') {
            store.upcoming = result.data.results;
          }
        
        })
      },

      backToHome(){
      store.allResults = [];

      this.homeGetApi('movie', 'popular')
      this.homeGetApi('tv' , "top_rated")
      this.homeGetApi('movie', 'upcoming')

      store.counterJumbotronImg = 0
      },

      getApi(){

          let fullUrl = store.baseUrl

          if(store.typeFilter === 'tvSeries'){
            fullUrl += '/search/tv'
          } else if (store.typeFilter === 'movies'){
            fullUrl += '/search/movie'
          }else if(store.typeFilter === 'all'){
            fullUrl += '/search/multi'
          }

          axios.get(fullUrl ,{
            params:{
              api_key : store.api_key,
              language : store.language,
              query : store.titleToSearch
            }
          })
          .then(result => {

            
            if(store.typeFilter === 'movies'){
              store.movie = result.data.results
              store.tv = []
              
            }else if(store.typeFilter === 'tvSeries'){
              store.tv = result.data.results
              store.movie = []
              
            }else{
              store.movie = []
              store.tv = []
              store.upcoming = []
              store.allResults = [];

              result.data.results.forEach(element => {
                store.allResults.push(element);
                
                if (element.media_type === 'tv') {
                  store.tv.push(element)
                }
                if (element.media_type === 'movie') {
                  store.movie.push(element)
                }
              })
              store.counterJumbotronImg = 0;
            }
          })
      }
      
    },
    mounted(){
      this.backToHome()

    }
  }
  </script>


<template>
  
<div class="appWrapper">

  <Header 
  @startSearch2="getApi"
  @goToHomepage="backToHome"/>

  <Jumbotron />
  
  <Main />
  
  <!-- <Footer /> -->
  
</div>

</template>

<style lang="scss">
@use "./scss/main.scss" as *;

</style>