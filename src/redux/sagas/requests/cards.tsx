import axios from 'axios'

export const requestGetCards = () => {
    return axios.request(
        {
            method: "get",
            url: "http://localhost:3000/cards"
        }
    )
}

