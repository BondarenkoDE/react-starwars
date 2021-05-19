import axios from 'axios';

export const fetchHeroes = () => async (dispatch) => {
  const { data } = await axios.get(`https://swapi.dev/api/people/`);

  //подсчет количества страниц
  let count = Math.ceil(data.count / 10);
  const pages = [];
  for (let i = 0; i < count; i++) {
    pages[i] = i + 1;
  }

  //получение всех героев со всех страниц
  const promiseHeroes = await pages.map((item, index) => {
    return axios.get(`https://swapi.dev/api/people/?page=${item}`);
  });

  const datas = await Promise.all(promiseHeroes);

  const heroes = datas
    .map((item) => {
      return item.data.results;
    })
    .flat();

  const promiseHomeworlds = await heroes.map((item, index) => {
    return axios.get(`${item.homeworld}`);
  });

  const homeworlds = await Promise.all(promiseHomeworlds);

  // сюда фильтр для поиска и категории

  //

  const items = heroes.map((item, index) => {
    const idHero = item.url.match(/\d+/g);
    return {
      id: idHero[0],
      name: item.name,
      homeworld: homeworlds[index].data.name,
      gender: item.gender,
    };
  });

  dispatch(setHeroes(items));
};

export const setHeroes = (items) => ({
  type: 'SET_HEROES',
  payload: items,
});

export const setAllPages = (pagesCount) => ({
  type: 'SET_PAGES',
  payload: pagesCount,
});
