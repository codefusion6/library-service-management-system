import { connectDB } from "../database/MongoConnect";
import Payment from "../database/models/paymentModel/payment";


export const addPayment = async (formData) => {
  try {
    await connectDB();
    const paymentId = formData.get("paymentId");
    const paymentDate = formData.get("paymentDate");
    const userProfile = formData.get("userProfile");
    const userName = formData.get("userName");
    const emailAddress = formData.get("emailAddress");
    const paymentAmount = formData.get("paymentAmount");

    const payment = {
        // defied the field
        paymentId : paymentId,
        paymentDate : paymentDate,
        userProfile : userProfile,
        userName : userName,
        emailAddress : emailAddress,
        paymentAmount : paymentAmount

    };
    const result = await Payment.create(payment);
    return JSON.parse(JSON.stringify({ success: true, data: result }));
  } catch (error) {
    return {
      error: "Fill input properly or send the required data",
      errorDetails: JSON.parse(JSON.stringify(error)),
    };
  }
};

// get the payment
export const getPayment = async () => {
    try {
      await connectDB();
      const result = await Payment.find();
      return JSON.parse(JSON.stringify({ success: true, data: result }));
    } catch (error) {
      return JSON.parse(JSON.stringify(error));
    }
  } 
