import Loading from "../loading";
import { Suspense } from "react";
import TravelList from "./TravelList";
export default function Travels() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <h1 className="text-xl font-extrabold text-pink-600 flex flex-col items-center mx-20 my-16 border-pink-400 border-2 rounded-3xl px-6 py-6 shadow-2xl hover:bg-pink-400">Let me tell you about my trips, what I have seen and discovered. Click each card to see what is the best time to visit the location, a fun fact about the city and a link to the best spots not to miss during your visit!</h1>
        <TravelList />
      </Suspense>
    </main>
  );
}
