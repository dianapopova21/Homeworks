import React, { Component } from 'react';
import axios from 'axios';
import ContactTable from './ContactTable';
import ContactForm from './ContactForm';

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            showForm: false,
        };
    }

    componentDidMount() {
        this.fetchContacts();
    }

    fetchContacts() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.setState({ contacts: response.data });
            })
            .catch(error => {
                console.error('Error fetching contacts:', error);
            });
    }

    handleDeleteContact = (contactId) => {
        const updatedContacts = this.state.contacts.filter((contact) => contact.id !== contactId);
        this.setState({ contacts: updatedContacts });
    }

    toggleForm = () => {
        this.setState(prevState => ({ showForm: !prevState.showForm }));
    }

    render() {
        const { contacts, showForm } = this.state;

        return (
            <div>
                <h2>Contact list</h2>
                <ContactTable contacts={contacts} onDelete={this.handleDeleteContact} />
                <button onClick={this.toggleForm}>{showForm ? 'Hide form' : 'Add contact'}</button>
                {showForm && <ContactForm />}
            </div>
        );
    }
}

export default Contacts;
