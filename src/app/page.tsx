//import Image from "next/image";
import Navbar from "./component/navbar";
import Hero from "./component/hero";
import Product from "./component/product";
import Offer from "./component/offer";
import Card from "./component/card";
import FeedBack from "./component/feedbak"
import Footer from "./component/footer";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Product/>
      <Offer/>
      <Card/>
      <FeedBack/>
      <Footer/>
    </main>
  );
}
