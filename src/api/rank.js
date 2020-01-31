import axios from '@/utils/myaxios.js'


export const getRank = () => {
    return axios({
        url: '/toplist/detail'
    })
}