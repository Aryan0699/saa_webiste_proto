import Link from "next/link";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between p-1 z-50 bg-[#18181b]">
      <div className="text-white text:xl sm:text-2xl md:text-3xl flex items-center">
        <Image
          src="/saa_logo_no_background.png"
          alt="SAA logo"
          width={100}
          height={100}
          // className="drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
          className="invert"
        />
        <Typewriter
          words={["Society of Alumni Affairs"]}
          cursor
          // cursorColor="#60a5fa"
          cursorBlinking
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
          loop={0}
        />
      </div>
      <nav className="absolute left-1/2 transform -translate-x-1/2 lg:flex hidden space-x-3  bg-[radial-gradient(ellipse_80%_60%_at_top,rgba(255,255,255,0.1),transparent)] border border-[#2c2c2e] px-2 py-1 rounded-full shadow-md text-sm">
        <Link
          href="/"
          className="text-neutral-300 bg-transparent hover:bg-[#2a2a2a] border border-transparent hover:border-[#3d3d3d] px-4 py-2 rounded-full transition"
        >
          Home
        </Link>
        <Link
          href="/teams"
          className="text-neutral-300 bg-transparent hover:bg-[#2a2a2a] border border-transparent hover:border-[#3d3d3d] px-4 py-2 rounded-full transition"
        >
          Team
        </Link>
        <Link
          href="/"
          className="text-neutral-300 bg-transparent hover:bg-[#2a2a2a] border border-transparent hover:border-[#3d3d3d] px-4 py-2 rounded-full transition"
        >
          Events
        </Link>
        <Link
          href="/"
          className="text-neutral-300 bg-transparent hover:bg-[#2a2a2a] border border-transparent hover:border-[#3d3d3d] px-4 py-2 rounded-full transition"
        >
          VisitIIJ
        </Link>
        <Link
          href="/"
          className="text-neutral-300 bg-transparent hover:bg-[#2a2a2a] border border-transparent hover:border-[#3d3d3d] px-4 py-2 rounded-full transition"
        >
          QuickAccess
        </Link>
        <Link
          href="/alumniMap"
          // className="bg-white text-black font-medium px- py-2 rounded-full shadow-sm hover:bg-gray-100 transition"
          className="text-neutral-300 bg-transparent hover:bg-[#2a2a2a] border border-transparent hover:border-[#3d3d3d] px-4 py-2 rounded-full "
        >
          Map
        </Link>
      </nav>

      {/* Hamburger Icon (shown on all screen sizes in this example) */}
      <button
        type="button"
        aria-label="Menu"
        className="mr-3 p-2 rounded text-neutral-300 hover:text-white hover:bg-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#3d3d3d] mb-1.5"
      >
        <svg
          className="h-6 w-6"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
        >
          {/* Hamburger icon SVG paths */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      
    </header>
  );
}
