<script>
import {store} from '../data/store'
export default {
    data(){
        return{
            store,
        }
    }
    
}
</script>

<template>
    <div class="jumbotron">

        <div class="wrapper">

            <div class="description-container">

            </div>

            <div class="img-container">
                <img
                v-show="store.counterJumbotronImg === id"
                v-for="(film , id) in store.movieResultApiCall" 
                :key="id"
                :src="'http://image.tmdb.org/t/p/original' + film.backdrop_path" alt="not found">
            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../scss/partials/vars.scss';

.jumbotron{
    height: 650px;
    // background-color: rgb(150, 187, 187);

    .wrapper{
        height: 100%;
        text-align: end;
        display: flex;
        justify-content: flex-end;
        position: relative;
        

        .description-container{
            height: 100%;
            width: 50%;
            position: absolute;
            left: 0;
            background: rgb(0,0,0);
            background: linear-gradient(90deg, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%);  
        }
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