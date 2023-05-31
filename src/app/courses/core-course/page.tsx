import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Footer from "../../footer";
import Core from "../../core";
import Navbar from "@/app/navbar";

export default function Corehome() {
  return (
    <>
      <Navbar />

      <Core />

      <Footer />
    </>
  );
}