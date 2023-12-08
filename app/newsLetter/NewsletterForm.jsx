"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function NewsletterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
    console.log("Data Submitted:", formData);

    // Simulate displaying a message and resetting the form
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "" });
    }, 6000);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        id="top-container"
        className="w-screen h-96 flex flex-row items-center"
      >
        <div
          id="left-container"
          className="flex flex-col w-1/2 h-64 p-8 mx-10 rounded-2xl border-2 border-black border-solid shadow-2xl"
        >
          <div id="data-form" className="grid grid-cols-2 gap-4">
            <h2 className="text-xl col-span-2 text-justify p-4 animate-pulse">
              Register to stay always up to date...
            </h2>
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
        <div id="right-container" className="relative w-1/2 h-64 mx-10">
          <Image
            className="object-cover w-full h-full rounded-2xl"
            src="/images/Sub-img.jpg"
            alt="A sub swimming underwater"
            width={300}
            height={200}
          />
        </div>
      </div>
    </main>
  );
}
