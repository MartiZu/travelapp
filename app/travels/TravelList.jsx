import Link from "next/link";
import Image from "next/image";
import img from "../images/image-file.png"
const baseURL = "https://travel-app-backend-oimo.onrender.com";

async function getTravels() {
  try {
    // Simulate a delay (remove this line in production)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await fetch(`${baseURL}/travel`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      // Handle non-successful responses (status other than 2xx)
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const travels = await response.json();
    console.log(travels);
    return travels.data;
  } catch (error) {
    // Log the error to the console for debugging
    console.error("Fetch error:", error);

    // Rethrow the error to indicate that the fetch operation failed
    throw error;
  }
}

export default async function TravelList() {
  const travels = await getTravels();
  console.log(travels);

  return (
    <main className="flex flex-col justify-center items-center shrink-0 m-20">
      <div className="grid grid-cols-2 gap-6 p-2">
        {travels.map((travel) => (
          <div
            className="grid grid-cols-3 p-8 w-full max-w-4xl leading-loose rounded-lg border-2 border-black border-solid shadow-2xl"
            key={travel.id}
          >
            <div className="col-span-2">
              <Link href={`/travels/${travel.id}`}>
                <h2 className="font-bold text-xl">
                  {travel.city}, {travel.country}
                </h2>
                <p>{travel.best_time_to_visit}</p>
                <p>{travel.fun_fact}</p>
                <p className="underline">{travel.not_to_miss}</p>
              </Link>
            </div>

            <div className="p-4">
              <Image src={img} placeholder="blur" blurDataURL="" alt="icon"/>
            </div>
          </div>
        ))}
        {travels.length === 0 && (
          <p className="text-center text-2xl">No travels found.</p>
        )}
      </div>
    </main>
  );
}
