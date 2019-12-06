import axios from 'axios';

const api_url = "https://numbersapi.com/random/year?json";

export const year = () => {
  axios.get(api_url)
    .then(response => {
        // console.log(response.data);
        yearfacts.innerText = response.data.text;
      })
    .catch(error => console.log(error));
}