import React, { useState } from 'react';


const MyComponent = () => {
    const [newContact, setNewContact] = useState({
        name: '',
        username: '',
        phone: ''
    });

    const [contacts, setContacts] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewContact((prevContact) => ({
            ...prevContact,
            [name]: value
        }));
    };

    const handleSaveContact = () => {
        setContacts((prevContacts) => [...prevContacts, newContact]);
        setNewContact({
            name: '',
            username: '',
            phone: ''
        });
    };

    return (
        <div>
            <h2>Add new contact</h2>
            <form>
                <label className="label">
                    Name:
                    <input
                        className="input"
                        type="text"
                        name="name"
                        value={newContact.name}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Surname:
                    <input
                        className="input"
                        type="text"
                        name="username"
                        value={newContact.username}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Phone:
                    <input
                        className="input"
                        type="text"
                        name="phone"
                        value={newContact.phone}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <button className="save-btn" type="button" onClick={handleSaveContact}>
                    Save contact
                </button>
            </form>
        </div>
    );
};

export default MyComponent;
