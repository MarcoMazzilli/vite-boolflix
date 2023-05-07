import { reactive } from "vue"

export const store = reactive({
    baseUrl:                        "https://api.themoviedb.org/3",
    mostPopularApiUrl:              "https://api.themoviedb.org/3/movie/popular",
    api_key :                       "8a9378730c1534547b3d8231e788ded6",
    seriesType:                      "all",
    language:                       "it-IT",
    titleToSearch:                  "",
    counterJumbotronImg : 0,

    movieResultApiCall :            [],
    tvSeriesResultApiCall:          [],
})