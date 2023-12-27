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
      className="flex flex-row justify-center items-center border-2 rounded-2xl border-black border-solid shadow-2xl m-auto min-max-width"
      onSubmit={submitForm}
    >
      {/* <div></div> */}
      <div className="boarder-radius:0.5rem4 w-full max-w-7xl text-2xl ">
        <h1 className="text-center m-4 text-5xl p-2 ">
          Add a new Travel Destination
        </h1>
        <div className="flex flex-row w-full p-4 border-1 border-black border-solid ">
          <div className="left w-1/2 m-4 grid grid-cols-2 gap-6">
            <label className="flex flex-row items-center col-span-2">
              {/* <p>City</p> */}
              <input
                className="w-full text-base h-8 px-3 rounded-xl border-2 border-black border-solid shadow-2xl"
                type="text"
                required
                placeholder="What city did you visit?"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </label>
            <label className="flex flex-row items-center col-span-2">
              {/* <p className="">Country</p> */}
              <input
                className="w-full text-base h-8 px-3 rounded-xl border-2 border-black border-solid shadow-2xl"
                type="text"
                required
                placeholder="What country is the city in?"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </label>
            <label className="flex flex-row items-center gap-5 col-span-2">
              {/* <p>Best time to visit</p> */}
              <input
                className="w-full text-base h-8 px-3 rounded-xl border-2 border-black border-solid shadow-2xl"
                type="text"
                required
                placeholder="When is the best time to visit?"
                name="room"
                value={visittime}
                onChange={(e) => setVisittime(e.target.value)}
              />
            </label>
            <label className="flex flex-row items-center gap-3 col-span-2">
              {/* <p>Link to an Image</p> */}
              <input
                className="w-full text-base h-8 px-3 rounded-xl border-2 border-black border-solid shadow-2xl"
                type="text"
                required
                placeholder="Copy the HTTP link to an image of the city"
                name="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </label>
            <label className="flex flex-row items-center gap-3 col-span-2">
              {/* <p>Not to miss..</p> */}
              <input
                className="w-full text-base h-8 px-3 rounded-xl border-2 border-black border-solid shadow-2xl"
                type="text"
                required
                placeholder="Tell us about something not to miss"
                name="notmiss"
                value={notmiss}
                onChange={(e) => setNotmiss(e.target.value)}
              />
            </label>
          </div>
          <div className="right w-1/2 mx-4 p-4">
            {/* <p>Description</p> */}
            <textarea
              className="h-full w-full p-2 text-base rounded-xl border-2 border-black border-solid shadow-2xl"
              required
              placeholder="Tell us a fun fact about something related to this city"
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
