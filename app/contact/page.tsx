'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const faqs = [
  {
    question: 'RETURNS & EXCHANGES',
    answer:
      'All purchases can be returned within 30 days for a full refund. Items must be unworn with original tags attached. See our returns page for full details',
  },
  {
    question: 'SHIPPING INFORMATION',
    answer:
      'We offer free standard shipping on all orders within the continental US. International shipping is available to select countries. View our shipping page for delivery times and rates.',
  },
  {
    question: 'ORDER TRACKING',
    answer:
      "Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account or entering your order number above.",
  },
  {
    question: 'SIZE & FIT',
    answer:
      'Refer to our detailed size guide for measurements, located on our product pages. For specific fit questions, email our support team at support@axiom.com with your height, weight, and usual size.',
  },
  {
    question: 'WHOLESALE INQUIRIES',
    answer:
      'For wholesale partnership opportunities, please email wholesale@axiom.com with details about your business.',
  },
];

export default function Contact() {
  const [openIndex, setOpenIndex] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen ">
      <div className="flex-1 flex flex-col border-r border-neutral-500">
        <div className="border-b border-neutral-500 p-8">
          <span className="font-bold tracking-wide text-5xl">
            WAYS TO REACH US
          </span>
        </div>
        <div className="flex flex-col gap-4 md:flex-row p-8">
          <div className="flex flex-col gap-4 text-xl font-bold flex-1">
            <div className="flex flex-col gap-2">
              <span>EMAIL</span>
              <span>SUPPORT@RAVEN.COM</span>
            </div>
            <div className="flex flex-col gap-2">
              <span>PHONE</span>
              <span>(555) 123-4567</span>
            </div>
            <div className="flex flex-col gap-2">
              <span>HEAD OFFICE</span>
              <span className="text-neutral-500">
                15 MERCER STREET LONDON, SE1 1NW
              </span>
            </div>
          </div>
          <div className="flex flex-col font-bold gap-4 text-xl text-neutral-500 justify-center flex-1">
            <span className="text-white">SOCIALS</span>
            <motion.div
              whileHover={{ color: 'white' }}
              transition={{ duration: 0.3 }}
            >
              <Link href={'https://www.instagram.com/'}>INSTAGRAM</Link>
            </motion.div>
            <motion.div
              whileHover={{ color: 'white' }}
              transition={{ duration: 0.3 }}
            >
              <Link href={'https://x.com/home'}>X / TWITTER</Link>
            </motion.div>
            <motion.div
              whileHover={{ color: 'white' }}
              transition={{ duration: 0.3 }}
            >
              <Link href={'https://www.youtube.com/'}>YOUTUBE</Link>
            </motion.div>
            <motion.div
              whileHover={{ color: 'white' }}
              transition={{ duration: 0.3 }}
            >
              <Link href={'https://www.facebook.com/'}>FACEBOOK</Link>
            </motion.div>
            <motion.div
              whileHover={{ color: 'white' }}
              transition={{ duration: 0.3 }}
            >
              <Link href={'https://www.twitch.tv/'}>TWITCH</Link>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col flex-1 p-8">
          <span className="font-bold text-2xl">FAQ</span>
          <div className="mt-4 border border-neutral-500">
            {faqs.map((faq, index) => (
              <div key={index}>
                <motion.div
                  className="p-4 border-b border-neutral-500 font-bold cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                  whileHover={{ color: 'white' }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.question}
                </motion.div>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="p-4 text-neutral-400">
                    <span>{faq.answer}</span>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 p-8">
        <span className="font-bold tracking-wide text-5xl">GET IN TOUCH</span>
        <div className="mt-4 flex flex-col gap-4">
          {[
            'Subject',
            'First Name',
            'Last Name',
            'Email',
            'Phone Number',
            'Order Number',
          ].map((placeholder, index) => (
            <motion.input
              key={index}
              placeholder={`${placeholder}*`}
              className="bg-transparent placeholder:text-neutral-500 w-full p-2 border-b border-neutral-500"
              onFocus={() => setFocusedInput(index)}
              onBlur={() => setFocusedInput(null)}
              animate={{
                backgroundColor:
                  focusedInput === index ? '#737373' : 'transparent',
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
          ))}
          <motion.textarea
            placeholder="Your Message*"
            className="bg-transparent placeholder:text-neutral-500 w-full p-2 border-b border-neutral-500"
            onFocus={() => setFocusedInput('textarea')}
            onBlur={() => setFocusedInput(null)}
            animate={{
              backgroundColor:
                focusedInput === 'textarea' ? '#737373' : 'transparent',
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
          <button className="font-bold text-2xl bg-white rounded-sm text-black p-2">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}
