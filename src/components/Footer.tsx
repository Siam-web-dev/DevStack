import Logo from "../assets/logo-text.png"

const Footer = () => {
  return (
    <div className="max-w-[90%] sm:max-w-[90%] mx-auto mt-35 ">
      {/* Footer Top */}
      <div className="flex justify-between">
        <div className="space-y-5 flex flex-col items-center sm:items-start">
            <img src={Logo} alt=""  />
            <p className="text-[#64748B] text-center sm:text-start text-sm">Curated tools, technologies, and resources for developers building <br /> modern software.</p>
            <div className="flex gap-4 text-[#475569]">
                <a href="#">GitHub</a><a href="#">Twitter</a><a href="#">LinkedIn</a>
            </div>
        </div>
        <div className=" hidden sm:block list-none space-y-2 text-[#64748B] " >
            <h3 className="font-semibold text-black">PRODUCT</h3>
            <li><a href="">Home</a></li>
            <li><a href="">Technologies</a></li>
            <li><a href="">Projects</a></li>
        </div>
        <div className=" hidden sm:block list-none space-y-2 text-[#64748B] ">
            <h3 className="font-semibold text-black">COMPANY</h3>
            <li><a href="">About</a></li>
            <li><a href="">Contact </a></li>
            <li><a href="">Careers</a></li>
        </div>
        <div className=" hidden sm:block list-none space-y-2 text-[#64748B]">
            <h3 className="font-semibold text-black">LEGAL</h3>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Terms of Service</a></li>
            
        </div>
      </div>
        {/* Divider */}
      <div className="my-5 border-t border-slate-100"></div>
      {/* Footer bottom */}
      <div className="flex justify-between my-12">
            <p className="text-[#64748B] text-xs  sm:text-sm ">© 2026 Dev Stack. All rights reserved.</p>
            <div className="flex gap-4 text-[#64748B] text-xs  sm:text-sm">
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
            </div>
      </div>
    </div>
  );
};

export default Footer;
