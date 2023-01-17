import { createStore } from "redux";
import produce from "immer";
// action creators
export const addVille = (code, ville) => ({
  type: "ADD_VILLE",
  payload: { ville: ville, code: code },
});
export const modifyPopulation = (code, population) => ({
  type: "MODIFY_POPULATION",
  payload: { population: population, code: code },
});

const initialState = [
  {
    code: "1",
    name: "morocco",
    continent: "africa",
    surfaceArea: "superosdi",
    image: "url1",
    indepYear: 1956,
    population: "40m",
    cities: [
      {
        name: "casa",
        district: "casa settat",
        population: "dunno",
        capital: true,
      },
    ],
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "MODIFY_POPULATION":
      country = state.findIndex((c) => c.code == action.payload.code);
      return produce(state, (drafState) => {
        drafState[country].population = action.payload.population;
      });
    case "ADD_VILLE":
      country = state.findIndex((c) => c.code == action.payload.code);
      return produce(state, (drafState) => {
        drafState[country].cities.push(action.payload.ville);
      });
    default:
      return state;
  }
};
const store = createStore(reducer);
export default store;
