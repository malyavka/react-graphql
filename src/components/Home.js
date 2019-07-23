import { Route, NavLink, BrowserRouter, Link } from 'react-router-dom';

import CreateContact from "./create-contact";
import ContactView from './contact-view'
import React, { Component } from 'react';
import { Button, Container } from 'reactstrap';
class Home extends Component {
    state = {
        editing: null,
    };

    render() {
        const { editing } = this.state;

        return (
            <Container fluid>
                <ContactView
                    canEdit={() => true}
                    onEdit={(post) => this.setState({ editing: post })}
                />
                {editing && (
                    <CreateContact
                        post={editing}
                        onClose={() => this.setState({ editing: null })}
                    />
                )}
                <Link to='/add'>
                <Button
                    className="my-2"
                    color="primary"
                >
                   Add new contact
                </Button>
                </Link>
            </Container>
        );
    }
}

export default Home;
