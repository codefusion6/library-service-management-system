import { getPaymentHistory } from '@/libs/actions/payment.action';
import Image from 'next/image';
import React from 'react';

const PaymentHistory = async () => {
  const { data } = await getPaymentHistory()

  return (
    <div className="container mx-auto mt-8">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b font-bold text-lg">Photo</th>
              <th className="py-2 px-4 border-b font-bold text-lg">Payment ID</th>
              <th className="py-2 px-4 border-b font-bold text-lg">Date</th>
              <th className="py-2 px-4 border-b font-bold text-lg">Username</th>
              <th className="py-2 px-4 border-b font-bold text-lg">Email Address</th>
            </tr>
          </thead>
          <tbody>
            {
              data?.map((items, idx) => (
                <tr key={idx} className='even:bg-slate-300'>
                  <td className='py-2 px-4 border-b'>
                    <Image src={items?.userProfile} alt={`user`} width={30} height={30} className='size-16 rounded-full mx-auto' />
                  </td>
                  <td className="py-2 text-center px-4 border-b">{items.paymentId}</td>
                  <td className="py-2 text-center px-4 border-b">{items?.createdAt}</td>
                  <td className="py-2 text-center px-4 border-b">{items?.userName}</td>
                  <td className="py-2 text-center px-4 border-b">{items?.email}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
