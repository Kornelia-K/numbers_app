import axios from 'axios';

const api_url = "http://numbersapi.com/random/math?json";

export const math = () => {
  axios.get(api_url)
    .then(response => {
        // console.log(response.data);
        mathfacts.innerText = response.data.text;
      })
    .catch(error => console.log(error));
}