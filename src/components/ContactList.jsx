import { useState } from "react";
import ContactRow from "./ContactRow";
import {useEffect} from 'react'

const ContactList = ({ setSelectedContactId }) => { 
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
    
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
        <table>
          <thead>
            <tr>
              <th colSpan="3">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
              {contacts.map((contact) => {
                return <ContactRow
                key={contact.id} 
                contact={contact} 
                setSelectedContactId={setSelectedContactId}
                />
              })}   
              
          </tbody>
        </table>
    ); 
}
export default ContactList;