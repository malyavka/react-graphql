const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const gql = require('graphql-tag');
const { buildASTSchema } = require('graphql');

const CONTACTS = [{
    id: 1,
    displayName: "Kenneth Lai",
    title: "Software Engineer",
    company: "Grapevine",
    location: "New York City",
    pets: [],
    relationships: [{ id: 5, type: "Girlfriend" }]
},

    {
        id: 2,
        displayName: "Andrew Reiner",
        title: "Cofounder",
        company: "Grapevine",
        location: "New York City",
        pets: [{ displayName: "Nike", type: "dog" }],
        relationships: [{ id: 6, type: "Wife" }]
    },
    {
        id: 3,
        displayName: "Lloyd Emelle",
        title: "Lead Hacker",
        company: "Grapevine",
        location: "New York City",
        pets: [],
        relationships: [{ id: 7, type: "Girlfriend" }]
    },
    {
        id: 4,
        displayName: "Rich Prior",
        title: "Lead Designer",
        company: "Grapevine",
        location: "New York City",
        pets: [],
        relationships: [{ id: 9, type: "Wife" }]
    },
    {
        id: 5,
        displayName: "Gina Lee",
        title: "CEO",
        company: "BanCard Plus",
        location: "New York City",
        pets: [{ displayName: "Jjong", type: "dog" }, { displayName: "Sweetie", type: "cat" }],
        relationships: [{ id: 1, type: "Boyfriend" }]
    },
    {
        id: 6,
        displayName: "Kristen Reiner",
        title: "Investor Relations Business Development",
        company: "The Blackstone Group",
        location: "New York City",
        pets: [],
        relationships: [{ id: 2, type: "Husband" }]
    },
    {
        id: 7,
        displayName: "Stacey",
        title: null,
        company: null,
        location: "New York City",
        pets: [],
        relationships: [{ id: 3, type: "Boyfriend" }]
    },
    {
        id: 9,
        displayName: "Leah Prior",
        title: null,
        company: null,
        location: "New York City",
        pets: [],
        relationships: [{ id: 4, type: "Husband" }]
    }]

const schema = buildASTSchema(gql`
  type Query {
    contacts: [Contact]
    contact(id: ID!): Contact
  }

  type Contact {
    id: ID
    displayName: String
    title: String
    company: String
    location: String
    pets: [String]
    relationships: [Contact]
  }
`);

const mapContact = (contact, id) => contact && ({ id, ...contact });

const root = {
    contacts: () => CONTACTS.map(mapContact),
    contact: ({ id }) => mapContact(CONTACTS[id], id),
};

const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}));

const port = process.env.PORT || 4000
app.listen(port);
console.log(`Running a GraphQL API server at localhost:${port}/graphql`);