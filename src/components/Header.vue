<script>
import SearchSection from './MicroComponent/SearchSection.vue';
import menuList from '../data/headerMenudb'

  export default {
    data(){
      return{
        menuList,
      }
    },
    components:{
      SearchSection
    },
    methods:{
      startSearch2(){
        this.$emit('startSearch2')
      }
    }
  }
  </script>

<template>
  <header>
      
      <div class="col left-side">
        <img src="/logo-boolflix.png" alt="Logo Boolflix">
        <div class="menu">
          <ul>
            <li v-for="(link,id) in menuList" :key="id">
            <a href="#">{{ link }}</a>
          </li>

          </ul>
        </div>
      </div>
      
      <div class="col right-side">
        <SearchSection @startSearch="startSearch2" />
      </div>
      
  </header>
  </template>

<style lang="scss" scoped>
@use '../scss/partials/vars.scss' as*;
header{
  height: 75px;
  width: 100%;
  display: flex;

    
  .col.left-side{
  width: 50%;
  display: flex;
  padding: 0 50px;

    img{
    height: 100%;
    padding: 15px 5px;
    }
    .menu{
      display: flex;
      align-items: center;

      ul{
        list-style: none;
        display: flex;
        align-items: center;
        gap: 15px;
        margin: 0 35px;
        text-transform: capitalize;

        a{
          text-decoration: none;
          display: flex;
          color: rgb(218, 218, 218);
          &:hover{
            transform: scale(1.1);
            color: white;
          }
        }
      }
    }
  }
    
    .col.right-side{
      padding: 0 50px;
      width: 50%;
    }
  }
</style>