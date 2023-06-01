import Footer from "@/app/footer";
import Navbar from "@/app/navbar";
import Image from "next/image";

export default function Auto() {
  return (
    <div>
      <Navbar />
      <div className="w-full course-outline p-10">
        <div className="bg-blue-300 sm:col-start-1 text-center text-lg font-bold px-10 py-5 rounded-lg">
          <h2 id="q4">Network Programmability and Automation Specialization
</h2>
        </div>
        <div className=" sm:col-start-1 text-center bg-yellow-200 border-white border-solid border-100 rounded-lg">
          <h3>Quarter IV</h3>
          <h1>NPA-351: CCNA 200-301 Certification
</h1>
          <h3>Duration: 13 Weeks</h3>
        </div>

        {/* 1st component: */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] py-5 ">
          <div className=" sm:col-start-1 rounded-lg  text-justify">
            <h3> Course Description:</h3>
            <p className="text-base">
             
This course will focus on learning the basics of the networking and preparing for the new Cisco Certified Network Associate (CCNA) exam. This comprehensive course focuses on the solutions and technologies needed to implement and administer a broad range of modern networking and IT infrastructure.
<br/>
Textbook: <br/>
<a href="https://www.amazon.com/CCNA-200-301-Official-Guide-Library/dp/1587147149/ref=sr_1_1">https://www.amazon.com/CCNA-200-301-Official-Guide-Library/dp/1587147149/ref=sr_1_1</a> 

<br/>
            </p>
          </div>

          <div className="px-5 py-5">
            <figure>
              <Image
                className="w-full"
                src="https://media.istockphoto.com/id/1346929942/photo/it-support-operator-working-at-the-server-room-in-an-office-building.jpg?s=612x612&w=0&k=20&c=mnJjc0_JfJEjtf-QuNycOPPo8A7UimECCffDoyfzsPo="
                alt="pic loading"
              />
            </figure>
          </div>
        </div>
        {/* Quarter five */}

        <div className=" w-full course-outline ">
          <div className=" sm:col-start-1 text-center bg-yellow-200 border-white border-solid border-100 rounded-lg">
            <h3 id="q5">Quarter V</h3>
            <h1>NPA-361: Network Programmability and Automation</h1>
            <h3>Duration: 13 Weeks</h3>
          </div>

          {/* 1st component: */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] ">
            <div className="py-5 sm:col-start-1 rounded-lg  text-justify">
              <h3> Course Description:</h3>
              <p className="text-base">
              Traditional network management techniques can't be effectively automated and don't scale well. By implementing network programmability based on Application Programming Interfaces, this course will assist in overcoming issues of the future and help you develop the skills required for the Next-Generation Network Engineer.
<br/>
Textbook: <br/>
<a href="https://www.amazon.com/Network-Programmability-Automation-Networking-Technology/dp/1587145146/ref=sr_1_3">https://www.amazon.com/Network-Programmability-Automation-Networking-Technology/dp/1587145146/ref=sr_1_3</a>  
              </p>
            </div>
            <div className="px-5 py-5">
              <figure>
                <Image
                  className="w-full"
                  src="https://media.istockphoto.com/id/1029186020/photo/smart-city-and-telecommunication-concept.jpg?s=612x612&w=0&k=20&c=UZGfRyXcCCTMRWNB8D2NvpCs_vguAe_Uo5eIoKYnfUY="
                  alt="pic loading"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>      
      <Footer />
    </div>
  );
}
