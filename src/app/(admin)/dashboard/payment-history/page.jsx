import React from 'react';

const PaymentHistory = ({ paymentData }) => {
  return (
    <div className="container mx-auto mt-8">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b font-bold text-lg">Payment ID</th>
              <th className="py-2 px-4 border-b font-bold text-lg">Date</th>
              <th className="py-2 px-4 border-b font-bold text-lg">Username</th>
              <th className="py-2 px-4 border-b font-bold text-lg">Email Address</th>
            </tr>
          </thead>
          <tbody>
            {paymentData.map((payment, index) => (
              <tr key={index} className={(index % 2 === 0) ? 'bg-gray-100' : ''}>
                <td className="py-2 px-4 border-b">{payment.paymentID}</td>
                <td className="py-2 px-4 border-b">{payment.date}</td>
                <td className="py-2 px-4 border-b">Replace with actual username</td>
                <td className="py-2 px-4 border-b">Replace with actual email address</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

PaymentHistory.defaultProps = {
  paymentData: Array.from({ length: 10 }, (_, index) => ({
    paymentID: `stripe_payment_id_${index + 1}`,
    date: `2024-02-${index + 1 < 10 ? '0' : ''}${index + 1}`,
  })),
};

export default PaymentHistory;