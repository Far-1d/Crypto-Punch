'use client';
import { TracingBeam } from "@/components/aceternity/traceBeam";
import BlurIn from "@/components/magic/blurIn";
import { motion } from "framer-motion";
import React from 'react'

const ClientSidePrivacy = () => {
  return (
    <div>
        <BlurIn
        word="Privacy Policy"
        className="text-4xl font-bold text-black dark:text-white"
        />
        <TracingBeam className="px-6 ">
            <div className="grid-cols-1 w-full px-4 sm:px-12 md:px-16">
                <div className="col-span-1 grid grid-cols-1 my-20 px-4 md:px-16 w-full gap-6">
                    <motion.p
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    >
                    At Crypto Punch, we are committed to protecting your privacy and safeguarding 
                    your data. As a leading cryptocurrency API service provider, we understand 
                    the importance of trust and the value of your information. That&apos;s why we have 
                    implemented robust security measures and adhere to strict data protection 
                    protocols to ensure that your data remains secure and confidential. 
                    </motion.p>
                    <motion.p
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    >
                    When we say &quot;secure&quot;, we mean it. Our platform employs multiple layers of cryptography 
                    and encoding to protect your data from unauthorized access or misuse. We 
                    utilize advanced encryption techniques, such as AES-256 and RSA, to scramble 
                    your sensitive information, rendering it unreadable to anyone without the 
                    proper decryption keys. Additionally, we implement secure communication 
                    protocols like HTTPS and SSL/TLS to encrypt the transmission of data between 
                    our servers and your devices, ensuring that your information remains protected 
                    even during transit. 
                    </motion.p>
                    <motion.p
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    >
                    We also take great care in handling your data. Our team 
                    of security experts regularly monitors our systems for potential vulnerabilities 
                    and implements the latest security patches and updates to maintain the highest 
                    level of protection. We have strict access controls in place, limiting the 
                    number of personnel who can access your data and requiring multiple levels of 
                    authentication for any such access. 
                    </motion.p>
                    <motion.p
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    >
                    Your trust is priceless to us, and we treat 
                    your data as a valuable asset that we are committed to safeguarding. We have a 
                    zero-tolerance policy for any unauthorized access or misuse of your information. 
                    If we ever become aware of a data breach or security incident, we will promptly 
                    investigate the matter and take appropriate actions to mitigate any potential 
                    harm, including notifying you and the relevant authorities as required by law. 
                    </motion.p>
                    <motion.p
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    >
                    We believe that transparency is key to building trust, which is why we are 
                    committed to being upfront about our data collection and usage practices. Our 
                    Privacy Policy clearly outlines the types of information we collect, how we use 
                    it, and with whom we may share it. We will never sell or rent your personal information 
                    to third parties for their marketing purposes without your explicit consent. 
                    </motion.p>
                    <motion.p
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    >
                    Your privacy is of utmost importance to us, and we will always strive to protect it. We regularly 
                    review and update our security measures and data protection practices to ensure that 
                    they remain effective and compliant with the latest regulations and industry standards. 
                    If you have any concerns or questions about our privacy practices, please don&apos;t 
                    hesitate to contact us, We are here to listen and address your 
                    concerns to the best of our ability. 
                    </motion.p>
                    <motion.p
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    >
                    By choosing Crypto Punch as your cryptocurrency 
                    API service provider, you can rest assured that your data is in safe hands. We are 
                    committed to earning and maintaining your trust through our unwavering dedication 
                    to privacy and security. Together, let&apos;s navigate the exciting world of cryptocurrency 
                    with the confidence that your data is protected by the most secure measures in the industry.
                    </motion.p>
                </div>
            </div>
        </TracingBeam>
    </div>
  )
}

export default ClientSidePrivacy