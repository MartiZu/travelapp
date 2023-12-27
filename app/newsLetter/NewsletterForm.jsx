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
    <main className="px-6 flex min-h-screen flex-col items-center m-auto min-max-width">
        <section id="img-container" className="py-6">
          <Image
            className="object-cover h-full rounded-2xl shadow-2xl items-center"
            src="/images/Sub-img.jpg"
            alt="A sub swimming underwater"
            width={480}
            height={200}
          />
        </section>
        <section
          id="form-container"
          className="flex flex-col h-64 p-8 rounded-2xl border-2 border-black border-solid shadow-2xl"
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
        </section>
    </main>
  );
}
