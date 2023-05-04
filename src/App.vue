<script>
import Header            from './components/Header.vue'
import Main              from './components/Main.vue'
import Footer            from './components/Footer.vue'
import SearchSection     from './components/MicroComponent/SearchSection.vue'



  export default {
    components:{
      Header,
      SearchSection,
      Main,
      Footer,
    },
    data(){
      return{
        name : "appVue"
      }
    }
  }
  </script>


<template>
  
<div class="appWrapper">

  <Header />
  
  <SearchSection />
  
  <Main />
  
  <Footer />
  
</div>

</template>

<style lang="scss">
@use "./scss/main.scss" as *;

</style>