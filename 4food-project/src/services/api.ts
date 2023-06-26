import axios, { AxiosInstance } from 'axios';


const api = axios.create({
    baseURL: 'https://back4food-92b6dhpjn-lorenzocoracini.vercel.app'
}) as AxiosInstance



export { api }