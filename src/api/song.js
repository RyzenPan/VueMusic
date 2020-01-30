import axios from '@/utils/myaxios.js'

export const getSongInfo = (id) => {
    return axios({
        url: '/song/detail',
        params:{
            ids:id
        }
    })
}

export const getSongUrl = (id) => {
    return axios({
        url: '/song/url',
        params:{
            id:id
        }
    })
}