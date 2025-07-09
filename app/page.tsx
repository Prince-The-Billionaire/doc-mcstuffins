import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Patients from "@/components/Patients";
import Team from "@/components/Team";
import Tools from "@/components/Tools";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Team/>
      <Tools/>
      <Patients/>
      <Footer/>
    </div>
  );
}
