import { Navbar } from './components/ui/navbar'
import { Footer } from './components/ui/footer'
import { Nav_content } from './components/ui/nav_content'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './components/ui/home'
import { About } from './components/ui/about'
import { Shipping } from './components/ui/shipping'
import { FAQ } from './components/ui/faq';
import { Terms } from './components/ui/terms';
import { Privacy } from './components/ui/privacy';
import { AllImages } from './components/ui/all-images';
import { useEffect, useState } from "react";
import { Electronics, Jewelery , MensClothing, WomensClothing } from './components/ui/sort-by-collections';
import { PriceHiToLow, PriceLowToHi, Trending } from './components/ui/sort-by-methods';
function App() {

  const [data, setData] = useState([]);


  const getdata = async () => {
    const url = 'https://fakestoreapi.com/products';
    const response = await fetch(url);
    const data1 = await response.json();
    setData(data1);
  }

  useEffect(() => {
    getdata();
  }, []);


  useEffect(() => {
    console.log(data);
  }, [data]);

  const mens=data.filter((item)=>{
    return item.category==="men's clothing"
  })
  const womens=data.filter((item)=>{
    return item.category==="women's clothing"
  })

  const electronics=data.filter((item)=>{
    return item.category==="electronics"
  })

  const Jeweleries=data.filter((item)=>{
    return item.category==="jewelery"
  })

  // const trending=data.filter((item)=>{
  //   return item.category==="jewelery"
  // })
  // const priceHiToLo=data.filter((item)=>{
  //   return item.price==="jewelery"
  // })
  // const priceLoToHi=data.filter((item)=>{
  //   return item.price==="jewelery"
  // })
  
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home item={data} />} />
          <Route path="/about" element={<About />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/allImages" element={<AllImages item={data} />} />
          <Route path="/jewelery" element={<Jewelery item={Jeweleries} />} />
          <Route path="/menscloth" element={<MensClothing item={mens} />} />
          <Route path="/womenscloth" element={<WomensClothing item={womens} />} />
          <Route path="/elctronics" element={<Electronics item={electronics} />} />
          <Route path="/trending" element={<Trending item={data} />} />
          <Route path="/price-hi-to" element={<PriceHiToLow item={data} />} />
          <Route path="/price-lo-to" element={<PriceLowToHi item={data} />} />
        </Routes>
        <Nav_content />
        <Footer />
      </Router>
    </>
  )
}

export default App
