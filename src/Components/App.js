import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./Contacts/ContactForm";
import ContactFormList from "./Contacts/ContactFormList/ContactFormList";
import Filter from "./Filter/Filter";
import styles from "./App.module.css";
import Alert from "./Alert/Alert";
import stylesAlert from "./Alert/Alert.module.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
    alert: false,
  };

  componentDidMount() {
    // console.log("DidMount");
    const persistedContacts = localStorage.getItem("contacts");
    // console.log(JSON.parse(persistedContacts));
    if (persistedContacts) {
      this.setState({ contacts: JSON.parse(persistedContacts) });
    }
  }

  componentDidUpdate(prevProps) {
    // console.log("Did Update");
    // console.log("prevState", prevState);
    // console.log("this.state", this.state);

    if (prevProps.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;

    const findContact = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (findContact) {
      this.setState({ alert: true });
      setTimeout(() => this.setState({ alert: false }), 3000);
      return;
    }

    this.setState((prevState) => ({
      contacts: [
        ...prevState.contacts,
        {
          id: uuidv4(),
          name,
          number,
        },
      ],
    }));
  };

  onRemoveContact = (id) => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter((contact) => contact.id !== id),
    });
  };

  onChangeFilter = (filter) => {
    this.setState({ filter });
  };

  findContact = () => {
    return this.state.filter
      ? this.state.contacts.filter((contact) =>
          contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
        )
      : this.state.contacts;
  };

  render() {
    const { filter, alert } = this.state;
    return (
      <>
        {alert && (
          <CSSTransition
            classNames={stylesAlert}
            in={true}
            appear={true}
            timeout={1500}
            unmountOnExit
          >
            <Alert alert={alert} />
          </CSSTransition>
        )}

        {/* ----------- ALert ----- */}

        <CSSTransition
          classNames={styles}
          in={true}
          appear={true}
          timeout={1500}
          unmountOnExit
        >
          <h1 className={styles.sectionTitle}>Phonebook</h1>
        </CSSTransition>

        {/* ----------- Phonebook ----- */}

        <ContactForm onAddContact={this.addContact} />
        <h2 className={styles.contactListTitle}>Contacts</h2>
        <Filter filter={filter} onChangeFilter={this.onChangeFilter} />
        <ContactFormList
          findContact={this.findContact()}
          onRemoveContact={this.onRemoveContact}
        />
      </>
    );
  }
}

export default App;
