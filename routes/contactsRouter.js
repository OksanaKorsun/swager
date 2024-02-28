const express = require("express");
const {
  getAllContacts,
  getContactById,
  deleteContact,
  createContact,
  updateContact,
} = require("../controllers/contactsControllers.js");
const validateBody = require("../helpers/validateBody");
const shema = require("../schemas/contactsSchemas");

const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", getContactById);

contactsRouter.delete("/:id", deleteContact);

contactsRouter.post(
  "/",
  validateBody(shema.createContactSchema),
  createContact
);

contactsRouter.put(
  "/:id",
  validateBody(shema.updateContactSchema),
  updateContact
);

module.exports = contactsRouter;
