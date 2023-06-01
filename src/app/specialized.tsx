

import Image from "next/image";
import splpic from "../../public/Specialization.jpg";

export default function Specialized() {
  return (
    <div className="maindiv">
      
     
      <div className="item text-black justify-center items-center px-5 py-5 border-black">
        <a href="../courses/#speicialized-courses"><h2>Specialized Tracks:</h2></a>
        <p className="text-2xl text-justify">
        After completing the first thre
        e quarters the participants will select one or more specializations consisting of two courses each.</p>
          <h3></h3>
          <p></p>        
        <a href="../courses/#speicialized-courses">Read more</a>
      </div>

 {/* Second div */}
      <div className="body1">
      <a href="../courses/#speicialized-courses"><figure>
          <Image
            className="grid col-start-1 col-end-1 row-start-1 row-end-1 rounded-lg px-5 py-5"
            src={splpic}
            alt="pic loading"
          />
        </figure>
        </a>
      </div>
    </div>
  );
}
