const axios = require('axios');

const fetchMeData = () => {
  axios.get('../data/categories.json')
    .then((response) => {
      console.log('CONSOLE LOVE');
      return response.json(); })
    .catch(error => {console.log(error)});
}

fetchMeData();