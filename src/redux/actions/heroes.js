import axios from 'axios';

export const fetchHeroes = (page) => (dispatch) => {
  axios.get(`https://swapi.dev/api/people/?page=${page}`).then(({ data }) => {
    console.log(data.name);
    dispatch(setHeroes(data.results));
  });
};

export const setHeroes = (items) => ({
  type: 'SET_HEROES',
  payload: items,
});
