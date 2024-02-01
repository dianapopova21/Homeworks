import React from 'react';
import '../index.css';

const ContactTable = ({ contacts, onDelete }) => (
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Phone number</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {contacts.map(contact => (
            <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.username}</td>
                <td>{contact.phone}</td>
                <td>
                    <button className="delete-btn" onClick={() => onDelete(contact.id)}>Delete</button>
                </td>
            </tr>
        ))}
        </tbody>
    </table>
);

export default ContactTable;
