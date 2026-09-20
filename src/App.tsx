import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Cards from "./components/Cards";
import { Suspense } from "react";



const cardData = async() => {
  const res =  await fetch("/data.json") ;
  const data = await res.json();
  return data; 
}

const cardDataPromise = cardData()

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <main>
        <section className="max-w-[95%] sm:max-w-[90%] mx-auto">
          <h1 className="font-bold text-4xl mb-3">Explore the <span className="text-[#7C3AED]">Technologies</span> </h1>
          <p className="text-[#64748B]">Pick one technology per category to build your ideal stack.</p>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
            {/* cards */}
             <Suspense fallback = { <div>Loading...</div> }>
               <Cards cardDataPromise = {cardDataPromise}></Cards>
             </Suspense>

            {/* selectedCards */}
          </div>
        </section>
      </main>
    </>
  )
}

export default App
