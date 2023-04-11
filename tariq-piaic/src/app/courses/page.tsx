import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Footer from "../footer";
import Body2 from "../body2";
import Header from "../header";
import Cards from "../flash-cards";
import Core from "../core-course";
import Specialized from "../specialized";
import Navbar from "../navbar";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <Core />
      <Specialized />
      <Cards />
      <Footer />
    </>
  );
}
