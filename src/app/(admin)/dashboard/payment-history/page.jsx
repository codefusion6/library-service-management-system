import PaymentHistory from '@/components/paymentSuccessInfo/PaymentHistory';
import { getPaymentHistory } from '@/libs/actions/payment.action';
import React from 'react';

const PaymentHistorypage = async () => {
  const { data } = await getPaymentHistory()

  return (
    <section>
      <h1 className="text-3xl uppercase text-center font-bold mb-8">All Payment History</h1>
      <PaymentHistory paymentHistoryData={data}></PaymentHistory>
    </section>
  );
};

export default PaymentHistorypage;
