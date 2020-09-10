import { combineReducers } from "redux";
import phoneBookActionsTypes from "./phoneBookActionTypes";

const items = (
  state = [
    {
      id: "id-1",
      name: "Rosie Simpson",
      number: "459-12-56",
    },
    {
      id: "id-2",
      name: "Hermione Kline",
      number: "443-89-12",
    },
    {
      id: "id-3",
      name: "Eden Clements",
      number: "645-17-79",
    },
    {
      id: "id-4",
      name: "Annie Copeland",
      number: "227-91-26",
    },
  ],
  { type, payload }
) => {
  switch (type) {
    case phoneBookActionsTypes.ADD:
      return [...state, payload];

    case phoneBookActionsTypes.DEL:
      console.log(items);
      return state.filter((contacts) => contacts.id !== payload.id);

    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case phoneBookActionsTypes.FILTER:
      // console.log("t");
      return payload.filter;

    default:
      return state;
  }
};

const alertSwitch = (state = false, { type, payload }) => {
  switch (type) {
    case phoneBookActionsTypes.DUPLICATE:
      return !state;

    default:
      return state;
  }
};

export default combineReducers({ items, filter, alertSwitch });
