import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
    const classData = useLoaderData();

    return (
        <div className="min-h-screen bg-[#F8FAFC] py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold text-[#1E293B] mb-1">Checkout</h1>
                <p className="text-[#64748B] mb-8">Complete your payment to enroll in the course</p>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Order Summary */}
                    <div className="lg:w-[380px] shrink-0 order-2 lg:order-1">
                        <div className="bg-white rounded-xl border border-[#E2E8F0] p-6">
                            <h2 className="text-lg font-semibold text-[#1E293B] mb-4">Order Summary</h2>

                            <div className="flex gap-4 mb-5">
                                <img
                                    src={classData?.image}
                                    alt={classData?.title}
                                    className="w-20 h-20 rounded-lg object-cover"
                                />
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-[#1E293B] text-sm leading-snug line-clamp-2 capitalize">
                                        {classData?.title}
                                    </h3>
                                    <p className="text-[#64748B] text-sm mt-1 capitalize">
                                        by {classData?.name}
                                    </p>
                                </div>
                            </div>

                            <div className="border-t border-[#E2E8F0] pt-4 space-y-3">
                                {classData?.duration && (
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#64748B]">Duration</span>
                                        <span className="text-[#1E293B] font-medium">{classData.duration}</span>
                                    </div>
                                )}
                                {classData?.totalLectures && (
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#64748B]">Lectures</span>
                                        <span className="text-[#1E293B] font-medium">{classData.totalLectures}</span>
                                    </div>
                                )}
                            </div>

                            <div className="border-t border-[#E2E8F0] mt-4 pt-4">
                                <div className="flex justify-between text-sm text-[#64748B]">
                                    <span>Subtotal</span>
                                    <span>${classData?.price}</span>
                                </div>
                                <div className="flex justify-between mt-3 text-lg font-bold text-[#1E293B]">
                                    <span>Total</span>
                                    <span>${classData?.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Payment Form */}
                    <div className="flex-1 order-1 lg:order-2">
                        <Elements stripe={stripePromise}>
                            <CheckOutForm />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
