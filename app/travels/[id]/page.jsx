import Link from "next/link";
import Image from "next/image";

const baseURL = "https://travel-app-backend-oimo.onrender.com";

async function getTravels(id) {
  try {
    const response = await fetch(`${baseURL}/travel/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      // Next.js revalidation options
      // next: {
      //   revalidate: 0,
      // },
    });

    if (!response.ok) {
      // Handle non-successful responses (status other than 2xx)
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const travels = await response.json();
    // console.log(travels);

    return travels.data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

export default async function travel({ params }) {
  const id = params.id;
  const travel = await getTravels(id);

  return (
    <main className="h-screen m-auto min-max-width">
      <div className="flex justify-center">
        <Link href={`/travels`}>
          <p className="hover:underline mt-4 w-16 text-base text-pink-600 font-semibold">
            Go back
          </p>
        </Link>
        <div className="p-8 w-full leading-loose rounded-lg flex flex-col justify-center items-center" key={travel.id}>
          <h2 className="font-bold text-3xl text-center ">
            {travel.city}, {travel.country}
          </h2>
          <p className="mt-4">Best to visit in: {travel.best_time_to_visit}</p>
          <Image
            className="rounded-2xl border-4 mt-4"
            src={travel.imglink}
            alt={`Image for ${travel.city}`}
            width={300}
            height={300}
            priority
          />
          <a
            className="hover:underline mt-4 text-base text-pink-600 font-semibold"
            href={travel.not_to_miss}
            target="_blank"
            rel="noopener noreferrer"
          >
            Not To Miss!
          </a>
        <div className="flex flex-col items-center mt-4 border-pink-400 border-2 rounded-3xl px-6 py-6 shadow-2xl">
          <h3 className="font-bold text-2xl">Fun Fact</h3>
          <p>{travel.fun_fact}</p>
        </div>
        </div>
      </div>
    </main>
  );
}
