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
          <p className="hover:underline mt-2 w-16 text-base text-pink-600 font-semibold">
            Go back
          </p>
        </Link>
        <div
          className="p-8 w-full max-w-4xl leading-loose rounded-lg"
          key={travel.id}
        >
          <div className="flex flex-col justify-between">
            <h2 className="font-bold text-3xl text-center flex justify-center items-center">
              {travel.city}, {travel.country}
            </h2>
            <p>{travel.best_time_to_visit}</p>
            <p>{travel.fun_fact}</p>
          </div>
          <div>
            <Image
              className="rounded-2xl mt-10 border-4 "
              src={travel.imglink}
              alt={`Image for ${travel.city}`}
              width={200}
              height={300}
              priority
            />
            <a
              className="underline"
              href={travel.not_to_miss}
              target="_blank"
              rel="noopener noreferrer"
            >
              Not To Miss!
            </a>
          </div>
          <div className="flex flex-col items-center mt-6 border-pink-400 border-2 rounded-3xl px-6 py-6 shadow-2xl hover:bg-pink-400">
            <h3 className="font-bold text-2xl pt-4">Fun Fact</h3>
            <p>{travel.fun_fact}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
