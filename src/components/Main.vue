<script>
  export default {
    data(){
      return{
        name : "Main"
      }
    }
  }
  </script>

<template>
  <h1>{{ name }}</h1>
</template>

<style lang="scss" scoped>
@use '../scss/partials/vars.scss' as*;

h1{
    color: $brandRed;
    background-color: $primaryBgColor;
}

</style>