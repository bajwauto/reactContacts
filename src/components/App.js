import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { nanoid } from 'nanoid';
import Home from './Home';
import Details from './ContactDetails';

function App() {
  const [contacts, setContacts] = useState([]);

  //local storage key
  const lockey = "contacts";

  //handler for adding a contact
  const contactAdder = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: nanoid(), ...contact }]);
  };

  //Fetch contacts from local storage
  useEffect(() => {
    const fetchedContacts = JSON.parse(localStorage.getItem(lockey));
    if (fetchedContacts)
      if (fetchedContacts.length > 0) setContacts(fetchedContacts);
  }, []);

  //save contacts to local storage
  useEffect(() => { localStorage.setItem(lockey, JSON.stringify(contacts)) }, [contacts]);

  //handler for deleting a contact
  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => {
      return contact.id !== id;
    });
    console.log("id deleted - " + id);
    setContacts(updatedContacts);
  }

  const navigate = useNavigate();
  return (
    <div>
      <div className="ui container">
        <Header />
        <Home />
        <Routes>
          <Route path="/" element={<ContactList list={contacts} deleteContact={deleteContact} />} />
          <Route path="/add" element={<AddContact contact={contactAdder} navigate={navigate} />} />
          <Route path="/contactDetails/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
