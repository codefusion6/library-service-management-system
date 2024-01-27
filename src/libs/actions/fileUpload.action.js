"use server";
import { writeFile } from "fs/promises";
import { join } from "path";

export const fileUpload = async (file, name) => {
  // console.log(file, name, "from upload action");

  // we can send direct file from server component to server component so we dont need to append file into formData, nor we need to get it out of fromData 
  // const file = formData.get(fileName);
  if (!file) {
    throw new Error("No file uploaded");
  }

  // const originalFileName = file.name;
  // const fileExtension = extname(originalFileName);
  // console.log(originalFileName, fileExtension);
  // const modifiedFileName = `${name}_${originalFileName}`;

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // With the file data in the buffer, you can do whatever you want with it.
  // For this, we'll just write it to the filesystem in a new location
  const path = join(file.name);
  await writeFile(path, buffer);
  const url = `http://localhost:3000/${file.name}`;
  // console.log("open ${path} to see the uploaded file");
  return { success: true, file_url: JSON.parse(JSON.stringify(url)) };
};
