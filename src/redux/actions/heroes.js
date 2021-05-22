import axios from 'axios';

export const setLoaded = (val) => ({ type: 'SET_LOADED', payload: val });

export const fetchHeroes = (searchName, sortBy) => async (dispatch) => {
  dispatch(setLoaded(false));

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

  // фильтр для поиска и категорий
  const reg = new RegExp(searchName, 'i');

  const filteredHeroes = heroes.filter((hero) => {
    if (!searchName && !sortBy.type) {
      return hero;
    }

    if (reg.test(hero.name) && hero.gender === sortBy.type) {
      return hero;
    }

    if (reg.test(hero.name) && !sortBy.type) {
      return hero;
    }

    if (hero.gender === sortBy.type && !searchName) {
      return hero;
    }
  });

  const items = filteredHeroes.map((hero, index) => {
    const idHero = hero.url.match(/\d+/g);
    return {
      id: idHero[0],
      name: hero.name,
      homeworld: homeworlds[index].data.name,
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
