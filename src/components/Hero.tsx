import hero from "../assets/banner-stack.png"

const Hero = () => {
  return (
    <div className=" max-w-[95%] sm:max-w-[90%] mx-auto flex flex-col sm:flex-row items-center justify-between">
      <div className=" space-y-4 sm:space-y-6">
        <h1 className=" text-center sm:text-start text-[30px] sm:text-6xl font-bold">Build Your Ideal <br /> <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Development Stack</span></h1>
        <p className="text-[#475569] text-[18px] text-center sm:text-start"> Explore frontend, backend, database, and tooling options,<br />
        compare them side by side, and put together the stack that fits your <br />
        next project. </p>
        <div className="flex gap-10">
            <button className=" bg-linear-to-r from-[#FF5722]  to-[#7C3AED] p-2 cursor-pointer rounded-md font-semibold text-w text-white ">Explore Technologies</button>
        <button className=" p-2 rounded-md font-semibold text-black cursor-pointer">Learn More</button>
        </div>
      </div>
      
      <div>
        <img src={hero} alt="" />   
      </div>
    </div>
  );
};

export default Hero;
