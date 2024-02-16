import { model, models, Schema } from "mongoose";

const PaymentSchema = new Schema({
    amount_received: { type: String, required: true },
    paymentId: { type: String, required: true },
    userName: { type: String, required: true },
    email: { type: String, required: true },
    userProfile: { type: String, required: true },
    createdAt: { type: String, required: true }

})

const PaymentHistory = models.PaymentHistory || model("PaymentHistory", PaymentSchema)

export default PaymentHistory;