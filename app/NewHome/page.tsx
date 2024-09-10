import Banner from "./components/Banner";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Slider from "./components/Slider";
import sample from "../../data/sample.json"


export default function NewHome( ) {
   const { banner , section2 , section3 , section4 , section5 , section6 , section7 , contactUs } = sample  
  return (
   <>
    <div className="bg-[#110D07]">
    <Banner {...banner}/>
    <Section2 {...section2}/>
    <Section3 {...section3}/>
    <div className="bg-[#FFF] md:rounded-t-[55px] rounded-t-[30px]">
    <Slider/>
    <Section {...section4}/>
    <Section5 {...section5}/>
    <Section6 {...section6}/>
    <Section7 {...section7}/>
    <ContactUs {...contactUs}/>
    </div>
    <Footer/>
    </div>
   </>
  )
}

