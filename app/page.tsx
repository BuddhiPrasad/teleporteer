import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Whoweare from "@/components/Who-we-are";
import AboutUs from "@/Pages/AboutUs";
import ContactUs from "@/Pages/ContactUs";
import News from "@/Pages/News";
import TourGuides from "@/Pages/TourGuides";
import Tours from "@/Pages/Tours";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar/>
      <AboutUs/>
      <ContactUs/>
      <Tours/>
      <TourGuides/>
      <News/>
      
      {/*<Hero/>
      <div className="px-[20px] lg:container lg:px-20">
        <Whoweare/>
      </div>*/}
    </>
    
  );
}
