import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
// import Swal from 'sweetalert2';

const CheckoutForm = () => {
  // const [rentP, setRent] = useState()
  const { user, loading } = useAuth();
  const userEmail = user?.email
  const axiosPublic = useAxiosPublic()

  // console.log( user?.email)
  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('')
  const [transactionId, setTransactionId] = useState('');

  console.log( clientSecret )
  const stripe = useStripe();
  const elements = useElements();


  const { data: agreements = [],refetch } = useQuery({
    queryKey: ['agreements'],
    queryFn: async () => {
      const res = await axiosPublic.get('/agreements')
      return res.data
    }

  })

  const agreementData = agreements?.filter(agreement => agreement?.email == userEmail && agreement?.status == 'checked')

  const totalPrice = agreementData[0]?.rent
  const id = agreementData[0]?._id
  // console.log(totalPrice)



  useEffect(() => {
    axiosPublic.post("/create-payment-intent", {
      price: totalPrice ,
      // name : 'kamrul',
      //   email : 'djj',
      //   address : 'kkk'
    })
      .then(res => {
        console.log(res.data.clientSecret  ,'clientSecret'   )
        setClientSecret(res.data.clientSecret)
      })

  }, [axiosPublic, totalPrice ,user?.email])


  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });



    if (error) {
      console.log('payment error', error);
      setError(error.message);
    }
    else {
      console.log('payment method', paymentMethod)
      // setTransactionId(paymentMethod.id);
      setError('');
    }
console.log( clientSecret )

   // confirm payment
   const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
        card: card,
        billing_details: {
            email: user?.email || 'anonymous',
            name: user?.displayName || 'anonymous'
        }
    }
})

    if (confirmError) {
      console.log('confirm error' ,confirmError   )
    }
    else {
      console.log('payment intent', paymentIntent)

      if (paymentIntent.status === 'succeeded') {
        console.log('transaction id', paymentIntent.id);

        toast.success( 'Payment Successful' )
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: " Thank you . Payment Succeessful ",
          showConfirmButton: false,
          timer: 1500
        });
        setTransactionId(paymentIntent.id);

        // now save the payment in the database
        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(), // utc date convert. use moment js to 
         id,
          // cartIds: cart.map(item => item._id),
          // menuItemIds: cart.map(item => item.menuId),
          status: 'pending'
        }

        const res = await axiosPublic.post('/payments', payment);
        console.log('payment saved', res.data);
        refetch();
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank you ",
            showConfirmButton: false,
            timer: 1500
          });
          // navigate('/dashboard/paymentHistory')
        }

      }

    }


  }

  return (
    <div>
      CheckoutForm
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button disabled={ !stripe || !clientSecret  }  className='btn btn-primary ' type="submit" disabled={!stripe}>
          Pay 
        </button>

        <p className="text-red-600">{error}</p>
            {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
        
        
      </form>



    </div>
  );
};

export default CheckoutForm;