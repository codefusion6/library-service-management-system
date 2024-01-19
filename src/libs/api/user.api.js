import User from "../models/userModel/user";

import { connect } from "../database/MongoConnect";

export async function createUser() {
  try {
    await connect();
    const user = { name: "Sabbir Ahammed" };
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
    res.status(400).JSON({ message: "Internal Error" }, error);
  }
}

await createUser();
