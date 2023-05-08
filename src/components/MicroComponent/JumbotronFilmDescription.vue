<script>
import {store} from '../../data/store'
export default {
    data(){
        return{
            store,
        }
    }
    
}
</script>

<template>

    <div class="description-box"
    v-show="store.counterJumbotronImg === product.id"
    v-for="product in store.movie" 
    :key="product.id">

    <h2>{{ product.title }}</h2>

    <div class="rating-stars">
        <span>
            <i class="fa-solid fa-star"
            v-for="star in Math.ceil(product.vote_average/2)"
            :key="star" ></i>
        </span>
        <span>
            <i class="fa-regular fa-star"
            v-for="star in Math.ceil(4 - product.vote_average/2)"
            :key="star" ></i>
        </span>
    </div>
    <p>{{ product.overview }}</p>
    </div>

</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars.scss' as *;

            
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


</style>