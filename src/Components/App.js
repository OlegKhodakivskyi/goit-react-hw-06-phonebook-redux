import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import phoneBookActions from "../redux/phoneBookActions/phoneBookActions";
import ContactForm from "./Contacts/ContactForm";
import ContactFormList from "./Contacts/ContactFormList/ContactFormList";
import Filter from "./Filter/Filter";
import styles from "./App.module.css";
import Alert from "./Alert/Alert";
import stylesAlert from "./Alert/Alert.module.css";

class App extends Component {
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

  render() {
    return (
      <>
        {/* ----------- ALert ----- */}
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

        {/* ----------- Phonebook ----- */}

        <CSSTransition
          classNames={styles}
          in={true}
          appear={true}
          timeout={1500}
          unmountOnExit
        >
          <h1 className={styles.sectionTitle}>Phonebook</h1>
        </CSSTransition>

        {/* ----------- Contact FORM ----- */}

        <ContactForm />
        <h2 className={styles.contactListTitle}>Contacts</h2>
        <Filter />
        <ContactFormList />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.alert,
  };
};

export default connect(mapStateToProps)(App);
