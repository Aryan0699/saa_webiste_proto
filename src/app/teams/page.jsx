"use client"
import Navbar from "@/components/Navbar"
import TeamCard from "@/components/Team_Card"
import Image from "next/image"
import { motion } from "motion/react"


export default function TeamPage() {
    return (
        <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    ><div>
            <div>
                <Navbar />
            </div>
            <div>
                <div className="w-screen relative flex flex-col items-center bg-[#00020f] text-white mt-2">
                <Image
                    src="/illusion.svg"
                    alt="illusion background"
                    width={0}
                    height={0}
                    className="w-1/2 -z-10  absolute top-25 object-contain mix-blend-color mask-l-from-80% mask-r-from-80% mask-t-from-80% mask-b-from-80% "
                />
                </div>
                <section className="text-center px-4 py-20 relative top-25">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Our Team
                    </h2>
                    <p className="text-sm md:text-lg text-[#A7ADBE] max-w-3xl mx-auto leading-relaxed">
                        Fostering Connections and Fortifying Ties: Elevating Alumni Cooperation through Collaboration and Active Engagement.
                    </p>
                </section>
            </div>
            <section className="flex justify-between w-1/2 mt-24 mx-auto items-center">
                <div className="w-1/3 bg-gradient-to-r from-transparent to-[#171D45] h-[3px]"></div>
                <span className="text-indigo-300 text-2xl font-bold mx-4">Vice President</span>
                <div className="w-1/3 bg-gradient-to-r from-transparent to-[#171D45] h-[3px] scale-x-[-1]"></div>
            </section>
            <div className="flex justify-center items-center p-3.5"><TeamCard/></div>

            <section className="flex justify-between w-1/2 mt-10 mx-auto items-center">
                <div className="w-1/4 bg-gradient-to-r from-transparent to-[#171D45] h-[3px]"></div>
                <span className="text-indigo-300 text-2xl font-bold mx-4">Overall Coordinator</span>
                <div className="w-1/4 bg-gradient-to-r from-transparent to-[#171D45] h-[3px] scale-x-[-1]"></div>
            </section>  
            <div className="flex justify-center items-center p-3.5"><TeamCard/></div>
            


        </div>
        </motion.div>
        
    )
}