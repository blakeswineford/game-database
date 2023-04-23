import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'ba6ecba4fedf4a2d828820fd95582259'
    }
})