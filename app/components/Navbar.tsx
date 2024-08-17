// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar top-0 left-0 w-full p-4  text-white bg-transparent flex items-center justify-between z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl  font-bold">
          My Portfolio
        </Link>
        <div className=" text-xl font-bold space-x-9">
          <Link href="/" className="hover:underline">
            Accueil
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/projects" className="hover:underline">
            Projets
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
