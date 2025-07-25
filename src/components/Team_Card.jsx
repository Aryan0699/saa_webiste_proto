import Image from "next/image"
import Link from "next/link"
export default function TeamCard()
{
    return(
    
        <div className="group relative  max-w-[300px] w-1/2 bg-transparent bg-gradient-to-b from-zinc-900 to-white/9 rounded-3xl border border-[#131839] flex flex-col items-center px-4 py-8 shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300">
            <Image
                src="/cardbackground.svg"
                alt="grid"
                width={309}
                height={216}
                className="absolute right-0 top-0 w-full h-full object-cover z-0 rounded-3xl"
            ></Image>
            <div className="relative z-10 w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-[#232D6B] mb-2">
                <Image
                    src="/saa_logo.png"
                    alt="Image"
                    width={130}
                    height={130}
                    className="w-full h-full object-cover"
                >
                </Image>
            </div>
            <h3 className="text-[16px] md:text-[24px] font-semibold text-white text-center">Lorem Ipsum</h3>
            <p className="text-[#A7ADBE] text-[12px] md:text-[14px] text-center italic mb-6 z-10"></p>
            <section className="logos flex gap-4 ">
                <Link href='/' className="h-10 w-10 aspect-square rounded-xl overflow-hidden flex items-center justify-center relative hover:scale-110 transition-transform duration-200">
                    <Image
                        src="/background_color_icons.svg"
                        alt="Image"
                        width={0}
                        height={0}
                        className="w-full h-full object-cover -z-10"
                    >
                    </Image>
                    <Image
                        src="/linkedin.svg"
                        alt="linkedin"
                        width={0}
                        height={0}
                        className="absolute w-11/12 h-3/5 object-cover"
                    >
                    </Image>
                </Link>
                <Link href='/' className="h-10 w-10 aspect-square rounded-xl overflow-hidden flex items-center justify-center relative hover:scale-110 transition-transform duration-200">
                    <Image
                        src="/background_color_icons.svg"                       
                        alt="Image"
                        width={0}
                        height={0}
                        className="w-full h-full object-cover -z-10"
                    >
                    </Image>
                    <Image
                        src="/instagram.svg"
                        alt="linkedin"
                        width={0}
                        height={0}

                        className="absolute w-11/12 h-3/5 object-cover "
                    >
                    </Image>

                </Link>

            </section>


        </div>
    )
}