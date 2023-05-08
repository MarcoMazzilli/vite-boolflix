<script>
import {store} from '../data/store'
import JumbotronFilmDescription from './MicroComponent/JumbotronFilmDescription.vue'


export default {
    data(){
        return{
            store,
        }
    },
    components:{
        JumbotronFilmDescription
    }
    
}
</script>

<template>
    <div class="jumbotron">
        <div class="wrapper">
            <div class="description-container">

                <JumbotronFilmDescription />

            </div>
            <div class="img-container">
                <img
                v-show="store.counterJumbotronImg === product.id"
                v-for="product in store.movie" 
                :key="product.id"
                :src="'http://image.tmdb.org/t/p/original' + product.backdrop_path" alt="not found">
            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../scss/partials/vars.scss' as *;

.jumbotron{
    height: 600px;

    .description-container{
            height: 100%;
            width: 50%;
            position: absolute;
            left: 0;
            display: flex;
            align-items: center;
            background: rgb(0,0,0);
            background: linear-gradient(90deg, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%);
    }

    .wrapper{
        height: 100%;
        display: flex;
        justify-content: flex-end;
        position: relative;
        
        .img-container{
            height: 100%;
            width: 70%;

            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position:center ;
            }
        }
    }

}



</style>