import { reactive } from "vue"

export const store = reactive({
    originalApiUrl:                 "https://api.themoviedb.org/3/search/movie",
    apiUrl :                        "https://api.themoviedb.org/3/search/movie",
    api_key :                       "8a9378730c1534547b3d8231e788ded6",
    language:                       "it-IT",
    titleToSearch:                  "Il signore degli anelli",
    resultApiCall :                  [],
})