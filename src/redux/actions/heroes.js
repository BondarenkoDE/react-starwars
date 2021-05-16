import axios from 'axios';

export const fetchHeroes = (page) => (dispatch) => {
  let names = [];

  axios.get(`https://swapi.dev/api/people/?page=${page}`).then(({ data }) => {
    data.results.map((item, index) => {
      const idHero = item.url.match(/\d+/g);
      axios.get(`${item.homeworld}`).then(({ data }) => {
        names[index] = {
          id: idHero[0],
          name: item.name,
          homeworld: data.name,
          gender: item.gender,
        };
      });
    });
  });
  console.log(names);
  dispatch(setHeroes(names));
};

export const setHeroes = (items) => ({
  type: 'SET_HEROES',
  payload: items,
});
