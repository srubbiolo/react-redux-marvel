import { SELECT_HERO, DATA_LOADED, HERO_LOADED } from '../constants/action-types';

export function setHero(payload) {
    return { type: SELECT_HERO, payload }
};

export function getHero(apiKey, heroId) {
  return function(dispatch) {
    // TODO: here move the apikey to a separate file to mae it configurable, its available on the mern project
    return fetch(`https://gateway.marvel.com:443/v1/public/characters/${heroId}?apikey=${apiKey}`)
      .then(response => response.json())
      .then(json => {
        if (json.code === 404) {
          dispatch({ type: HERO_LOADED, payload: {} });
        } else {
          dispatch({ type: HERO_LOADED, payload: json.data.results[0] });
        }
      });
  };
};

export function getData(apiKey) {
  return function(dispatch) {
    // TODO: here move the apikey to a separate file to mae it configurable, its available on the mern project
    return fetch(`https://gateway.marvel.com/v1/public/characters?orderBy=name&apikey=${apiKey}`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: DATA_LOADED, payload: json.data.results });
      });
  };
}