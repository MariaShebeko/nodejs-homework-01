const contactsOperations = require("./contacts.js");

const invokeAction = async ({ action, id, data }) => {
  switch (action) {
    case "listContacts":
      const contacts = await contactsOperations.listContacts();
      console.log(contacts);
      break;
    case "getContactById":
      const contact = await contactsOperations.getContactById(id);
      if (!contact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log(contact);
      break;
    case "addContact":
      const newContact = await contactsOperations.addContact(data);
      console.log(newContact);
      break;
    case "removeContact":
      const removeContact = await contactsOperations.removeContact(id);
      console.log(removeContact);
      break;
    default:
      console.log("Unknown action");
  }
};

// const newContact = {
//   name: "Maria Shebeko",
//   email: "marygro89@gmail.com",
//   phone: "0997157986",
// };

// invokeAction({ action: "listContacts" });
// invokeAction({ action: "getContactById", id: "12" });
// invokeAction({ action: "addContact", data: newContact });
invokeAction({
  action: "removeContact",
  id: "b28ba0b0-71d0-4f9c-90fa-c4075dba4fee",
});
