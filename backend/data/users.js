import bcrypts from "bcryptjs";

const users = [
  {
    name: "admin",
    email: "admin@estore.com",
    password: bcrypts.hashSync("admin", 10),
    isAdmin: true,
  },
  {
    name: "Peter Chan",
    email: "peterchan@estore.com",
    password: bcrypts.hashSync("peterchan", 10),
    isAdmin: false,
  },
  {
    name: "Danny Green",
    email: "dannygreen@estore.com",
    password: bcrypts.hashSync("dannygreen", 10),
    isAdmin: false,
  },
];

export default users;
