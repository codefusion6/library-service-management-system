"use server";

import { connectDB } from "../database/MongoConnect";
import Writer from "../database/models/writerModel/writer";

// create writer
export const addWriter = async (formData) => {
  const writerName = formData.get("writerName");
  const dateOfBirth = formData.get("dob");
  const dateOfDead = formData.get("dod");
  const authorImg = formData.get("authorImg");
  const address = formData.get("address");
  const description = formData.get("description");

  console.log(authorImg, writerName);
  try {
    await connectDB();

    // data to be save in db
    const writer = {
      writerName: writerName,
      dateOfBirth: dateOfBirth,
      dateOfDeath: dateOfDead,
      authorImg: authorImg,
      address: address,
      description: description,
    };
    console.log("writer", writer);

    const result = await Writer.create(writer);
    //   revalidatePath("/dashboard/add");

    return JSON.parse(JSON.stringify({ success: true, data: result }));
  } catch (error) {
    console.log(error);
    return {
      error: "Fill input properly or send the required data",
      errorDetails: JSON.stringify(error),
    };
  }
};

export const getWritersNumber = async () => {
  try {
    await connectDB();
    const writerNum = await Writer.find().countDocuments();
    // revalidatePath("/dashboard")
    return JSON.parse(JSON.stringify(writerNum))
  } catch (error) {
    return JSON.parse(JSON.stringify(error));
  }
};
