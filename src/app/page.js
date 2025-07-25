"use client"
import Navbar from '@/components/Navbar';
import { motion } from "motion/react"
import Image from 'next/image';
import React from 'react';
import Background from '@/components/Background';


const AssetDefenseComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-screen min-h-screen  bg-transparent flex  flex-col items-center">
        <Navbar />
        {/* Inner Div */}
        <div className=" w-11/12 pb-8 mt-40  lg:mt-28 rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl shadow-black/80 overflow-hidden flex flex-col [box-shadow:0_0_0_1px_rgba(255,255,255,0.1),_inset_0_2px_10px_black] ">      {/* z=-10 */}
          <Background />
          <div className='flex items-center justify-center flex-col'>
            <Image
              src="/saa_logo_no_background.png"
              alt="SAA logo"
              width={400}
              height={400}
              // clas 
              className="invert mt-7 "
            ></Image>

            <p className="w-3/5 text-[10px] md:text-[16px] text-[#A7ADBE] text-center mx-auto">
              The SAA community enhances the institute and student growth through organizing events like Senate Introduction, Prometeo X SAA, Convocation & Alumni Induction Dinner, Dashak 3.0 + Alumni Day, graduating batch see-off ceremony, Soon to be Alumnus, and Ask an Alumnus. The society fosters strong connections and facilitates continuous improvement and development.
            </p>
          </div>
        </div>
        
        <div className='mt-7'>

        </div>
        



      </div>
    </motion.div>

  );
};

export default AssetDefenseComponent;