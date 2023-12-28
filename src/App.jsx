import { useState, useEffect } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";
import './App.css';

// const dummyContacts = [
//   { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
//   { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
//   { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
// ];

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [contacts, setContacts] = useState([]);
  console.log(contacts);


  const selectedContact = contacts.find((contact) => contact.id === selectedContactId)

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const contacts = await response.json();
        setContacts(contacts);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts()
  }, []);

  return (
    <>
        <ContactList contacts={contacts} setSelectedContactId={setSelectedContactId} />
        <SelectedContact selectedContact={selectedContact} />     
    </>
  );
}

