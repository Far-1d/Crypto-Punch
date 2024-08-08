'use client';
import { TracingBeam } from "@/components/aceternity/traceBeam";
import BlurIn from "@/components/magic/blurIn";
import { motion } from "framer-motion";
import React from 'react'

const ClientSideTerms = () => {
  return (
    <div>
        <BlurIn
        word="Terms and Conditions"
        className="text-4xl font-bold text-black dark:text-white"
      />
      <TracingBeam className="px-6 ">
        <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-center px-0 md:px-20 pt-10 pb-6">
        Welcome to Crypto Punch! These Terms and Conditions govern your use of our services 
        as a cryptocurrency API service provider. By accessing or using our services, 
        you agree to comply with and be bound by these terms. 
        If you do not agree with any part of these terms, you must not use our services.
        </motion.h1>
        <div className="grid-cols-1 w-full px-4 sm:px-12 md:px-16">
          <div className="col-span-1 grid grid-cols-1 mt-8 mb-20 px-4 md:px-16 w-full gap-6">
            <ul className="my-6 ml-6 list-decimal [&>li]:mt-2">
              <motion.li
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="py-3"
              >
                At Crypto Punch, we are committed to protecting your privacy and safeguarding 
                your data. As a leading cryptocurrency API service provider, we understand 
                the importance of trust and the value of your information. That's why we have 
                implemented robust security measures and adhere to strict data protection 
                protocols to ensure that your data remains secure and confidential. 
              </motion.li>
              <motion.li
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="py-3"
              >
                When we say "secure", we mean it. Our platform employs multiple layers of cryptography 
                and encoding to protect your data from unauthorized access or misuse. We 
                utilize advanced encryption techniques, such as AES-256 and RSA, to scramble 
                your sensitive information, rendering it unreadable to anyone without the 
                proper decryption keys. Additionally, we implement secure communication 
                protocols like HTTPS and SSL/TLS to encrypt the transmission of data between 
                our servers and your devices, ensuring that your information remains protected 
                even during transit. 
              </motion.li>
              <motion.li
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="py-3"
              >
                We also take great care in handling your data. Our team 
                of security experts regularly monitors our systems for potential vulnerabilities 
                and implements the latest security patches and updates to maintain the highest 
                level of protection. We have strict access controls in place, limiting the 
                number of personnel who can access your data and requiring multiple levels of 
                authentication for any such access. 
              </motion.li>
              <motion.li
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="py-3"
              >
                Your trust is priceless to us, and we treat 
                your data as a valuable asset that we are committed to safeguarding. We have a 
                zero-tolerance policy for any unauthorized access or misuse of your information. 
                If we ever become aware of a data breach or security incident, we will promptly 
                investigate the matter and take appropriate actions to mitigate any potential 
                harm, including notifying you and the relevant authorities as required by law. 
              </motion.li>
              <motion.li
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="py-3"
              >
              We believe that transparency is key to building trust, which is why we are 
              committed to being upfront about our data collection and usage practices. Our 
              Privacy Policy clearly outlines the types of information we collect, how we use 
              it, and with whom we may share it. We will never sell or rent your personal information 
              to third parties for their marketing purposes without your explicit consent. 
              </motion.li>
              <motion.li
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="py-3"
              >
                Your privacy is of utmost importance to us, and we will always strive to protect it. We regularly 
                review and update our security measures and data protection practices to ensure that 
                they remain effective and compliant with the latest regulations and industry standards. 
                If you have any concerns or questions about our privacy practices, please don't 
                hesitate to contact us, We are here to listen and address your 
                concerns to the best of our ability. 
              </motion.li>
              <motion.li
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="py-3"
              >
                By choosing Crypto Punch as your cryptocurrency 
                API service provider, you can rest assured that your data is in safe hands. We are 
                committed to earning and maintaining your trust through our unwavering dedication 
                to privacy and security. Together, let's navigate the exciting world of cryptocurrency 
                with the confidence that your data is protected by the most secure measures in the industry.
              </motion.li>
            </ul>
          </div>
        </div>
        </TracingBeam>
    </div>
  )
}

export default ClientSideTerms