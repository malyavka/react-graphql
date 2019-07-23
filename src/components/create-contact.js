import React from 'react';
import gql from 'graphql-tag';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';

import client from '../apollo';
import { GET_CONTACTS } from './contact-view';

const CREATE_CONTACT = gql`
  mutation CreateContact($input: PostInput!) {
    CreateContact(input: $input) {
      id
    }
  }
`;

class CreateContact extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const target = event.target;
        const displayName = target.displayName.value;
        const title = target.title.value;
        const company = target.company.value;
        const location = target.location.value;

        const contact = {
            displayName: displayName,
            title: title,
            company: company,
            location: location
        };

        await client.mutate({
            variables: {contact},
            mutation: CREATE_CONTACT,
            refetchQueries: () => [{query: GET_CONTACTS}],
        });

    }

    render() {
        return (

            <form className="form-inline" onSubmit={this.handleSubmit}>
                <div className="form-group row">
                    <div className="col-md-3">
                        <input type="text" name="displayName" className="form-control" id="nameInput"
                               placeholder="Name"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="title" className="form-control" id="titleInput" placeholder="title"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="company" className="form-control" id="companyInput"
                               placeholder="company"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="location" className="form-control" id="locationInput"
                               placeholder="location"/>
                    </div>
                    <div className="col-md-3">
                        <button type="submit" className="btn btn-primary"><i className="fa fa-fw fa-plus"></i>Add
                        </button>
                    </div>
                </div>
            </form>

        )
    }
}


export default CreateContact;