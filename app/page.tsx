import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Whoweare from "@/components/Who-we-are";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <div className="px-[20px] lg:container lg:px-20">
        <Whoweare/>
      </div>
    </>
    
  );
}
