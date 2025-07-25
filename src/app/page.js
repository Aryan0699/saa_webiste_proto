"use client"
import Navbar from "@/components/Navbar";


import Image from "next/image";
export default function Home() {
  return (
    <div className="relative w-full min-h-screen font-sans overflow-hidden">
      
    <div className="w-full">
        <Navbar/>
    </div>
    <div className="w-screen h-screen relative bg-transparent flex flex-col items-center justify-center">
      
      <Image
        src="/cardbackground.svg"
        alt="background_hero"
        className="absolute bottom-0 w-full md:w-5/6 object-contain -z-10 mask-b-from-0"
        width={1440}
        height={818}
      ></Image>

      <Image
        src="/hero-bg-support.svg"
        alt="background"
        width={853}
        height={750}
        className="absolute top-0 right-0 w-[800px] object-contain -z-10 scale-x-[-1]"
      ></Image>
      <Image
        src="/hero-bg-support.svg"
        alt="background"
        width={853}
        height={750}
        className="absolute top-0 left-0 w-[800px] object-contain -z-10s"
      ></Image>

     <Image
        src="/saa_logo_no_background.png"
        alt="SAA logo"
        width={400}
        height={400}
        // clas 
        className="invert mt-7"
      ></Image>
      
      <p className="w-1/2 text-lg mb-8 text-[10px] md:text-[14px] text-[#A7ADBE] absolute bottom-15 text-center">
        The SAA community enhances the institute and student growth through organizing events like Senate Introduction, Prometeo X SAA, Convocation & Alumni Induction Dinner, Dashak 3.0 + Alumni Day, graduating batch see-off ceremony, Soon to be Alumnus, and Ask an Alumnus. The society fosters strong connections and facilitates continuous improvement and development.
      </p>
      

    </div>
  
    </div>
  );
}
