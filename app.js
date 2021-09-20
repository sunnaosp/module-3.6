// We use strict mode
"use strict";

// list of contacts
var contacts = [
  {
    name: "Jón Jónsson",
    email: "j@jons.is",
    phoneNumber: "5875522",
    company: "Bóndi",
  },
];

// Function in adding a new contact to the list
function add(contact) {
  if (!(contact.name && contact.email)) {
    console.log("Missing fields");
    return;
  }

  let existingContact = contacts.find((c) => c.email == contact.email);
  if (existingContact) {
    console.log("Duplicate was found");
    return;
  }
  contacts.push({
    name: contact.name,
    email: contact.email,
    phoneNumber: contact.phoneNumber,
    company: contact.company,
  });
  console.log(contact.name + " was added");
}

// Remove corresponding contact / Email address is the unique identifier
function remove(email) {
  let contactIndex = contacts.findIndex((c) => c.email == email);
  if (contactIndex == -1) {
    console.log("Contact not found");
    return;
  }
  let contactName = contacts[contactIndex].name;
  contacts.splice(contactIndex, 1);
  console.log(contactName + " was removed");
}

// Update/Increment the corresponding contact’s data with the information that’s passed in
function edit(email, newData) {
  let contactIndex = contacts.findIndex((c) => c.email == email);
  if (contactIndex == -1) {
    console.log("Contact not found");
    return;
  }
  contacts[contactIndex].name = newData.name;
  contacts[contactIndex].phoneNumber = newData.phoneNumber;
  contacts[contactIndex].company = newData.company;
  console.log(contacts[contactIndex].name + " was updated");
}

//Output information for the corresponding contact / Email address is the unique identifier
function get(email) {
  let existingContact = contacts.find((c) => c.email == email);
  if (!existingContact) {
    console.log("Contact not found");
    return;
  }
  console.log("Name: " + existingContact.name);
  console.log("Email: " + existingContact.email);
  if (existingContact.phoneNumber)
    console.log("Phone number: " + existingContact.phoneNumber);
  if (existingContact.company)
    console.log("Company: " + existingContact.company);
}

//List all contacts available in the contact list
function listAll() {
  contacts.forEach((c) => {
    console.log("Name: " + c.name);
    console.log("Email: " + c.email);
    if (c.phoneNumber) console.log("Phone number: " + c.phoneNumber);
    if (c.company) console.log("Company: " + c.company);
  });
}

//Remove all contacts from the list / Ask if user is sure before proceeding
function clear() {
  let answer = prompt(
    "Are you sure you want to clear the contact list? Type y if sure"
  );
  if (answer === "y") {
    contacts = [];
    console.log("The contact list was cleared");
  } else {
    console.log("Operation canceled");
  }
}

// Call each function to make sure it works.
console.log("Listing all contacts");
listAll();
console.log("Adding a new contact");
add({
  name: "Hafliði",
  email: "h@jons.is",
  phoneNumber: "1234567",
});

console.log("Failing to add a new contact");
add({
  name: "Hafliði",
  phoneNumber: "1234567",
});
console.log("Listing all contacts");
listAll();

console.log("Editing a contact");
edit("h@jons.is", {
  name: "Svafliði",
  phoneNumber: "1234567",
});

console.log("Getting a contact");
get("h@jons.is");

console.log("Removing a contact");
remove("j@jons.is");

console.log("Failing to get a contact");
get("j@jons.is");

console.log("Clearing all contacts");
clear();

console.log("Verifying that clear worked by listing all contacts");
listAll();
