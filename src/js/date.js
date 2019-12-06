import axios from 'axios';

const api_url = "https://numbersapi.com/random/date?json";

export const date = () => {
  axios.get(api_url)
    .then(response => {
        // console.log(response.data);
        datefacts.innerText = response.data.text;
      })
    .catch(error => console.log(error));
}