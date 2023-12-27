import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Image
        className="rounded-full mt-10 border-4 border-black drop-shadow-xl shadow-black"
        src="/images/Profile_photo.jpg"
        alt="Profile photo"
        width={300}
        height={200}
      />
      <div className="flex flex-col items-center mt-6 border-pink-400 border-2 rounded-3xl px-6 py-6 shadow-2xl hover:bg-pink-400">
        <h1 className="text-4xl font-extrabold text-pink-600">Martina Zurli</h1>
        <h2 className="text-xl font-semibold my-6">
          This is Wanderlust 🌎&nbsp;
        </h2>
        <p>
          The travel diary, from me to you to share my stories and bring my
          travels to you.
        </p>
      </div>
    </div>
  );
}
