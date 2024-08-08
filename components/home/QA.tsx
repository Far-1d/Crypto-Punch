import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/shadcn/tabs"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/shadcn/accordion"

const QA = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-16'>
        <Tabs defaultValue="account" className="w-[75vw] lg:w-[60vw]">
            <TabsList className='w-wider items-center sm:items-start sm:w-fit'>
                <TabsTrigger value="account" className='text-xs sm:text-sm'>Account</TabsTrigger>
                <TabsTrigger value="payment" className='text-xs sm:text-sm'>Payment</TabsTrigger>
                <TabsTrigger value="security" className='text-xs sm:text-sm'>Security</TabsTrigger>
                <TabsTrigger value="general" className='text-xs sm:text-sm'>Genretal</TabsTrigger>
            </TabsList>
            
            <TabsContent value="account">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className='border-neutral-600'>
                        <AccordionTrigger>Why do i need an account?</AccordionTrigger>
                        <AccordionContent>
                        Althought most of our services are open to public, having an account
                        ensures that you favorite services can be at one place. Alse there are 
                        some paid services that need an account to use. You can signup <a href="#" className='underline'>here</a>.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className='border-neutral-600'>
                        <AccordionTrigger>I can't login to my account. what is the problem?</AccordionTrigger>
                        <AccordionContent>
                        If you haven't used your account for over 3 month, due to our company policies
                        we diable your account, though not deleted. To enable your account please follow these 
                        <a href="#" className='underline'> instructions</a>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className='border-neutral-600'>
                        <AccordionTrigger>Can i restore my account with email?</AccordionTrigger>
                        <AccordionContent>
                        Yes. you can restore you account with email.<br/> contact support to guide you through the steps.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className='border-neutral-600'>
                        <AccordionTrigger>Why am i prompted to activate two-factor login?</AccordionTrigger>
                        <AccordionContent>
                        To ensure account security, it is recommanded to use two-factor login.
                        Activating two-factor is optional and you can ignore the message.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </TabsContent>
            
            <TabsContent value="payment">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className='border-neutral-600'>
                        <AccordionTrigger>Do you have free plans ?</AccordionTrigger>
                        <AccordionContent>
                        We give each new user 14 days trial to test our services. this time starts from the
                        day the user creates an account. Of course, if you feel like you need more time to test
                        the services contact our <a href="#" className='underline'>support</a> to consider your situations.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className='border-neutral-600'>
                        <AccordionTrigger>Do you have refund ?</AccordionTrigger>
                        <AccordionContent>
                        We do have a refund policy which if a user decides to cancel his/her plan
                        before 3 days, it is eligible for refund. If the plan has started more the 3 days ago but not longer than 5,
                        contact our <a href="#" className='underline'>support</a> to check your account, if the user used less than
                        1 percent of the plan resources, it is also eligible for refund.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className='border-neutral-600'>
                        <AccordionTrigger>What are the payment methods ?</AccordionTrigger>
                        <AccordionContent>
                        Payment is accepted using visa card, master card, paypal, google pay 
                        and cryptocurrency. To see the list of accepted crypto currencies click <a href="#" className='underline'>here</a>.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className='border-neutral-600'>
                        <AccordionTrigger>I have completed the payment but my plan is not activated ?</AccordionTrigger>
                        <AccordionContent>
                        Maximum of 1 hour is acceptible for plan activation. in case it passed 1 hour
                        send a message to <a href="#" className='underline'>support</a> with a image of the receite
                        or just the transaction number.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5" className='border-neutral-600'>
                        <AccordionTrigger>I need more custom settings for my plan, is it possible?</AccordionTrigger>
                        <AccordionContent>
                        Yes. We have a Custom option for subscription. To set it up you can directly discuss it with one of our representatives by contacting our team. 
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </TabsContent>
            
            <TabsContent value="security">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className='border-neutral-600'>
                        <AccordionTrigger>How can i make my account more secure?</AccordionTrigger>
                        <AccordionContent>
                        Each user can activate a two-factor step login to ensure his/her account security.<br/>
                        check out the link below to see the <a href="#" className='underline'>instruction</a>.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className='border-neutral-600'>
                        <AccordionTrigger>Is it possible for other to see my actions?</AccordionTrigger>
                        <AccordionContent>
                        No. other people can never see you activities and actions. 
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className='border-neutral-600'>
                        <AccordionTrigger>What are your policies for user data?</AccordionTrigger>
                        <AccordionContent>
                        We always do our best and updating cryptography methods used to pass latest
                        criteria. User data is stored encrypted so under no circumstance can anyone see your data.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </TabsContent>

            <TabsContent value="general">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className='border-neutral-600'>
                        <AccordionTrigger>What is Crypto Punch ?</AccordionTrigger>
                        <AccordionContent>
                        Crypto Punch is the perfect solution for real-time information sourced from all exchanges, offering user-friendly APIs for developers and investors.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className='border-neutral-600'>
                        <AccordionTrigger>Do you support testnet networks?</AccordionTrigger>
                        <AccordionContent>
                        Yes, we support testnet networks for mutiple blockchains. We also offer a free subscription plan to be used over testnet networks. 
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className='border-neutral-600'>
                        <AccordionTrigger>What services do you offer ?</AccordionTrigger>
                        <AccordionContent>
                        We bring a large collection of data to the table, from blockchain statistics to asset price evaluations,
                        from lates news of market to analytic tools. Feel free to test them.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className='border-neutral-600'>
                        <AccordionTrigger>Who are our intended customers?</AccordionTrigger>
                        <AccordionContent>
                        Crypto Puch product suite has multiple use cases. Our infrastructure is designed to best serve any SMEs, enterprises or crypto-enthusiasts who need quick, secure and reliable access to top blockchain nodes. You can check our website to see the crypto and blockchain products that we offer and for any questions, don't hesitate and contact our team.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </TabsContent>
        </Tabs>
    </div>
  )
}

export default QA