<script>
import Header            from './components/Header.vue'
import Main              from './components/Main.vue'
import Footer            from './components/Footer.vue'
import SearchSection     from './components/MicroComponent/SearchSection.vue'
import { store }         from './data/store'
import axios             from 'axios'



  export default {
    components:{
      Header,
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
      homeGetApi(){
        axios.get(store.mostPopularApiUrl,{
          params:{
            api_key : store.api_key,
            language : store.language,
          }
        })
        .then(result => {
          store.movieResultApiCall = result.data.results;
          store.titleToSearch = "";
          store.tvSeriesResultApiCall = []
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
              result.data.results.forEach(element => {

                if (element.media_type === 'tv') {
                  store.tvSeriesResultApiCall.push(element)
                }
                if (element.media_type === 'movie') {
                  store.movieResultApiCall.push(element)
                 }
                 
               })
            }

            console.log('result --->>', result.data.results)
            console.log('store.movieResultApiCall -->',store.movieResultApiCall)
            console.log('store.tvSeriesResultApiCall -->',store.tvSeriesResultApiCall)
          })
      }
      
    },
    mounted(){
      this.homeGetApi()
    }
  }
  </script>


<template>
  
<div class="appWrapper">

  <Header 
  @startSearch2="getApi"
  @goToHomepage="homeGetApi"/>
  
  <Main />
  
  <!-- <Footer /> -->
  
</div>

</template>

<style lang="scss">
@use "./scss/main.scss" as *;

</style>