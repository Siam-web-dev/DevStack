import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Cards from "./components/Cards";
import { Suspense, useState } from "react";
import type { dataType } from "./type/dataType";
import TechnologyList from "./components/TechnologyList";
import { toast, ToastContainer , Bounce } from "react-toastify";
import Footer from "./components/Footer";



const cardData = async() => {
  const res =  await fetch("/data.json") ;
  const data = await res.json();
  return data; 
}

const cardDataPromise = cardData()

function App() {
  
  const [technology , setTechnology] = useState<dataType[]>([])

  const addToStack = ( card : dataType) => {
    setTechnology((prev) => {
      const alreadyExists = prev.find((item) => item.id === card.id );
      if (alreadyExists) return prev ; 
      return [...prev, card] ;  
      
    }) ;
    toast('Successfully Added To Your Stack', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
  } 

  const removeStack = (id : string | number) => {
    setTechnology((prev) => prev.filter ((item) => item.id !== id) ) ;
     
  }

  const removeAll = () => {
    setTechnology([]) ;
  }
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <main>
        <section className="max-w-[90%] sm:max-w-[90%] mx-auto ">
          <h1 className="font-bold text-4xl mb-3 ">Explore the <span className="text-[#7C3AED]">Technologies</span> </h1>
          <p className="text-[#64748B]">Pick one technology per category to build your ideal stack.</p>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-5  ">
            {/* cards */}
             <Suspense fallback = { <div>Loading...</div> }>
               <Cards cardDataPromise = {cardDataPromise} technology = {technology} addToStack = {addToStack}  ></Cards>
             </Suspense>

            {/* selectedCards */}
            <TechnologyList technology = {technology} removeStack = {removeStack} removeAll = {removeAll} ></TechnologyList>
          </div>
        </section>
      </main>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </>
  )
}

export default App
