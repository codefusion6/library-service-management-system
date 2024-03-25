"use server"
import { revalidatePath } from "next/cache";
import { connectDB } from "../database/MongoConnect";
import PaymentHistory from "../database/models/paymentModel/payment";

export const addPaymentHistory = async (paymentHistory) => {

  try {
    await connectDB();
    const result = await PaymentHistory.create(paymentHistory);

    revalidatePath("/:customerid")
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
    revalidatePath("/:customerid")
    return JSON.parse(JSON.stringify({ success: true, data: result }));
  } catch (error) {
    return JSON.parse(JSON.stringify(error));
  }
}

// get one payment
export const getOnePaymentHistory = async (paymentId) => {
  try {
    await connectDB();
    const query = {
      paymentId: paymentId
    }
    const result = await PaymentHistory.findOne(query)
    revalidatePath("/:customerid")
    return JSON.parse(JSON.stringify({ success: true, data: result }));
  } catch (error) {
    return JSON.parse(JSON.stringify(error));
  }
} 

// get the payment number
export const getPaymentNumber = async () => {
  try {
    const paymentNumber = await PaymentHistory.find().countDocuments();
    return JSON.parse(JSON.stringify(paymentNumber));
    
  } catch (error) {
    return JSON.parse(JSON.stringify(error));
  }
}

