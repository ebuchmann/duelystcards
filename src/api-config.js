import axios from 'axios'
import credentials from '../credentials'

export const api = axios.create({
  baseURL: `${credentials.api.url}/${credentials.api.version}`
})

export const imgur = axios.create({
  baseURL: 'https://api.imgur.com',
  headers: { Authorization: `Client-ID ${credentials.imgur.clientId}` },
})
