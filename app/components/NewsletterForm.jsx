"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import sub from '../../public/images/Sub-img.jpg';

export default function NewsletterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Simulate storing data (you can replace this with actual logic)
    console.log('Data Submitted:', formData);

    // Simulate displaying a message and resetting the form
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '' });
    }, 6000);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div id="top-container" className="w-screen h-96 flex flex-row items-center">
        <div id="left-container" className="flex flex-col p-8 mx-10 rounded-lg border-2 border-black border-solid shadow-2xl">
          <div id="data-form" className="grid grid-cols-2 gap-4">
            <h2 className="col-span-2 text-4xl p-4 animate-ping">Welcome to Wanderlust.</h2>
            <p className="col-span-2 text-justify text-xl p-4 animate-bounce">The travel diary you did not know you needed.</p>
            <p className="col-span-2 text-justify text-sm p-4 animate-pulse">Register to stay always up to date...</p>
            {submitted ? (
              <p className="col-span-2 text-justify text-xl p-4">
                Thank you for registering! You will receive our newsletter.
              </p>
            ) : (
              <>
                <input
                  placeholder="Name"
                  className="p-2 rounded-lg border-2 border-black border-solid shadow-2xl"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <input
                  placeholder="Email"
                  className="p-2 rounded-lg border-2 border-black border-solid shadow-2xl"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <button
                  className="col-span-2 p-2 bg-blue-500 text-white rounded-md"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </>
            )}
          </div>
        </div>
        <div id="right-container" className="relative w-1/2 h-full mx-10">
          <Image
            className="object-cover w-full h-full rounded-md"
            src={sub}
            alt="A sub swimming underwater"
            layout="fill"
          />
        </div>
      </div>
    </main>
  );
}
