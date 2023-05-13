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

<!-- DEFAULT DESCRIPTION -->
<div class="description-box"
    v-if="store.counterJumbotronImg === 0">

    <h2>Benvenuto su <span id="logoRed">Boolflix</span></h2>

    <p>Siediti comodo e scegli il meglio dell'intrattenimento presente sul nostro sito!</p>
    <p>Scegli tra centinaia di film, serie Tv o documentari e prepara i Pop-Corn...ti aspetta una serata speciale!</p>
</div>
<!-- /DEFAULT DESCRIPTION -->

    <div class="description-box"
    v-show="store.counterJumbotronImg === product"
    v-for="product in store.allResults" 
    :key="product.id">

    <h2>{{ product.title || product.name }}</h2>

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

    <div class="product-overview">
        <p>{{ product.overview }}</p>
    </div>

    </div>

</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars.scss' as *;

            
.description-box{
    width: 70%;
    height: 60%;
    margin-left: 100px;
    padding: 20px;
    color: white;
    
    h2{
        margin: 10px 0;
        font-size: 2.5rem;
    }
    .rating-stars{
        padding: 10px 0 ;
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
    #logoRed{
        font-size: 3.7rem;
        text-transform: uppercase;
        font-weight: 600;
        color: $brandRed;
    }
    .product-overview{
        max-height: 90%;
        overflow-y: auto;
    }
}


</style>