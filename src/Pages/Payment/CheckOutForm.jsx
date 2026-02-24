import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CheckOutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transectionId, setTransectionId] = useState('');
    const [processing, setProcessing] = useState(false);

    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const classData = useLoaderData();

    const { _id, title, name, email, price, image, duration } = classData;
    const totalPrice = parseFloat(price);

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/creat-payment-intent', { courseFee: totalPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        const card = elements.getElement(CardElement);
        if (card == null) return;

        setProcessing(true);
        setError('');

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setError(error.message);
            setProcessing(false);
            return;
        } else {
            setError('');
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'anonymous',
                    email: user?.email || 'anonymous',
                }
            }
        });

        if (confirmError) {
            setError(confirmError.message);
            setProcessing(false);
            return;
        }

        if (paymentIntent.status === 'succeeded') {
            setTransectionId(paymentIntent.id);

            const payment = {
                TeacherName: name,
                teacherEmail: email,
                studentEmail: user.email,
                courseTitle: title,
                courseFee: totalPrice,
                courseDuration: duration,
                courseBanner: image,
                date: new Date(),
                transectionId: paymentIntent.id,
                paymentId: _id,
            };

            try {
                const res = await axiosSecure.post('/payments', payment);

                if (res.data.insertedId) {
                    navigate('/dashboard/myEnrollMent');
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your payment was successful",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    axiosSecure.patch(`/classes/${_id}`, payment)
                        .then(response => {
                            console.log(response.data);
                        });
                }
            } catch (error) {
                console.log(error);
            }
        }

        setProcessing(false);
    };

    const cardElementOptions = {
        style: {
            base: {
                fontSize: '16px',
                color: '#1E293B',
                fontFamily: '"Outfit", sans-serif',
                '::placeholder': {
                    color: '#94A3B8',
                },
            },
            invalid: {
                color: '#EF4444',
            },
        },
    };

    return (
        <div className="bg-white rounded-xl border border-[#E2E8F0] p-6">
            <h2 className="text-lg font-semibold text-[#1E293B] mb-1">Payment Details</h2>
            <p className="text-sm text-[#64748B] mb-6">Enter your card information to complete the purchase</p>

            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label className="block text-sm font-medium text-[#475569] mb-2">
                        Card Information
                    </label>
                    <div className="border border-[#E2E8F0] rounded-lg px-4 py-3.5 focus-within:border-[#3B82F6] focus-within:ring-1 focus-within:ring-[#3B82F6] transition-colors">
                        <CardElement options={cardElementOptions} />
                    </div>
                </div>

                {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 mb-5">
                        <p className="text-red-600 text-sm">{error}</p>
                    </div>
                )}

                {transectionId && (
                    <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-3 mb-5">
                        <p className="text-green-700 text-sm font-medium">Payment successful!</p>
                        <p className="text-green-600 text-xs mt-1">Transaction ID: {transectionId}</p>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}
                    className="w-full py-3 rounded-lg text-white font-semibold text-base cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                        background: (!stripe || !clientSecret || processing)
                            ? '#94A3B8'
                            : 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
                    }}
                >
                    {processing ? 'Processing...' : `Pay $${totalPrice}`}
                </button>

                <div className="flex items-center justify-center gap-2 mt-5 text-[#94A3B8]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span className="text-xs">Secured by Stripe. Your payment information is encrypted.</span>
                </div>
            </form>
        </div>
    );
};

export default CheckOutForm;
