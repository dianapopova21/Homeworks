import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactTable from './ContactTable';
import ContactForm from './ContactForm';

const Contacts = () => {
    const [contacts, setContacts] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setContacts(response.data);
            })
            .catch(error => {
                console.error('Error fetching contacts:', error);
            });
    };

    const handleDeleteContact = (contactId) => {
        const updatedContacts = contacts.filter((contact) => contact.id !== contactId);
        setContacts(updatedContacts);
    };

    const toggleForm = () => {
        setShowForm(prevShowForm => !prevShowForm);
    };

    return (
        <div>
            <h2>Contact list</h2>
            {<ContactTable contacts={contacts} onDelete={handleDeleteContact} />}
            <button onClick={toggleForm}>{showForm ? 'Hide form' : 'Add contact'}</button>
            {showForm && <ContactForm />}
        </div>
    );
};

export default Contacts;
