import Link from "next/link";
import Image from "next/image";
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
    <main className="flex flex-col justify-center items-center shrink-0">
      <div className="grid grid-cols-2 gap-4 p-8 m-auto">
        {travels.map((travel) => (
          <div
            className="mx-32 my-8 p-8 w-full max-w-4xl leading-loose rounded-lg"
            key={travel.id}
          >
            <Link href={`/travels/${travel.id}`}>
              <h2 className="font-bold text-xl">
                {travel.city}, {travel.country}
              </h2>
              <p>{travel.best_time_to_visit}</p>

              <p>{travel.fun_fact}</p>
              <p>{travel.not_to_miss}</p>
              {/* <Image
                src={travel.imglink}
                alt={`Image for ${travel.city}`}
                width={100}
                height={24}
                priority
              /> */}
            </Link>
          </div>
        ))}
        {travels.length === 0 && (
          <p className="text-center text-2xl">No travels found.</p>
        )}
      </div>
    </main>
  );
}
