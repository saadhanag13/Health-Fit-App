import axios from 'axios'

import { BASE_URL } from '../utils/contants.util'

export const generateOTP = async (email) =>
    axios.post(`${BASE_URL}/user/validate`, { email })

export const validateUser = async (token) =>
    axios.get(`${BASE_URL}/user/validate`,
        { headers: { 'Authorization': `Bearer ${token}`  } }
    )