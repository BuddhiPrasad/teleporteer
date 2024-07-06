import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Whoweare from "@/components/Who-we-are";
import AboutUs from "@/Pages/AboutUs";
import ContactUs from "@/Pages/ContactUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar/>
      <AboutUs/>
      
      {/*<Hero/>
      <div className="px-[20px] lg:container lg:px-20">
        <Whoweare/>
      </div>*/}
    </>
    
  );
}
