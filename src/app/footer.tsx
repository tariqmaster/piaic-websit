import Image from "next/image";

import logo from "../../public/red-p-logo-text_dao_croped.png";

export default function Footer(){
    return(
        <footer className="maindiv bg-black ">
<div className="px-5 py-5">
          {/* First Column */}
  <div className=" text-white text-lg">
    <Image width={100} height={150} src={logo} alt="panaverse logo" /><a  href="/#" className="text-white text-bold">Panaverse Dao</a>
    <p className="text-slate-300 text-justify gap-10"><b>The web-3.0 company</b><br/>
    The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
     Panaverse DAO is a movement to spread these technolgies globally. 
     It is community of Web 3 and Metaverse developers, designers, 
     trainers, startup founders and service providers.
    </p>
  </div>
  <div className="p-5">
        <a className="icon inline-flex justify-center items-center" href="#">
        <i className="fa fa-twitter"></i>
        </a>
        <a className="icon inline-flex justify-center items-center" href="#">
        <i className="fa fa-linkedin"></i>
        </a>
        <a className="icon inline-flex justify-center items-center" href="#">
        <i className="fa fa-github"></i>
        </a>
  </div>
  </div>
  {/* Second Column */}
  <div>
  <div className="px-5 py-5">
  <p>
      <a href="/courses/core-course" className=" text-lg text-white hover:text-blue-500">Courses:</a><br/><br/>
      <a href="/courses/web3" className="text-sm text-slate-300 hover:text-blue-500">Web 3.0 (Blockchain) and Metaverse Specialization</a><br/>
      <a href="/courses/ai" className="text-sm text-slate-300 hover:text-blue-500">Artificial Intelligence and Deep Learning Specialization</a><br/>
      <a href="/courses/cnc" className="text-sm text-slate-300 hover:text-blue-500">Cloud-Native Computing Specialization</a><br/>
      <a href="/courses/iot" className="text-sm text-slate-300 hover:text-blue-500">Ambient Computing and IoT Specialization</a><br/>
      <a href="/courses/bio" className="text-sm text-slate-300 hover:text-blue-500">Genomics and Bioinformatics Specialization</a>
      <a href="/courses/auto" className="text-sm text-slate-300 hover:text-blue-500"> Network Programmability and Automation Specialization</a>
      <br/><br/>
      </p> 
  </div>

  <div className="px-5">
    <a href="./" className="text-white text-lg hover:text-blue-500">Support</a><br/>
    <p>
      <a href="./" className="text-slate-300 hover:text-blue-500 text-sm">Privacy policy</a><br/>
      <a href="./" className="text-slate-300 hover:text-blue-500 text-sm">Terms of service</a><br/>
      <a href="./" className="text-slate-300 hover:text-blue-500 text-sm">Help desk</a><br/>
      <a href="./" className="text-slate-300 hover:text-blue-500 text-sm">Legal</a><br/>
      <a href="./" className="text-slate-300 hover:text-blue-500 text-sm">Instructions</a><br/>
      </p>
  </div>
   
  </div>
  {/* Third Column */}
  <div>
  <div className="px-10 py-5">
  <a href="/form" className="text-white text-xl hover:text-blue-500">Join us:</a><br/>
  <a href="/form" className="ml-auto">
        <button className="items-center px-3 bg-gray-200 font-[poppins] font-bold duration-500 hover:bg-cyan-400 rounded">
        Get started
        </button>
      </a>
  </div>


<div className="px-10 py-5">
  <div className=" bg-blue-500 rounded-lg px-5 content-center">
  <p className="text-black font-bold flex items-center justify-center py-5">© Copyright and Design by <br/>Muhammad Tariq PIAIC-136132</p>

  </div>
  <div className="py-5">

  </div>
  <div className="gapy-5 justify-center bg-blue-200 rounded-lg px-5 p-5">
  <p className="text-black text-center font-bold items-center justify-center">Mobile # +92-300-2229256<br/>
  House # L-13 sector 11-L, North Karachi, Karachi, Pakistan.</p>

 </div>
  </div>
  {/* Fourth Column */}

 </div>
</footer>

        
    )
}