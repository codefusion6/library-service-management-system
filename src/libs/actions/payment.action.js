"use server"
import { revalidatePath } from "next/cache";
import { connectDB } from "../database/MongoConnect";
import PaymentHistory from "../database/models/paymentModel/payment";

export const addPaymentHistory = async (paymentHistory) => {
  console.log(paymentHistory)
  try {
    await connectDB();

    const result = await PaymentHistory.create(paymentHistory);
    // console.log(result)
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
    revalidatePath("/dashboard/payment-history")
    return JSON.parse(JSON.stringify({ success: true, data: result }));
  } catch (error) {
    return JSON.parse(JSON.stringify(error));
  }
}

// get one payment
export const getOnePaymentHistory = async (email) => {
  try {
    await connectDB();
    const query = { email: email }
    const result = await PaymentHistory.findOne(query)
    revalidatePath("/:customerid")
    return JSON.parse(JSON.stringify({ success: true, data: result }));
  } catch (error) {
    return JSON.parse(JSON.stringify(error));
  }
} 