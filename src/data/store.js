import { reactive } from "vue"

export const store = reactive({

    baseUrl:                        "https://api.themoviedb.org/3",

    //Api Params
    api_key :                       "8a9378730c1534547b3d8231e788ded6",
    // api_key :                       "1b3eb153fce73eb6b953f7d515b2dc1d",
    language:                       "it-IT",
    titleToSearch:                  "",
    typeFilter:                      "all",
    // ApicCall Results
    allResults:                     [],
    movie :                         [],
    tv:                             [],
    upcoming:                       [],

    counterJumbotronImg : 0,
    
    language: 'it',
    lang: {
        it: {
            movie: 'Film',
            tv: 'Serie TV',
            upcoming: 'In arrivo'
        },
        en: {
            movie: 'Film',
            tv: 'Series TV',
            upcoming: 'Upcoming'
        }
    }
})