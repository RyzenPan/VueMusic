import axios from '@/utils/myaxios.js'

export const getBanner = () => {
    return axios({
        url: '/banner'
    })
}

export const getPersonalized = () => {
    return axios({
        url: '/personalized'
    })
}

export const getNewsong = () => {
    return axios({
        url: '/personalized/newsong'
    })
}