import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Footer from "../../footer";
import Header from "../../header";
import Core from "../../core-course";

export default function Corehome() {
  return (
    <>
      <Header />

      <Core />

      <Footer />
    </>
  );
}
