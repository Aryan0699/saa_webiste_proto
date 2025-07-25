
    import Link from "next/link"
    import Image from "next/image"
    import { Typewriter } from "react-simple-typewriter"
    export default function Navbar() {
        return (
            <header className="fixed top-0 left-0 w-full bg-transparent flex items-center justify-between p-4 z-80">

                <div className="text-white text:xl sm:text-2xl md:text-3xl flex items-center">
                    <Image
                    src="/saa_logo_no_background.png"
                    alt="SAA logo"
                    width={100}
                    height={100}
                    // className="drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
                    className="invert"
                >
                </Image>
                    <Typewriter
                    words={["Society of Alumni Affairs"]}
                    cursor
                    // cursorColor="#60a5fa"
                    cursorBlinking
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1500    }
                    loop={0}
                    ></Typewriter>
                    
                </div>
                <nav className="absolute left-1/2 transform -translate-x-1/2 lg:flex hidden space-x-3 bg-[#0E122E] p-[4px] px-2 rounded-full border border-[#232D6B] text-md ">    
                    <Link href="/" className="text-white bg-transparent hover:bg-[#161C44] border border-transparent hover:border-[#232D6B] cursor-pointer px-4 py-2 rounded-full">Home</Link>
                    <Link href="/teams" className="text-white bg-transparent hover:bg-[#161C44] border border-transparent hover:border-[#232D6B] cursor-pointer px-4 py-2 rounded-full">Team</Link>
                    <Link href="/" className="text-white bg-transparent hover:bg-[#161C44] border border-transparent hover:border-[#232D6B] cursor-pointer px-4 py-2 rounded-full">Events</Link>
                    <Link href="/" className="text-white bg-transparent hover:bg-[#161C44] border border-transparent hover:border-[#232D6B] cursor-pointer px-4 py-2 rounded-full">VisitIIJ</Link>
                    <Link href="/" className="text-white bg-transparent hover:bg-[#161C44] border border-transparent hover:border-[#232D6B] cursor-pointer px-4 py-2 rounded-full">QuickAccess</Link>
                    <Link href="/alumniMap" className="text-white bg-transparent hover:bg-[#161C44] border border-transparent hover:border-[#232D6B] cursor-pointer px-4 py-2 rounded-full">Map</Link>

                </nav>

                <Link href="/" className="text-white text-md font-sans px-3 py-1 md:px-5 md:py-3 rounded-full bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] font-normal cursor-pointer">Welcome</Link>
            </header>
        )
    }