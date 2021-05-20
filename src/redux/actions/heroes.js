import axios from 'axios';

export const fetchHeroes = () => async (dispatch) => {
  const { data } = await axios.get(`https://swapi.dev/api/people/`);
  const search = '';
  const gender = 'male';

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
  const filteredHeroes = heroes.filter((hero) => {
    if (search == false && gender == false) {
      return hero;
    }

    if (hero.name === search && hero.gender === gender) {
      return hero;
    }

    if (hero.name === search && gender == false) {
      return hero;
    }

    if (hero.gender === gender && search == false) {
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
