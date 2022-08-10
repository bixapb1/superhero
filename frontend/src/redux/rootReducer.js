import { HEROES, HERO, EDIT } from "./types";

const initStore = {
  heroes: [],
  hero: [],
  editHero: [],
};

export const rootReducer = (state = initStore, action) => {
  switch (action.type) {
    case HEROES: {
      return { ...state, heroes: action.payload };
    }
    case HERO: {
      return { ...state, hero: action.payload };
    }
    case EDIT: {
      return { ...state, editHero: action.payload };
    }
    default:
      return state;
  }
};
