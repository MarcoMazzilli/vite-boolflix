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
        axios.get(store.apiUrl,{
          params:{
            api_key : store.api_key,
            language : store.language,
            query : store.titleToSearch
          }
        })
        .then(result => {
          store.resultApiCall = result.data
          console.log('store.resultApiCall -->',store.resultApiCall);
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