import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useLoaderData } from 'react-router-dom';

const PaymentHistory = () => {
    const { user } = useAuth()
    // const [payment, setPayment] = useState() || []
    const memberEmail =user?.email
    // const { user } = useContext(AuthContext) || {}
    const data = useLoaderData()
    console.log()

    const payments = data?.filter(payment  => payment.email  == user?.email  )

    console.log( payments )


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Email</th>
                            <th> Transaction Id </th>
                            <th> Paid Amount </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}


                        {
                            payments?.map((payment , ix) =>
                                <tr>
                                    <th> {ix + 1} </th>
                                    <td>{payment?.email } </td>
                                    <td>{payment?.id } </td>
                                    {/* <td>{user?.name} </td> */}
                                    <td>{payment?.price  } </td>


                                </tr>

                            )
                        }

                        {/* row 3 */}

                    </tbody>
                </table>
            </div>

        </div>
       
    );
};

export default PaymentHistory;