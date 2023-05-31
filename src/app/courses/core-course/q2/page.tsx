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
    <div className="p-10 course-outline ">
    <h1>Quarter II (Core)</h1>
    <br/>
    <div className="bg-blue-300 text-center text-lg font-bold p-5 rounded-lg">
<h2>W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</h2>
</div>
<br/><h1>Duration: 13 Weeks</h1>
<br/>
<h3 className="underline">Course Description: </h3>
<p className="text-justify text-black text-base">
The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter, the participants will be able to develop and deploy web platforms like Facebook, Shopify, etc. The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).

</p>
<br/>
<h1>Course Outline:</h1> <br/>
<h2>1. Next.js 13 Web Development </h2>
<p className="text-base text-black">
Next 13 Official Documentation
<br/><a href="https://beta.nextjs.org/docs">https://beta.nextjs.org/docs</a>
<br/>
<br/>Latest Learn React Official Website
<br/><a href="https://beta.reactjs.org/learn">https://beta.reactjs.org/learn</a> 
<br/><br/>
Learn Next.js 13 Learning Repo
<br/><a href="https://github.com/panaverse/learn-nextjs">https://github.com/panaverse/learn-nextjs</a>
<br/><br/>
First Project for Quarter 2 Students: Build a Resume Website and Deploy it on a Custom Domain
<br/>
All Quarter 2 students are required to Build their resume/CV website using Next.js 13 and Tailwind CSS
<br/>
Watch this video to learn:
<br/><a href="https://morioh.com/p/45a246d927c9">https://morioh.com/p/45a246d927c9</a> 
<br/><br/>
Once you have built your resume website, buy a domain if you can afford it and host your resume website on a custom domain:
<br/><a href="https://www.godaddy.com/en-pk ">https://www.godaddy.com/en-pk </a><br/>
<br/>
Add your custom domain to your Vercel Project:<br/>
<a href="https://vercel.com/docs/concepts/projects/domains">https://vercel.com/docs/concepts/projects/domains</a> <br/>
<a href="https://vercel.com/docs/concepts/projects/domains/add-a-domain">https://vercel.com/docs/concepts/projects/domains/add-a-domain</a> <br/>
<br/>
However, if you cannot afford it find a way to get it for free:<br/>
<a href="https://www.forbes.com/advisor/business/free-domain-name/">https://www.forbes.com/advisor/business/free-domain-name/</a> 
<br/><br/>
You will get your website graded by a faculty member in class and receive a Report Card which you will always bring to class.
</p><br/>
<h2>2. Next.js 13 using Chakra UI (Remote Zoom Class)</h2>
<p className="text-base text-black">
CSS Flexbox Explained – Complete Guide to Flexible Containers and Flex Items<br/>
<a href="https://www.freecodecamp.org/news/css-flexbox-complete-guide/">https://www.freecodecamp.org/news/css-flexbox-complete-guide/</a><br/><br/>

Chakra UI Docs<br/>
<a href="https://chakra-ui.com/getting-started">https://chakra-ui.com/getting-started</a>
<br/><br/></p>
<h2>
3. UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote  Zoom Class)
</h2>
<br/>
Designing and Prototyping Interfaces with Figma: Learn essential UX/UI design principles by creating interactive prototypes for mobile, tablet, and desktop by Fabio Staiano
<br/><a href="https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa">https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa</a> 
<br/><br/>
Figma Design Kit for TailwindCSS
<br/><a href="https://www.figma.com/community/file/768809027799962739">https://www.figma.com/community/file/768809027799962739</a>
<br/><br/>
Chakra UI Figma Kit<br/>
<a href="https://www.figma.com/community/file/971408767069651759">https://www.figma.com/community/file/971408767069651759</a> 
<br/><br/>
<h2>
4. API Routes with Next.js (Remote Zoom Class)
</h2>
<br/>API Routes<br/>
<a href="https://nextjs.org/docs/api-routes/introduction">https://nextjs.org/docs/api-routes/introduction</a>
<br/><br/>



<h2>
5. APIs with Next.js and tRPC (Remote Zoom Class)
</h2><br/>
Build a tRPC CRUD API Example with Next.js
<br/><a href="https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/">https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/</a>
<br/><br/>
Stop building REST APIs for your Next.js apps, use tRPC instead
<br/><a href="https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/">https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/</a>
<br/><br/>
<h2>
6. SQL and Prisma
</h2><br/>
Start from scratch with relational databases
<br/><a href="https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres">https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres</a> 
<br/><br/>
SQL For Beginners Video Tutorial
<br/><a href="https://www.youtube.com/watch?v=5hzZtqCNQKk">https://www.youtube.com/watch?v=5hzZtqCNQKk</a>
<br/><br/>
Database Management Systems and SQL – Tutorial for Beginners
<br/><a href="https://www.freecodecamp.org/news/dbms-and-sql-basics/">https://www.freecodecamp.org/news/dbms-and-sql-basics/</a>
<br/><br/>
<h2>
7. Next.js 13 using TailwindCSS (Remote Zoom Class)
</h2><br/>
Modern CSS with Tailwind, Second Edition by Noel Rappin
<br/><a href="https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/">https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/</a>
<br/><br/>
<h2>
8. AWS Application Composer (Remote Zoom Class)
</h2><br/>
What is AWS Application Composer?
<br/><a href="https://www.youtube.com/watch?v=BujE_tik5r8">https://www.youtube.com/watch?v=BujE_tik5r8</a>
<br/><br/>
Event-driven apps with AWS Application Composer
<br/><a href="https://www.youtube.com/watch?v=p411uh363jQ">https://www.youtube.com/watch?v=p411uh363jQ</a> 
<br/><br/>
Visually design and build serverless applications quickly
<br/><a href="https://aws.amazon.com/application-composer/">https://aws.amazon.com/application-composer/</a> 
<br/><br/>
Must Have: Create Free AWS Account
<br/>AWS Free Tier <a href="https://aws.amazon.com/free/">https://aws.amazon.com/free/</a> 
<br/><br/>
Note: For AWS Free Tier you will need a credit or debit card. The easiest way for Pakistani students is to open a bank account with Meezan Bank. Open a Meezan Aasan Account if you have no earning proof. Meezan Bank will charge Rs. 1100 for ATM Debit Card and there is a requirement of Rs. 100 minimum deposit. The card will be delivered in a few weeks. Our students have reported that this Debit card works with AWS.
<br/>
Now you can create a virtual VISA Debit card through the NayaPay app (<a href="https://www.nayapay.com/">https://www.nayapay.com/</a> ) which can be used to create AWS/GCP/Azure accounts. This is good news for those students who find it difficult to create physical debit and credit cards from banks.
<br/>
You can also get a $300 credit
<br/><a href="https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html">https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html</a> 
<br/><br/>

<h2>
9. Multi-Cloud GraphQL Serverless API Development with Cloud Development Kit for Terraform (CDKTF) (Remote Zoom Class)
</h2><br/>
Learn Multicloud Serverless API Development using CDK Terraform in Baby Steps
<br/><a href="https://github.com/panaverse/learn-multicloud-api-development">https://github.com/panaverse/learn-multicloud-api-development</a> 
<br/><br/>
Web 2.0 Projects
<br/>
1. Next.js Projects
<br/><a href="https://github.com/panaverse/nextjs-projects">https://github.com/panaverse/nextjs-projects</a>
<br/><br/>
2. Styling Next.js Projects using TailwindCSS and Chakra UI
<br/><a href="https://github.com/panaverse/styling-nextjs-projects">https://github.com/panaverse/styling-nextjs-projects</a> 
<br/><br/>
3. Todo Full-Stack App
<br/>

4. Build a Twitter Clone
<br/>


    </div>
<Corefoot/>

    <Footer />
</div>
    )
}