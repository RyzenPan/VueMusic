import axios from '@/utils/myaxios.js'

export const getSearchHot = () => {
    return axios({
        url: '/search/hot'
    })
}

export const getSearchResult = (keyword) => {
    return axios({
        url: '/search',
        params:{
            keywords:keyword
        }
    })
}