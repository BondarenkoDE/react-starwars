import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Search, SortPopup, Heroes } from '../components';

function Home() {
  useEffect(() => {
    const page = 1;
    axios.get(`https://swapi.dev/api/people/?page=${page}`).then(({ data }) => {
      data.results.forEach((item) => {
        console.log(item.name);
      });
      if (data.next) {
      }
      // axios.get(`${data.homeworld}`).then(({ data }) => {
      //   console.log(data.name);
      // });
    });
  });

  const getData = (apiURL) => {
    axios.get(apiURL).then(({ data }) => {
      console.log(data.results);
      // axios.get(`${data.homeworld}`).then(({ data }) => {
      //   console.log(data.name);
      // });
    });
  };

  const showDetail = (data) => {
    for (let i = 0; i < data.results.length; i++) {
      console.log(data.results[i].name);
    }
    if (data.next) {
      getData(data.next);
    }
  };

  return (
    <>
      <div className="filter">
        <Search />
        <SortPopup />
      </div>
      <Heroes />

      <div className="pagination"></div>
    </>
  );
}

export default Home;
