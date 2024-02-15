"use server"
import { connectDB } from "../database/MongoConnect";
import PaymentHistory from "../database/models/paymentModel/payment";

export const addPaymentHistory = async (paymentHistory) => {
  try {
    await connectDB();


    // const result = await PaymentHistory.create(payment);
    const result = await PaymentHistory.create(paymentHistory);
    // console.log(result)
    return JSON.parse(JSON.stringify({ success: true, data: result }));
  } catch (error) {
    return {
      errorDetails: JSON.parse(JSON.stringify(error)),
    };
  }
};

// get the payment
export const getPaymentHistory = async () => {
  try {
    await connectDB();
    const result = (await PaymentHistory.find()).reverse();
    return JSON.parse(JSON.stringify({ success: true, data: result }));
  } catch (error) {
    return JSON.parse(JSON.stringify(error));
  }
} 
