

// create writer
export const addWriter = async (formData) => {
    const writerName = formData.get("writerName");
    const dateOfBirth = formData.get("dob");
    const dateOfDead = formData.get("dod");
    const writerImage = formData.get("writerImage");
    const address = formData.get("address");
    const description = formData.get("description");

    try {
    //   await connectDB();
      // data to be save in db
      const writer = {
        writerName: writerName,
        dateOfBirth: dateOfBirth,
        dateOfDead: dateOfDead,
        writerImage: writerImage,
        address: address,
        description: description,
      };
      console.log("writer",writer)
  
    //   const result = await Book.create(book);
    //   revalidatePath("/dashboard/addbook");
  
    //   return JSON.parse(JSON.stringify({ success: true, data: result }));
    } catch (error) {
      return {
        // error: "Fill input properly or send the required data",
        // errorDetails: JSON.parse(JSON.stringify(error)),
        // console.log("error")
      };
    }
  };