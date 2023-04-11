import Image from "next/image";
import logo from "../../public/red-p-logo-text_dao_croped.png";

export default function header() {
  return (
    <nav className="px-10 py-5 flex flex-wrap justify-start items-center shadow">
      <a href="/#" className=" flex-1 hover:text-cyan-400 duration-500">
        <Image className="h-12 w-24" src={logo} alt="Panaverse Logo"></Image>
      </a>
      <ul>
        <li>
        <a href="/#" className="px-10 order-last flex-[100%] mt-4 md:order-none md:flex-auto">
        HOME
      </a>
        </li>
      </ul>

      <a href="/courses" className="order-last flex-[100%] mt-4 md:order-none md:flex-auto">
        COURSES
      </a>
      <a href="/" className="order-last flex-[100%] mt-4 md:order-none md:flex-auto">
        CONTACT
      </a>
      <a href="./" className="order-last flex-[100%] mt-4 md:order-none md:flex-auto">
        BLOG'S
      </a>
      <a href="./" className="flex-1 text-right">
        <button className="items-center px-3 bg-gray-200 font-[poppins] font-bold duration-500 hover:bg-cyan-400 rounded">
        Get started
        </button>
      </a>
    </nav>
  );
}
