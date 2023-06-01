import Footer from "@/app/footer";
import Navbar from "@/app/navbar";
import Image from "next/image";

export default function Bio() {
  return (
    <div>
      <Navbar />
      <div className="w-full course-outline p-10">
        <div className="bg-blue-300 sm:col-start-1 text-center text-lg font-bold px-10 py-5 rounded-lg">
          <h2 id="q4">Genomics and Bioinformatics Specialization</h2>
        </div>
        <div className=" sm:col-start-1 text-center bg-yellow-200 border-white border-solid border-100 rounded-lg">
          <h3>Quarter IV</h3>
          <h1>Bio-351: Python for Biologists</h1>
          <h3>Duration: 13 Weeks</h3>
        </div>

        {/* 1st component: */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] py-5 ">
          <div className=" sm:col-start-1 rounded-lg  text-justify">
            <h3> Course Description:</h3>
            <p className="text-base">
              This course will focus on learning the basics of the Python
              programming language through genomics examples.
              <br /> <br />
              Textbook: <br />
              <a href="https://www.pythonforbiologists.org/">
                https://www.pythonforbiologists.org/
              </a>
            </p>
          </div>

          <div className="px-5 py-5">
            <figure>
              <img
                className="w-full"
                src="https://media.istockphoto.com/id/1413071933/photo/purple-dna.jpg?s=612x612&w=0&k=20&c=IOXTB0fXVaxhuUvs3iYYRFjIya1y-mOgKvLUzyvhhVM="
                alt="pic loading"
              />
            </figure>
          </div>
        </div>
        {/* Quarter five */}

        <div className=" w-full course-outline ">
          <div className=" sm:col-start-1 text-center bg-yellow-200 border-white border-solid border-100 rounded-lg">
            <h3 id="q5">Quarter V</h3>
            <h1>Bio-361: Bioinformatics with Python</h1>
            <h3>Duration: 13 Weeks</h3>
          </div>

          {/* 1st component: */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] ">
            <div className="py-5 sm:col-start-1 rounded-lg  text-justify">
              <h3> Course Description:</h3>
              <p className="text-base">
                In this course we will discover modern, next-generation
                sequencing libraries from the powerful Python ecosystem to
                perform cutting-edge research and analyze large amounts of
                biological data.
                <br /> <br />
                Textbook:
                <br />
                <a href="https://www.amazon.com/Bioinformatics-Python-Cookbook-applications-computational/dp/1803236426/ref=sr_1_1">
                  https://www.amazon.com/Bioinformatics-Python-Cookbook-applications-computational/dp/1803236426/ref=sr_1_1
                </a>
              </p>
            </div>
            <div className="px-5 py-5">
              <figure>
                <img
                  className="w-full"
                  src="https://media.istockphoto.com/id/1224202684/photo/multi-ethnic-research-team-studying-dna-mutations-female-doctor-in-foreground.jpg?s=612x612&w=0&k=20&c=bzDiXguo3h0bNmkdP1bjkuUsH2ino8J4sAIggRNAyxU="
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
