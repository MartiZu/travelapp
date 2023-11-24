import Image from 'next/image';
import sub from './assets/images/Sub-img.jpg';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        id="top-container"
        className="w-screen h-96 flex flex-row px-8 items-center p-6"
      >
        <div id="left-container" className="flex flex-col p-8">
          <div id="data-form" className="grid grid-cols-2 gap-4">
            <h2 className="col-span-2 text-justify text- text-4xl p-4">
              Welcome to Wanderlust. The travel diary you did not know you needed.
            </h2>
            <input placeholder="Name" className="p-2" />
            <input placeholder="Email" className="p-2" />
            <button className="col-span-2 p-2 bg-blue-500 text-white rounded-md">
              Submit
            </button>
          </div>
        </div>
        <div id="right-container" className="relative w-1/2 h-full">
          <Image
            className="object-cover w-full h-full rounded-md"
            src={sub}
            alt="A sub swimming underwater"
            layout="fill"
          />
        </div>
      </div>
    </main>
  );
}
