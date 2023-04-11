import Image from "next/image";

import logo from "../../public/red-p-logo-text_dao_croped.png";

export default function Footer(){
    return(
        <footer className="maindiv bg-black ">
<div className="px-5 py-5">
          {/* First Column */}
  <div className=" text-white text-lg">
    <Image width={100} height={150} src={logo} alt="panaverse logo" /><a  href="/#" className="text-white text-bold">Panaverse Dao</a>
    <p className="text-slate-300 text-justify"><b>The web-3.0 company</b><br/>
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
  <div className="">
  <p>
      <a href="./" className=" text-lg text-white hover:text-blue-500">Courses:</a><br/><br/>
      <a href="./" className="text-slate-300 hover:text-blue-500">Web 3.0 (Blockchain) and Metaverse Specialization</a><br/>
      <a href="./" className="text-slate-300 hover:text-blue-500">Artificial Intelligence and Deep Learning Specialization</a><br/>
      <a href="./" className="text-slate-300 hover:text-blue-500">Cloud-Native Computing Specialization</a><br/>
      <a href="./" className="text-slate-300 hover:text-blue-500">Ambient Computing and IoT Specialization</a><br/>
      <a href="./" className="text-slate-300 hover:text-blue-500">Genomics and Bioinformatics Specialization</a>
      <br/><br/><br/><br/>
      </p> 
  </div>
  <div className="">
  <a href="./" className="text-white text-xl hover:text-blue-500">Join us:</a><br/>
  <a href="./" className="ml-auto">
        <button className="items-center px-3 bg-gray-200 font-[poppins] font-bold duration-500 hover:bg-cyan-400 rounded">
        Get started
        </button>
      </a>
  </div>
  </div>
  {/* Third Column */}
  <div>
  <div className="">
    <a href="./" className="text-white text-xl hover:text-blue-500">Support</a><br/>
    <p>
      <a href="./" className="text-slate-300 hover:text-blue-500">Privacy policy</a><br/>
      <a href="./" className="text-slate-300 hover:text-blue-500">Terms of service</a><br/>
      <a href="./" className="text-slate-300 hover:text-blue-500">Help desk</a><br/>
      <a href="./" className="text-slate-300 hover:text-blue-500">Legal</a><br/>
      <a href="./" className="text-slate-300 hover:text-blue-500">Instructions</a><br/>
      </p>
  </div>
  </div>
  {/* Fourth Column */}

<div className="">
  <div className=" bg-blue-500 rounded-lg px-10 order-last">
  <p className="text-black font-bold flex items-start justify-center"><br/>© Copyright and Design by <br/>Muhammad Tariq PIAIC-136132</p>

  </div>
  <h2><br/></h2>
  <div className="gap-5  p-3 bg-blue-200 rounded-lg order-last">
  <p className="text-black font-bold">Mobile # +92-300-2229256<br/>
  House # L-13 sector 11-L, North Karachi, Karachi, Pakistan.</p>

 </div>
 </div>
</footer>

        
    )
}