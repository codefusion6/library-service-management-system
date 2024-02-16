import { model, models, Schema } from "mongoose";

const PaymentSchema = new Schema({
    userName: { type: String, required: true},
    paymentDate: { type: String, required: true},
    userProfile : { type: String, required: true},
    userName: { type: String, required: true},
    emailAddress: {type: String, required: true},
    paymentAmount : { type: String, required: true }, 

})

const PaymentHistory = models.PaymentHistory || model("PaymentHistory", PaymentSchema)

export default PaymentHistory;