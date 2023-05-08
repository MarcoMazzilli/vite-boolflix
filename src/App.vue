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

          if (type === 'movie' && params === 'popular') {
            store.movieResultApiCall = result.data.results;
            store.titleToSearch = "";
            store.counterJumbotronImg = store.movieResultApiCall[0].id
          }
          if (type === 'tv') {
            store.tvSeriesResultApiCall = result.data.results;
            store.titleToSearch = "";
          }
          if ( type === 'movie' && params === 'upcoming') {
            store.upcoming = result.data.results;
            store.titleToSearch = "";
          }

          console.log(store.upcoming)
        })
      },

      getApi(){

          let fullUrl = store.baseUrl

          if(store.seriesType === 'tvSeries'){
            fullUrl += '/search/tv'
          } else if (store.seriesType === 'movies'){
            fullUrl += '/search/movie'
          }else if(store.seriesType === 'all'){
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

            if(store.seriesType === 'movies'){
              store.movieResultApiCall = result.data.results
              store.tvSeriesResultApiCall = []

            }else if(store.seriesType === 'tvSeries'){
              store.tvSeriesResultApiCall = result.data.results
              store.movieResultApiCall = []

            }else{
              store.movieResultApiCall = []
              store.tvSeriesResultApiCall = []
              store.upcoming = []
              result.data.results.forEach(element => {

                if (element.media_type === 'tv') {
                  store.tvSeriesResultApiCall.push(element)
                }
                if (element.media_type === 'movie') {
                  store.movieResultApiCall.push(element)
                 }
               })
            }

            
          })
      }
      
    },
    mounted(){
      this.homeGetApi('movie', 'popular')
      this.homeGetApi('tv' , "top_rated")
      this.homeGetApi('movie', 'upcoming')
    }
  }
  </script>


<template>
  
<div class="appWrapper">

  <Header 
  @startSearch2="getApi"
  @goToHomepage="homeGetApi"/>

  <Jumbotron />
  
  <Main />
  
  <!-- <Footer /> -->
  
</div>

</template>

<style lang="scss">
@use "./scss/main.scss" as *;

</style>