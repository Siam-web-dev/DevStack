import Logo from "../assets/logo-text.png"
import hamburger from "../assets/hamburger.png"
const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-6 max-w-[95%] sm:max-w-[90%] mx-auto sticky top-0 z-10">
            <img src={hamburger} alt="" className=" sm:hidden " />
            <img src={Logo} alt="" className=" h-5 w-auto sm:h-10 sm:w-auto " />
            <ul className=" hidden md:flex gap-6 text-[#DB2777]">
                <li><a href="">Home</a></li>
                <li><a href="">Technologies</a></li>
                <li><a href="">Project</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <div className="flex gap-3">
                <button className=" text-[10px] sm:text-[16px] font-semibold text-[#D91B7E] ">Sign In</button>
                <button className=" text-[10px] sm:text-[16px] font-semibold bg-[#D91B7E] text-white px-4 py-2 rounded-4xl">Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;