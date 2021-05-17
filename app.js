import axios from 'axios';


axios.get('https://swapi.dev/api/people/1').then(response => {
    console.log(response.data);
  }).catch(error => {
    console.log(error)
  });