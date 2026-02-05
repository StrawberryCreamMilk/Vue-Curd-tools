// src/api/index.js
import axios from './config'

export const getTodos = () => axios.post('/api/post')
