// state = {
//     contacts: [
//         { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//         { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//         { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//         { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ],
//     filter: "",
//     name: "",
//     number: "",
//     alert: false,
// };
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
    //   return state.filter((item) => item.id !== payload.id);

    default:
      return state;
  }
};

const filter = (state = "", action) => state;

export default combineReducers({ items, filter });

// addContact = ({ name, number }) => {
//     const { contacts } = this.state;

//     const findContact = contacts.find(
//         (contact) => contact.name.toLowerCase() === name.toLowerCase()
//     );
//     if (findContact) {
//         this.setState({ alert: true });
//         setTimeout(() => this.setState({ alert: false }), 3000);
//         return;
//     }

//     this.setState((prevState) => ({
//         contacts: [
//             ...prevState.contacts,
//             {
//                 id: uuidv4(),
//                 name,
//                 number,
//             },
//         ],
//     }));
// };

// onRemoveContact = (id) => {
//     const { contacts } = this.state;
//     this.setState({
//         contacts: contacts.filter((contact) => contact.id !== id),
//     });
// };

// onChangeFilter = (filter) => {
//     this.setState({ filter });
// };

// findContact = () => {
//     return this.state.filter
//         ? this.state.contacts.filter((contact) =>
//             contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
//         )
//         : this.state.contacts;
// };
