import { v4 as uuidv4 } from "uuid";
import actionTypes from './phoneBookActionTypes'

const addContact = ({ name, number }) => ({ 
    type: actionTypes.ADD,
        payload: {
        id: uuidv4(),
          name,
          number
    }
)
}

const deleteContact = ({ id }) => ({
    type: actionTypes.DEL,
    payload: {
        id
    }
})

const filter  = ({ filter }) => ({
    type: actionTypes.FILTER,
    payload: {
        filter 
    }
})

export default { addContact, deleteContact, filter };