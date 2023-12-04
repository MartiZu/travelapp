import Image from 'next/image';
import sub from '../public/images/Sub-img.jpg';
import girl from "../public/images/girl.png";
import NewsletterForm from './components/NewsletterForm';


export default function Home() {
  return (
  <>
  <NewsletterForm /> 
  </>
  //   <main className="flex min-h-screen flex-col items-center justify-between p-24">
  //     <div
  //       id="top-container"
  //       className="w-screen h-96 flex flex-row items-center"
  //     >
  //       <div id="left-container" className="flex flex-col p-8 mx-10 rounded-lg border-2 border-black border-solid shadow-2xl">
  //         <div id="data-form" className="grid grid-cols-2 gap-4" >
  //           <h2 className="col-span-2 text-4xl p-4">
  //             Welcome to Wanderlust.
  //           </h2>
  //           <p className="col-span-2 text-justify text-xl p-4">The travel diary you did not know you needed.</p>
  //           <p className="col-span-2 text-justify text-sm p-4">Register to stay always up to date...</p>
  //           <input placeholder="Name" className="p-2 rounded-lg border-2 border-black border-solid shadow-2xl" />
  //           <input placeholder="Email" className="p-2 rounded-lg border-2 border-black border-solid shadow-2xl" />
  //           <button className="col-span-2 p-2 bg-blue-500 text-white rounded-md">
  //             Submit
  //           </button>
  //         </div>
  //       </div>
  //       <div id="right-container" className="relative w-1/2 h-full mx-10">
  //         <Image
  //           className="object-cover w-full h-full rounded-md"
  //           src={sub}
  //           alt="A sub swimming underwater"
  //           layout="fill"
  //         />
  //       </div>
  //     </div>
  //   </main>
  );
}
