export const STATUSES = {
    'LOADING': 'LOADING',
    'SUCCESS': 'SUCCESS',
    'ERROR': 'ERROR',
}

export const API_ROOT = process.env.NODE_ENV === 'production' 
    ? 'https://api-my-chat1.herokuapp.com:5000'
    :'http://localhost:5000'

export const FORMATS_DATETIME = {
    FULL: 'DD/MM/YYYY HH:mm:ss',
    DATE_ONLY: 'DD/MM/YYYY',
    TIME_ONLY: 'HH:mm:ss'
}