// Use the payload below to do the tasks:

// 1) Create the following:

// // - Add New Contact (Priority:★★★★★)
// // // Entry form that can add new contacts and relate 
// // // (if applicable) to other previous entities and vice versa 
// // // (where the latter will now also relate to the newly entered contact)
// // // Sample new Contact:
// // // { id: 8,
// // //   displayName: "Dylan Reiner",
// // //   title: "Baby",
// // //   company: null,
// // //   location: "New York City",
// // //   pets: [],
// // //   relationships: [{ id: 2, type: "Dad" }, { id: 6, type: "Mom" }]}

// // - Single Profile View (Priority:★★★★☆)
// // // Display each key value on a page and link to other
// // // related entities.

// // - Search Page (Priority:★★★☆☆)
// // // Search and display related entities based on partial/fuzzy
// // // search by any key/relational value
// // // (Sample Searchs(Refer to contacts payload below):
// // // // Ken -> {id:1,...}
// // // // Girlfriend -> [{id:5,...}, {id:3,...}])
// // // Do not preload all contacts on page, only load 
// // // exact relational entity 

const contacts = [{
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