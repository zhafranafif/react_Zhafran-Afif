import axios from 'axios'
import CONST from '../utils/constant'

const config = {
    baseURL: CONST.BASE_URL,
    headers: {
        'x-hasura-admin-secret' : CONST.ADMIN_SECRET
    }
}
export const axiosInstance = axios.create(config)