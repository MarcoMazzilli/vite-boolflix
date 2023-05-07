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
                <div class="description-box"
                v-show="store.counterJumbotronImg === id"
                v-for="(film , id) in store.movieResultApiCall" 
                :key="id">

                <h2>{{ film.title }}</h2>

                <div class="rating-stars">
                    <span>
                        <i class="fa-solid fa-star"
                        v-for="star in Math.ceil(film.vote_average/2)"
                        :key="star" ></i>
                    </span>
                    <span>
                        <i class="fa-regular fa-star"
                        v-for="star in Math.ceil(4 - film.vote_average/2)"
                        :key="star" ></i>
                    </span>
                </div>

                <p>{{ film.overview }}</p>

                </div>
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
@use '../scss/partials/vars.scss' as *;

.jumbotron{
    height: 600px;

    .wrapper{
        height: 100%;
        display: flex;
        justify-content: flex-end;
        position: relative;
        

        .description-container{
            height: 100%;
            width: 50%;
            position: absolute;
            left: 0;
            display: flex;
            align-items: center;
            background: rgb(0,0,0);
            background: linear-gradient(90deg, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%);
            
            .description-box{
                width: 70%;
                height: 50%;
                margin-left: 100px;
                padding: 20px;
                color: white;

                h2{
                    margin: 10px 0;
                    font-size: 2.5rem;
                }
                .rating-stars{
                    span{
                        display: inline-block;
                    }
                    & span:first-child{
                        color: $brandRed;
                    }
                }
                p{
                    margin: 15px 0;
                    font-size: 1.1rem;
                }
                
            }
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