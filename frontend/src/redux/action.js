import { HEROES, HERO, EDIT } from "./types";

export function setHeroes(heroes) {
  return { type: HEROES, payload: heroes };
}
export function setHero(hero) {
  return { type: HERO, payload: hero };
}
export function editHero(hero) {
  return { type: EDIT, payload: hero };
}
export function getHeroes() {
  return async (dispatch) => {
    const url = `/api/heroes`;
    const response = await fetch(url);
    const responseJson = await response.json();
    dispatch(setHeroes(responseJson));
  };
}
export function viewHeroes(id) {
  return async (dispatch) => {
    const url = `/api/heroes/${id}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    dispatch(setHero(responseJson));
  };
}
export function postHero(data) {
  return async (dispatch) => {
    const settings = {
      method: "POST",
      body: data,
    };
    const url = `/api/heroes/`;
    await fetch(url, settings);
    dispatch(getHeroes());
  };
}

export function patchHero(data, id) {
  return async (dispatch) => {
    const settings = {
      method: "PATCH",
      body: data,
    };
    const url = `/api/heroes/${id}`;
    await fetch(url, settings);
    dispatch(getHeroes());
  };
}

export function removeHero(id) {
  return async (dispatch) => {
    const settings = {
      method: "DELETE",
    };
    const url = `/api/heroes/${id}`;
    await fetch(url, settings);
    dispatch(getHeroes());
  };
}
