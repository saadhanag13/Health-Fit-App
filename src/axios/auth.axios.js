import axios from 'axios'
import { BASE_URL } from '../utils/contants.util'

export const loginUser = async (values) =>
    await axios.post(`${BASE_URL}/signin`, {
        ...values
    })

export const signUpUser = async (values) =>
    await axios.post(`${BASE_URL}/signup`, {
        ...values
    })
