import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PopularCountries from "@/components/PopularCountries";
import Whoweare from "@/components/Who-we-are";



import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function Home() {
  return (
    <>
      <Hero/>
      <Whoweare/>
      <PopularCountries/>
    </>
    
  );
}
