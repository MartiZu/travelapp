import Link from "next/link";
import Image from "next/image";
import Switch from "./Switch";

export default function Header() {
  return (
    <nav className="flex items-center px-4 border-b-2 py-2 border-b-gray-100 justify-between w-full">
      {/* <Image src="" alt="Dojo" width={100}></Image> */}
      <div className="flex items-center gap-6">
        <Link className="hover:underline text-base" href="/">
          Home
        </Link>
        <Link className="hover:underline text-base" href="/travels">
          Travels
        </Link>
        <Link className="hover:underline text-base" href="/comments">
          Comments
        </Link>
        <Link className="hover:underline text-base" href="/newsLetter">
          Newsletter
        </Link>
        <Link className="hover:underline text-base" href="/addTravel">
          <button className="bg-pink-600 py-3 px-8 text-white rounded-2xl">
            Add Travel
          </button>
        </Link>
      </div>
      <div>
        <Switch />
      </div>
    </nav>
  );
}
