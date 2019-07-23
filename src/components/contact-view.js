import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from "react-router-dom";
export const GET_CONTACTS = gql`
query {
  contacts{
    id
    displayName
    title
    company
    location
    relationships {id}
  }
}
`;

export default () => (
    <Query query={GET_CONTACTS}>
        {({ loading, data }) => !loading && (
            <div>
            <h1>Name</h1>
                {data.contacts.map(contact => (
                    <div key={contact.id}>
                        <Link to={`/${contact.id}`}>
                            <h2>{contact.displayName}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        )}
    </Query>
);