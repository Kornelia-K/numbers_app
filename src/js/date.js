import axios from 'axios';

const api_url = "http://numbersapi.com/random/trivia?json";

export const appp = () => {
  axios.get(api_url)
    .then(response => {
        // console.log(response.data);
        facts.innerText = response.data.text;
      })
    .catch(error => console.log(error));
}
