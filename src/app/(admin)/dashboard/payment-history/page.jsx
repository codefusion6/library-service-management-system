import PaymentHistory from '@/components/paymentSuccessInfo/PaymentHistory';
import { getPaymentHistory } from '@/libs/actions/payment.action';
import React from 'react';

const PaymentHistorypage = async () => {
  const { data } = await getPaymentHistory()

  return (
    <section>
      <PaymentHistory paymentHistoryData={data}></PaymentHistory>
    </section>
  );
};

export default PaymentHistorypage;
