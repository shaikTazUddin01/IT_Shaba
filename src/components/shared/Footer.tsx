import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#141414] text-white py-10">
      <div
        className="px-5 flex flex-col gap-5 lg:flex-row justify-center
       lg:justify-between max-w-[7xl] mx-auto"
      >
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">
            Let&apos;s Talk<span className="text-[var(--primaryColor)]">.</span>
          </h2>

          {/* socal media side */}
          <div className="border border-white/10 inline-flex px-3 md:px-10 py-3 md:py-4 rounded-[12px] bg-gradient-to-r from-transparent to-white/20 text-[13px] md:text-xl gap-4 md:gap-7 font-medium z-50">
            <button>Facebook</button>
            <button>Twitter</button>
            <button>Linkedin</button>
            <button>Instagram</button>
          </div>
        </div>

        {/* Right Section */}
        <div className=" inline-block lg:w-[25%]  float-right">
          <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
          <ul className="space-y-3 text-sm">
            <li>Info@Procus.Com</li>
            <li>+99(0) 1453 123456</li>
            <li>1901 Thornridge Cir. Shiloh, Hawaii 81063</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-10 pt-6">
        <div className="max-w-[7xl] mx-auto px-5 flex flex-col lg:flex-row justify-center items-center md:items-start gap-3 md:justify-between text-sm text-gray-500">
          <p>All Copyright Reserved &copy; By IT SHABA.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Terms Of Services
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
