import { model, models, Schema } from "mongoose";

const PaymentSchema = new Schema({
    paymentId: { type: String, required: true},
    paymentDate: { type: String, required: true},
    userProfile : { type: String, required: true},
    userName: { type: String, required: true},
    emailAddress: {type: String, required: true},
    paymentAmount : { type: String, required: true } 

})

const Payment = models.Payment || model("Payment", PaymentSchema)

export default Payment;