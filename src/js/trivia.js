import axios from 'axios';

const api_url = "https://numbersapi.com/random/trivia?json";

export const trivia = () => {
  axios.get(api_url)
    .then(response => {
        // console.log(response.data);
        triviafacts.innerText = response.data.text;
      })
    .catch(error => console.log(error));
   
}
