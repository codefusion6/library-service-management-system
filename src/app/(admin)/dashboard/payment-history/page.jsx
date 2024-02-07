const PaymentHistory = ({ paymentData }) => {
    return (
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {paymentData.map((payment, index) => (
            <div key={index} className="bg-white p-4 border rounded-lg">
              <div className="mb-2 font-bold text-lg">Payment ID</div>
              <div className="mb-4">{payment.paymentID}</div>
              
              <div className="mb-2 font-bold text-lg">Date</div>
              <div className="mb-4">{payment.date}</div>
              
              <div className="mb-2 font-bold text-lg">Username</div>
              <div className="mb-4">Replace with actual username</div>
              
              <div className="mb-2 font-bold text-lg">Email Address</div>
              <div className="mb-4">Replace with actual email address</div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  // Mock data for testing
  PaymentHistory.defaultProps = {
    paymentData: [
      {
        paymentID: "stripe_payment_id_1",
        date: "2024-02-07",
      },
      {
        paymentID: "stripe_payment_id_2",
        date: "2024-02-08",
      },
      // Add more mock data as needed
    ],
  };
  
  export default PaymentHistory;
  