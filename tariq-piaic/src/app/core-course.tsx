import Image from "next/image";
import genpic from "../../public/akson.jpg";

export default function Core() {
  return (
    <div className="maindiv">
      <div className="body1">
        <figure>
          <Image
            className="grid col-start-1 col-end-1 row-start-1 row-end-1 rounded-lg px-5"
            src={genpic}
            alt=""
          />
        </figure>
      </div>
      {/* Second div */}
      <div className="item text-black justify-center items-center px-5 py-5">
        <h2>Core Courses (Common in All Specializations):</h2>
        <p>
          Every participant of the program will start by completing the
          following three core courses:</p>
          <a href="./courses/core-course/q1"><h3>Quarter I (Core)</h3></a>
          <p> CS-101: Object-Oriented Programming using TypeScript</p>
          <h3>Quarter II (Core)</h3>
          <p> W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps
          and APIs using Next.js 13 and Cloud Development Kit (CDK) for
          Terraform</p>
          <h3>Quarter III (Core)</h3>
          <p>$-101: Dollar Making Bootcamp - Full-Stack Template and API Product
          Development</p>
        
        <a href="#">Read more</a>
      </div>
    </div>
  );
}
