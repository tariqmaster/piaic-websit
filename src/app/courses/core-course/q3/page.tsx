import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Footer from "../../../footer";
import Navbar from "@/app/navbar";
import Corefoot from "@/app/corefoot";

export default function Coreq2(){
    return(
        
<div>
<Navbar />
    <div className="maindiv course-outline">
        <div className="px-5 py-5 text-justify">
    <h1>Quarter III (Core)</h1><br/>
<div className="bg-blue-300 text-center text-lg font-bold p-5 rounded-lg"><h2>$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development</h2></div>
<br/>
<h3>Duration: 13 Weeks</h3>

<br/>
<h2>Earn While You Learn Projects</h2>
<br/><br/>
<h3>A. Build Full-Stack Next.js 13 Jamstack Templates
</h3><br/>
<p>You will be assigned to build a template which we will sell on Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens. 
<br/><br/>
The Template Standard
<br/>
<a href="https://github.com/panaverse/panaverse-template-standard">https://github.com/panaverse/panaverse-template-standard</a> 

</p><br/><br/>
<h3>B. Build QraphQL APIs </h3>
<br/><p>
You will be assigned to build APIs for which you will sell subscriptions on the Panaverse DAO Marketplace. 
The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens. 


</p>
</div>
    </div>

<Corefoot/>

<Footer />
</div>
    )
}