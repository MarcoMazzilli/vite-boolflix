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

        <img @click="$emit('goToHomepage')" src="/logo-boolflix.png" alt="Logo Boolflix">

        <div class="menu">
          <ul>
            <li v-for="(link,id) in menuList" :key="id">
            <a href="#">{{ link }}</a>
          </li>

          </ul>
        </div>
      </div>
      
      <div class="col right-side">

        <div class="search-section">
          <SearchSection @startSearch="startSearch2" />
        </div>

        <div class="user-options">
          <img src="/user-icons/user-icon.png" alt="">
        </div>

      </div>
      
  </header>
  </template>

<style lang="scss" scoped>
@use '../scss/partials/vars.scss' as*;
header{
  height: 75px;
  width: 100%;
  display: flex;
  position: fixed;
  z-index: 999;

    
  .col.left-side{
  width: 50%;
  display: flex;
  padding: 0 50px;

    img{
    height: 100%;
    padding: 15px 5px;
    cursor: pointer;
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
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 0 50px;
      width: 50%;
      .user-options{
        margin-left: 20px;
      }
      img{
        height: 35px;
        display: block;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
</style>