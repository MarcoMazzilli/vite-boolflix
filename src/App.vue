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
      getApi(){
        //Chiamata Film
        axios.get(store.apiUrl + "/movie",{
          params:{
            api_key : store.api_key,
            language : store.language,
            query : store.titleToSearch
          }
        })
        .then(result => {
          store.movieResultApiCall = result.data.results
          console.log('store.movieResultApiCall -->',result.data);
        })
        //Chiamata tvSeries
        axios.get(store.apiUrl + "/tv",{
          params:{
            api_key : store.api_key,
            language : store.language,
            query : store.titleToSearch
          }
        })
        .then(result => {
          store.tvSeriesResultApiCall = result.data.results
          console.log('store.tvSeriesResultApiCall -->',store.tvSeriesResultApiCall);
        })
      }
      
    },
    mounted(){
      this.getApi()
    }
  }
  </script>


<template>
  
<div class="appWrapper">

  <Header />
  
  <SearchSection @startSearch="getApi" />
  
  <Main />
  
  <Footer />
  
</div>

</template>

<style lang="scss">
@use "./scss/main.scss" as *;

</style>