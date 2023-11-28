"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
const baseURL = "https://travel-app-backend-oimo.onrender.com";

export default function AddTravelForm() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [visittime, setVisittime] = useState("");
  const [funfact, setFunfact] = useState("");
  const [image, setImage] = useState("");
  const [notmiss, setNotmiss] = useState("");

  const router = useRouter();

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const newTravel = {
        city,
        country,
        best_time_to_visit: visittime,
        fun_fact: funfact,
        imglink: image,
        not_to_miss: notmiss,
      };

      const response = await fetch(`${baseURL}/travel`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTravel),
      });

      if (response.ok) {
        // Reset the form fields
        setCity("");
        setCountry("");
        setVisittime("");
        setFunfact("");
        setImage("");
        setNotmiss("");
        router.push("/travel");
      } else {
        console.error("Failed to fetch:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <form
      className="flex flex-row justify-center items-center border-2 border-black border-solid shadow-2xl"
      onSubmit={submitForm}
    >
      {/* <div></div> */}
      <div className="boarder-radius:0.5rem bg-gray-100 w-full max-w-7xl text-2xl">
        <h1 className="text-center m-4 px-64 text-5xl p-2">
          Add a new Travel Destination
        </h1>
        <div className="flex flex-row w-full p-4 border-2 border-black border-solid">
          <div className="left m-4 w-1/2 flex flex-col justify-evenly">
            <label className="flex flex-row items-center gap-3 h-16">
              <p>City</p>
              <input
                className="w-full text-base h-8 px-3"
                type="text"
                required
                placeholder="What city did you visit"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </label>
            <label className="flex flex-row items-center gap-9 h-16">
              <p className="">Country</p>
              <input
                className="w-full text-base h-8 px-3"
                type="text"
                required
                placeholder="What country is this in?"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </label>
            <label className="flex flex-row items-center gap-5">
              <p>Best time to visit</p>
              <input
                className="w-full text-base h-8 px-3"
                type="text"
                required
                placeholder="Your room number"
                name="room"
                value={visittime}
                onChange={(e) => setVisittime(e.target.value)}
              />
            </label>
            <label className="flex flex-row items-center gap-3">
              <p>Link to an Image</p>
              <input
                className="w-full text-base h-8 px-3"
                type="text"
                required
                placeholder="Copy the link to an image"
                name="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </label>
            <label className="flex flex-row items-center gap-3">
              <p>Not to miss..</p>
              <input
                className="w-full text-base h-8 px-3"
                type="text"
                required
                placeholder="Tell us what you should not miss"
                name="notmiss"
                value={notmiss}
                onChange={(e) => setNotmiss(e.target.value)}
              />
            </label>
          </div>
          <div className="right w-1/2 m-4 p-4">
            {/* <p>Description</p> */}
            <textarea
              className="h-full w-full text-base"
              required
              placeholder="Tell a fun fact"
              name="description"
              value={funfact}
              onChange={(e) => setFunfact(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-row justify-center mt-4">
          <button
            type="submit"
            className="bg-pink-600 text-white mb-4 py-3 px-9 rounded-2xl"
          >
            Submit!
          </button>
        </div>
      </div>
    </form>
  );
}
