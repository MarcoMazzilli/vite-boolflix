import { reactive } from "vue"

export const store = reactive({
    mostPopularApiUrl:              "https://api.themoviedb.org/3/movie/popular",
    originalApiUrl:                 "https://api.themoviedb.org/3/search/",
    apiUrl :                        "https://api.themoviedb.org/3/search/",
    api_key :                       "8a9378730c1534547b3d8231e788ded6",
    language:                       "it-IT",
    titleToSearch:                  "",

    movieResultApiCall :            [],
    tvSeriesResultApiCall:          [],
})