'use client';
import { TracingBeam } from "@/components/aceternity/traceBeam";
import BlurIn from "@/components/magic/blurIn";
import { motion } from "framer-motion";
import Link from "next/link";
import React from 'react'

const ClientSideRefund = () => {
  return (
    <div>
        <BlurIn
        word="Refund Policy"
        className="text-4xl font-bold text-black dark:text-white"
        />
        <TracingBeam className="px-6 ">
            <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-center px-3 md:px-20 pt-10 pb-6">
                At Crypto Punch, we sincerely appreciate the trust that our users place 
                in us when they purchase our services. Your support not only helps us grow 
                but also motivates us to continuously improve our offerings. We are 
                committed to providing high-quality services, and we want you to be 
                completely satisfied with your purchase.
            </motion.h1>
            <div className="grid-cols-1 w-full px-4 sm:px-12 md:px-16">
            <div className="col-span-1 grid grid-cols-1 mt-8 mb-20 px-4 md:px-16 w-full gap-6">
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <motion.li
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        className="py-3 text-xl"
                    >
                        <h1 className="text-xl">
                            Refund Eligibility
                        </h1>
                        <p className="text-base">
                            If you find that our services are not suited to your needs, 
                            you may request a refund within 48 hours of your purchase. 
                            We understand that circumstances may change, and we want to 
                            ensure that you have a positive experience with us. To 
                            initiate a refund request within this 48-hour window, please 
                            contact our support. We will process your request promptly 
                            and issue a refund as quickly as possible.
                        </p>
                    </motion.li>
                    <motion.li
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        className="py-3 text-xl"
                    >
                        <h1 className="text-xl">
                            Refund Requests After 48 Hours
                        </h1>
                        <p className="text-base">
                            If the 48-hour period has passed, you can still request a 
                            refund under specific conditions. Refund requests made after 
                            48 hours will only be considered if the service has been 
                            used up to 5% of its potential. This means that if you have 
                            utilized our services minimally, we will review your 
                            request for a refund. You must submit this request within 
                            7 days of your original purchase date. After this one-week 
                            period, we will no longer be able to process refund requests.
                        </p>
                    </motion.li>
                    <motion.li
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        className="py-3 text-xl"
                    >
                        <h1 className="text-xl">
                            How to Request a Refund
                        </h1>
                        <p className="text-base">
                            To request a refund, please follow these steps:
                            <ul className="ml-6 list-disc [&>li]:mt-2">
                                <li>Go to <Link href="/support"  className="underline">support</Link> page and choose &quot;Refund Request&quot; from subject.</li>
                                <li>Include your order number and the reason for your refund in detail.</li>
                                <li>Processing may take up to 48 hour to answer, be patient and wait for our email.</li>
                            </ul>
                            Our team will review your request and respond as soon as possible. 
                            We strive to ensure that the refund process is smooth and efficient for our users.
                        </p>
                    </motion.li>
                    <motion.li
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        className="py-3 text-xl"
                    >
                        <h1 className="text-xl">
                            Final Note
                        </h1>
                        <p className="text-base">
                            We value your business and are committed to your satisfaction. 
                            If you have any questions or concerns regarding our refund policy 
                            or your purchase, please do not hesitate to reach out to us. Your 
                            feedback is important to us, and we are here to help ensure that 
                            your experience with Crypto Punch is a positive one. 
                        </p>
                    </motion.li>
                </ul>
            </div>
            </div>
            <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="text-center text-2xl px-0 md:px-20 pt-2">
                Thank you
            </motion.h1>
            <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="text-center px-0 md:px-20 pt-2 pb-12">
                for choosing Crypto Punch as your cryptocurrency API service
                provider. We look forward to serving you and appreciate your 
                understanding of our refund policy.
            </motion.h1>
        </TracingBeam>
    </div>
  )
}

export default ClientSideRefund