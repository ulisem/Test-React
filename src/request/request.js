
import axios from 'axios';

const url = axios.create({
    baseURL: 'https://611d53597d273a0017e2f7a0.mockapi.io/cities'
});

export const getApiSuggestions = (word) => {
    console.log(word)
    let result = url
    .get(`?name=${word}`)
    .then((response) => {
        return response.data
    })
    .catch((error) => {
        return error;
    });
    return result;
}