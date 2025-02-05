import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoHtml5 } from "react-icons/io";
import { DiCss3 } from "react-icons/di";


export default function Home() {
  return (
   <div>
        <div className="bg-gray-100 p-4 flex justify-center">
  <div className=" border-1 shadow-lg shadow-gray-700 rounded-lg w-[160vh]">
    {/* top content */}
    <div className="flex rounded-t-lg bg-rose-400 sm:px-2 w-full">
      <div className="h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3">
       <Image 
        src={"/images/image.png"}
        alt="profile picture" 
        height={200}
        width={200}>
        </Image>
      </div>
      <div className="w-2/3 sm:text-center pl-5 mt-10 text-start">
        <p className="font-serif font-bold italic text-heading sm:text-4xl text-2xl">
          Soniya Dawood
        </p>
        <p className="italic font-serif font-semibold mt-4 tracking-wide underline underline-offset-2">Web Developer</p>
      </div>
    </div>
    {/* main content */}
    <div className="p-5">
      <div className="flex flex-col sm:flex-row sm:mt-10">
        <div className="flex flex-col sm:w-1/3">


          {/* My contact */}
          <div className="py-3 sm:order-none order-3">
            <h2 className="text-2xl text-rose-400 font-serif font-bold text-top-color">
              My Contact
            </h2>
            <div className="border-2 border-rose-400 w-36 border-top-color my-3" />
            <div>
              <div className="flex items-center my-1">
                <Link href={"https://www.linkedin.com/in/soniya-dawood-442436307/"} className="w-6 text-gray-700 hover:text-orange-600">
                  <FaLinkedinIn className="text-blue-600 text-xl" />
                </Link>
                <div className="ml-2 truncate">www.linkedin.com/in/soniya-dawood</div>
              </div>
            
          
              <div className="flex items-center my-1">
                <a
                  className="w-6 text-gray-700 hover:text-orange-600"
                  aria-label="Visit TrendyMinds Twitter"
                  href=""
                  target="_blank"
                >
                <SiGmail className="text-red-500 text-xl " />

                </a>
                <div>soniyadawood8@gmail.com</div>
              </div>
            </div>
          </div>
          {/* Skills */}
          <div className="py-3 sm:order-none order-2">
            <h2 className="text-2xl text-rose-400 font-serif font-bold text-top-color">
              Skills
            </h2>
            <div className="border-2 border-rose-400 w-16 border-top-color my-3" />
            <div>
              <div className="flex items-center my-1">
              <SiTailwindcss className="text-blue-600 text-3xl"/>
                <div className="ml-2">Tailwind CSS</div>
              </div>
              <div className="flex items-center my-1">
              <RiNextjsLine className="text-3xl"/>
                <div className="ml-2">NextJs</div>
              </div>
              <div className="flex items-center my-1">
              <BiLogoTypescript className="text-blue-600 text-3xl"/>
                <div className="ml-2">Typescrpt</div>
              </div>
              <div className="flex items-center my-1">
                <TbBrandJavascript className="text-green-600 text-3xl"/>
                <div className="ml-2">Javascrpt</div>
              </div>
              <div className="flex items-center my-1">
                <IoLogoHtml5 className="text-orange-600 text-3xl"/>
                <div className="ml-2">Html</div>
              </div>
              <div className="flex items-center my-1">
                <DiCss3 className="text-blue-600 text-3xl"/>
                <div className="ml-2">Css</div>
              </div>
            </div>
          </div>


          {/* Education Background */}
          <div className="py-3 sm:order-none order-1">
            <h2 className="text-2xl font-serif text-rose-400 font-bold text-top-color">
              Education Background
            </h2>
            <div className="border-2 border-rose-400 w-72 border-top-color my-3" />
            <div className="flex flex-col space-y-1">
              <div className="flex flex-col">
                <p className="font-semibold text-xs text-gray-700">2023</p>
                <p className="text-sm font-medium">
                  <span className="text-green-700">
                    B.COM (Bachlors of commerce)
                  </span>
                  COMMERCE COLLEGE SHAHRAE LIAQAT KARACHI.
                </p>
                <p className="font-bold text-xs text-gray-700 mb-2">
                  Grade: B
                </p>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-xs text-gray-700">2020</p>
                <p className="text-sm font-medium">
                  <span className="text-green-700">HSC</span>
                  KRACHI COLLEGE FOR WOMEN KARACHI
                </p>
                <p className="font-bold text-xs text-gray-700 mb-2">
                  Grade: B
                </p>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-xs text-gray-700">2018</p>
                <p className="text-sm font-medium">
                  <span className="text-green-700">SSC</span>,
                  CMS AlUMNI SCHOOL FOR BOYS & GIRLS KARACHI 
                </p>
                <p className="font-bold text-xs text-gray-700 mb-2">
                  Grade: B
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10">
          {/* About me */}
          <div className="py-3">
            <h2 className="text-2xl text-rose-400 font-serif font-bold text-top-color">
              About Me
            </h2>
            <div className="border-2 w-32 border-rose-400 border-top-color my-3" />
            <p>
           <span>I am a commerce graduate with a strong foundation in accounting and finance, currently working as a Remote Accounting Associate at Snakes & Lattes. My expertise includes sales reconciliation, financial reporting, and invoice booking.</span> 
              <br />
          <span>In addition to my finance background, I have skills in web development and UI/UX design, enabling me to work on user-friendly and visually appealing digital solutions. I am passionate about problem-solving, efficiency, and continuous learning in both finance and technology.</span>  
            </p>
          </div>


          {/* Professional Experience */}
          <div className="py-3">
            <h2 className="text-2xl font-serif text-rose-400 font-bold text-top-color">
              Professional Experience
            </h2>
            <div className="border-2 border-rose-400 w-80 border-top-color my-3" />
            <div className="flex flex-col">


              <div className="flex flex-col">
                <p className="text-lg font-bold text-gray-700">
                  Snakes & Lattes | Accounting Associate 
                </p>
                <p className="font-semibold text-sm text-gray-700">
                  2023 - Present
                </p>
                <p className="font-semibold text-sm text-gray-700 mt-2 mb-1">
                  Key Responsibilities
                </p>
                <ul className="text-sm list-disc pl-4 space-y-1">
                  <li>Sales Reconciliation</li>
                  <li>Working on Financial Reports</li>
                  <li>Booking Invoices</li>
                  <li>Other Accounting & Financial Tasks</li>
                </ul>
              </div>
              <div className="flex flex-col mt-8">
                <p className="text-lg font-bold text-gray-700">
                  GIAIC | UI/UX Designer / Web developer
                </p>
                <p className="font-semibold text-sm text-gray-700">2024-2025</p>
                
                <p>Student at GIAIC , Learning Html, Tailwind css, typescript/javascript, NextJs</p>
              </div>
            </div>
          </div>
         
          
          <div className="py-3">
            <h2 className="text-2xl font-serif text-rose-400 font-bold text-top-color">
              Projects
            </h2>
            <div className="border-2 border-rose-400 w-28 border-top-color my-3" />
            <div className="flex flex-col">
              <div className="flex flex-col">
                <p className="text-lg font-semibold text-gray-700">
                  Nike-Ecommerce Website
                </p>
                <p className="text-lg font-semibold text-gray-700">
                  Blog website
                </p>
                <p className="text-lg font-semibold text-gray-700">
                  Dynamic Resume / Static Resume
                </p>
                <p className="text-lg font-semibold text-gray-700">
                  Perfume E-commerce website
                </p>
                <p className="text-lg font-semibold text-gray-700">
                  Portfolio Nextjs
                </p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
   </div>
  );
}
