import { v4 as uuidv4 } from "uuid";
import phoneBookActionsTypes from "./phoneBookActionTypes";

const addContact = ({ name, number }) => ({
  type: phoneBookActionsTypes.ADD,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

const deleteContact = ({ id }) => ({
  type: phoneBookActionsTypes.DEL,
  payload: {
    id,
  },
});

const filter = (filter) => {
  console.log(filter);
  return {
    type: phoneBookActionsTypes.FILTER,
    payload: {
      filter,
    },
  };
};

export default { addContact, deleteContact, filter };
