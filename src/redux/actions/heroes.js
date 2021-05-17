import axios from 'axios';

export const fetchHeroes = (page) => async (dispatch) => {
  const { data } = await axios.get(`https://swapi.dev/api/people/?page=${page}`);

  const pagesCount = Math.ceil(data.count / 10);
  const pagesNumbers = [];
  for (let i = 0; i < pagesCount; i++) {
    pagesNumbers[i] = i + 1;
  }
  dispatch(setAllPages(pagesNumbers));

  const planets = await data.results.map((item, index) => {
    return axios.get(`${item.homeworld}`);
  });

  const homeworlds = await Promise.all(planets);

  const items = await data.results.map((item, index) => {
    const idHero = item.url.match(/\d+/g);

    return {
      id: idHero[0],
      name: item.name,
      homeworld: homeworlds[index].data.name,
      gender: item.gender,
    };
  });

  console.log(items);

  dispatch(setHeroes(items));
};

export const setHeroes = (items) => ({
  type: 'SET_HEROES',
  payload: items,
});

export const setAllPages = (pagesNumbers) => ({
  type: 'SET_PAGES',
  payload: pagesNumbers,
});
