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
    console.log(travels);

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
    <main className="h-screen">
      <div className="flex justify-center">
        <div
          className="mx-32 my-8 p-8 w-full max-w-4xl leading-loose rounded-lg"
          key={travel.id}
        >
          <h2 className="font-bold text-3xl pb-4">
            {travel.city}, {travel.country}
          </h2>
          <Image
            src={travel.imglink}
            alt={`Image for ${travel.city}`}
            width={400}
            height={300}
            priority
          />
          <p>{travel.best_time_to_visit}</p>
          <p>{travel.fun_fact}</p>
          <a
            className="underline"
            href={travel.not_to_miss}
            target="_blank"
            rel="noopener noreferrer"
          >
            Not To Miss!
          </a>
          <h3 className="font-bold text-2xl pt-4">Fun Fact</h3>
          <p>{travel.fun_fact}</p>

          <Link href={`/travels`}>
            <p className="underline">Go back</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
