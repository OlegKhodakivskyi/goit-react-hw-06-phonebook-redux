import React from "react";
import ContactFormListItem from "./ContactFormListItem/ContactFormListItem";
import styles from "./ContactList.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ContactFormList = ({ findContact, onRemoveContact }) => (
  <>
    <TransitionGroup component="ul" className={styles.contactList}>
      {findContact.map(({ id, name, number }) => (
        <CSSTransition
          key={id}
          timeout={1000}
          classNames={styles}
          unmountOnExit
        >
          <ContactFormListItem
            key={id}
            name={name}
            number={number}
            onRemove={() => onRemoveContact(id)}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  </>
);

export default ContactFormList;
