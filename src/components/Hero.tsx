import hero from "../assets/banner-stack.png"

const Hero = () => {
  return (
    <div className=" max-w-[95%] sm:max-w-[90%] mx-auto flex flex-col sm:flex-row items-center justify-between">
      <div className=" space-y-4 sm:space-y-6">
        <h1 className=" text-center sm:text-start text-[30px] sm:text-6xl font-bold">Build Your Ideal <br /> <span className="text-[#7C3AED]">Development Stack</span></h1>
        <p className="text-[#475569] text-[18px] text-center sm:text-start"> Explore frontend, backend, database, and tooling options,<br />
        compare them side by side, and put together the stack that fits your <br />
        next project. </p>
        <div className="flex gap-10">
            <button className="bg-[#F97316] p-2 rounded-md font-semibold text-w text-white ">Explore Technologies</button>
        <button className=" p-2 rounded-md font-semibold text-black">Learn More</button>
        </div>
      </div>
      
      <div>
        <img src={hero} alt="" />   
      </div>
    </div>
  );
};

export default Hero;
