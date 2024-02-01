import React, { Component } from 'react';
import '../index.css';
class MyComponent extends Component {
    state = {
        newContact: {
            name: '',
            username: '',
            phone: ''
        },
        contacts: []
    };

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            newContact: {
                ...prevState.newContact,
                [name]: value
            }
        }));
    };

    handleSaveContact = () => {
        const { newContact, contacts } = this.state;
        this.setState({
            contacts: [...contacts, newContact],
            newContact: {
                name: '',
                username: '',
                phone: ''
            }
        });
    };

    render() {
        const { newContact } = this.state;

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
                            onChange={this.handleInputChange}
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
                            onChange={this.handleInputChange}
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
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <br />
                    <button className="save-btn" type="button" onClick={this.handleSaveContact}>
                        Save contact
                    </button>
                </form>
            </div>
        );
    }
}

export default MyComponent;
