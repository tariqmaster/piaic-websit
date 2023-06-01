import Footer from "@/app/footer";
import Navbar from "@/app/navbar";
import Image from "next/image";

export default function IoT() {
  return (
    <div>
      <Navbar />
      <div className="p-10 w-full course-outline ">
        <div className="bg-blue-300 sm:col-start-1 text-center text-lg font-bold px-10 py-5 rounded-lg">
          <h2 id="q4">Ambient Computing and IoT Specialization</h2>
        </div>
        <div className=" sm:col-start-1 text-center bg-yellow-200 border-white border-solid border-100 rounded-lg">
          <h3>Quarter IV</h3>
          <h1>
            AC-351: Ambient Computing with Voice Assistants and Matter Devices
          </h1>
          <h3>Duration: 13 Weeks</h3>
        </div>

        {/* 1st component: */}
        <div className=" sm:col-start-1 rounded-lg  text-justify">
          <h3> Course Description:</h3>
          <p className="text-base">
            Ambient computing, also commonly referred to as ubiquitous
            computing, is the concept of blending computing power into our
            everyday lives in a way that is embedded into our surroundings -
            invisible but useful. In a multi-device world, people don't want to
            spend their life fussing with technology. An ambient approach gets
            the tech out of your way so you can live your life while getting the
            help you need. It doesn't matter what device you're using, what
            context you're in, whether you're talking, typing, or tapping. The
            technology in your life works together seamlessly. Ambient computing
            uses all aspects of modern-day technology, including voice
            assistants, artificial intelligence, sensors, connectivity, cloud
            computing and more.
            <br />
            <br />
            If you were thinking that the IoT and ambient computing sound a lot
            alike, you aren't wrong; the two concepts are intertwined. IoT
            refers to the vast array of devices that connect to the internet to
            optimize their functionality, like smart sensors and smart speakers:
            ambient computing builds on that. Ambient computing focuses on the
            interaction between these devices once they are connected.
            <br />
            <br />
            Matter, the next-generation smart home standard, solves many smart
            home pain points while bringing all our IoT devices together. Some
            of the biggest tech companies are working together to make Matter a
            unified protocol for future smart homes. These companies include
            Apple, Amazon, and Google. This means Apple HomeKit, Amazon Alexa,
            Samsung SmartThings, Google Nest, and Samsung SmartThings will
            support the Matter standard by default for all new devices.
            <br />
            <br />
            In this course we will learn to build smart homes with Amazon Alexa
            and Matter protocol.
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] py-5 ">
            <div className="sm:col-start-1">
              <h3>Course Outline:</h3>
              <p className="text-base text-justify">
                1. Alexa Skill Developement
                <br />
                <a href="https://developer.amazon.com/en-US/alexa">
                  https://developer.amazon.com/en-US/alexa
                </a>
                <br />
                <br />
                2. Alexa with Matter Protocol
                <br />
                <a href="https://developer.amazon.com/en-US/alexa/matter">
                  https://developer.amazon.com/en-US/alexa/matter
                </a>
                <br />
                <a href="https://developer.amazon.com/en-US/blogs/alexa/device-makers/2022/07/alexa-live-2022-ack-sdk-matter.html">
                  https://developer.amazon.com/en-US/blogs/alexa/device-makers/2022/07/alexa-live-2022-ack-sdk-matter.html
                </a>
              </p>
            </div>
            <div className="px-5">
              <figure>
                <img
                  className="w-full"
                  src="https://media.istockphoto.com/id/1349338605/photo/futuristic-technology-retail-warehouse-worker-doing-inventory-walks-when-digitalization.jpg?s=612x612&w=0&k=20&c=gpQE3Cwcsc6205n1-HWZhsOwx2sVmCCJtewYcim8Xk0="
                  alt="pic loading"
                />
              </figure>
            </div>
          </div>
        
      </div>
      {/* Quarter five */}

      <div className=" w-full course-outline ">
        <div className=" sm:col-start-1 text-center bg-yellow-200 border-white border-solid border-100 rounded-lg">
          <h3 id="q5">Quarter V</h3>
          <h1>AC-361: Embedded Programming using C and Rust</h1>
          <h3>Duration: 13 Weeks</h3>
        </div>

        {/* 1st component: */}
        <div className=" sm:col-start-1 rounded-lg  text-justify">
          <h3> Course Description:</h3>
          <p className="text-base">
            This is an introductory course about using the C and Rust
            Programming Languages on "Bare Metal" embedded systems, such as
            Microcontrollers. We will start by introducing embedded systems and
            move on to learn the C++ and Rust programming languages. We'll learn
            about basic programming concepts using C and Rust, then we will
            explore key concepts in electronics, microcontrollers, and embedded
            programming. It is a fast-paced, thorough introduction to
            programming with C and Rust that will have you writing programs,
            solving problems, burning your code on microcontrollers, playing
            with GPIOs, and making things that work in no time.
          </p>
          <div>
            <div>
              <h3>Course Outline:</h3>
              <br />
              <div className="grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] ">
                {/* component A */}
                <div className="sm:col-start-1">
                  <h4 className="font-bold">
                    1. Introduction to the Internet of Things and Embedded
                    Systems
                  </h4>

                  <p className="text-base">
                    (Weeks 1 and 2)
                    <b />
                  </p>
                  <p className="text-base text-justify text-ellipsis">
                    <a href="https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=sharing">
                      https://docs.google.com/presentation/d/14
                      <br />
                      OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHY
                      <br />
                      B3XlEZo/edit?usp=sharing
                    </a>
                    <br />
                    What is the Fourth Industrial Revolution?
                    <br />
                    What is IoT?
                    <br />
                    Embedded Systems
                    <br />
                    Hardware and Software for IoT
                    <br />
                    Edge and Cloud Computing
                    <br />
                    The future of IoT is AI
                    <br />
                    Blockchain in the Internet of Things?
                    <br />
                    IoT + AI + Blockchain: The Fourth Industrial Revolution has
                    begun
                    <br />
                    How will Matter change the IoT Infrastructure and address
                    issues
                    <br />
                    Metaverse and IoT
                    <br />
                    Mid-Term I: Introduction to the Internet of Things (IoT)
                    Quiz in Week 3
                    <br />
                    Total Questions: 46, Total Time: 60 minutes
                  </p>
                  <br />
                  <h4 className="font-bold">
                    2. The C Reference Book: The C programming language
                  </h4>
                  <p className="text-base text-justify ">
                    Embedded Programming book: Internet of things with ESP8266
                    <br />
                    Download Link:
                    <br />
                    <a href="https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing">
                      https://drive.google.com/drive/folders/1CZ
                      <br />
                      FxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing
                    </a>
                  </p>
                  <br />
                </div>
                <div className="px-5">
                  <figure>
                    <img
                      className="w-full"
                      src="https://media.istockphoto.com/id/943787164/photo/3d-rendering-network-and-data-exchange-over-planet-earth-in-space-connection-lines-around.jpg?s=612x612&w=0&k=20&c=ghFVjrD_dM0u9CNcHEkoctmg27PXF5gLbf45QNxnrlM="
                      alt="pic loading"
                    />
                  </figure>
                </div>
              {/* B component */}
                    
             <div className="sm:col-start-1 px-5">
                <figure>
                  <img
                    className="w-full"
                    src="https://media.istockphoto.com/id/869356832/photo/big-data-futuristic-visualization-abstract-illustration.jpg?s=612x612&w=0&k=20&c=MO9IIns53PYnSRR7_vkE7xXWqvEQL84WRL5UuiapihY="
                    alt="pic loading"
                  />
                </figure>
              </div>
              <div>
                <h4 className="font-bold">
                  3. Introduction to C Part 1 (Weeks 3B, 4, and 5)
                </h4>
                <p className="text-base text-justify">
                  C environment Setup for (Windows, Linux, and Mac OS systems)
                  Chapters 1-2 of “The C programming language”
                  <br />
                  ●       Variable names types
                  <br />
                  ●       Data types and sizes
                  <br />
                  ●       Constants
                  <br />
                  ●       Arithmetic operations
                  <br />
                  ●       Logical and relational operators
                  <br />
                  ●       Type conversions.
                  <br />
                  ●       Bitwise operators
                  <br />
                  ●       Conditional expressions.
                  <br />
                  Programming Assignments will also be given.
                </p>
                <br />
                <h4 className="font-bold">
                  4. C Programming Part 2 (Weeks 6 and 7){" "}
                </h4>
                <p className="text-base text-justify">
                  Topics 3 and 4 of “The C programming language”
                  <br />
                  ●       Control flow statements (else if, loops, switch, break
                  continue)
                  <br />
                  ●      Function and Program structure(Returning and
                  non-returning, scope rules, Recursion)
                  <br />
                  Programming Assignments will also be given.
                </p>
                <br />
              </div>
                <div className="sm:col-start-1">
                <h4 className="font-bold">
                  5. Introduction to Embedded systems Part 1 (Weeks 8)
                </h4>
                <p className="text-base text-justify">
                  Chapter 1 of “Internet of things with ESP8266” <br />
                  ●       Arduino IDE installation and env setup for ESP8266
                  <br />
                  ●       Burning your first code on ESP8266
                  <br />
                  <br />
                  Project-based Assignments will also be given. <br />
                  Mid-Term II: C Programming Quiz 1 in Week 9 <br />
                  Total Questions: 62, Total Time: 75 minutes <br />
                  <br />
                </p>
              </div>
              
              <div className=" py-5">
                <figure>
                  <img
                    className="w-full"
                    src="https://media.istockphoto.com/id/1154032060/photo/the-cyborgs-fingertips-embedded-with-electronic-circuitry-grabbed-the-biochip-in-the.jpg?s=612x612&w=0&k=20&c=aGX8Wwe08BdpzjkSq3EjqRRMzHlAHa4vlnHHNx2_E2c="
                    alt="pic loading"
                  />
                </figure>
              </div>
              
              <div className="sm:col-start-1">
                <h4 className="font-bold">
                  6. Introduction to Embedded systems Part 2 (Weeks 9-12)
                </h4>
                <p className="text-base md:text-clip text-justify">
                  Chapters 2-5 of “Internet of things with ESP8266” <br />
                  ●       Connecting your hardware to wifi.
                  <br />
                  ●      
                  <a href="https://randomnerdtutorials.com/wifimanager-with-esp8266-autoconnect-custom-parameter-and-manage-your-ssid-and-password/">
                    https://randomnerdtutorials.com/wifimanager-with-esp8266-autoconnect-custom-parameter-and-manage-your-ssid-and-password/
                  </a>
                  <br />
                  ●       Reading data from GPIOs.
                  <br />
                  ●      
                  <a href="https://randomnerdtutorials.com/esp8266-nodemcu-digital-inputs-outputs-arduino/#:~:text=ESP8266%20NodeMCU%20Read%20Digital%20Inputs,number)">
                    https://randomnerdtutorials.com/esp8266-nodemcu-digital-inputs-outputs-arduino/#:~:text=ESP8266%20NodeMCU%20
                    <br />
                    Read%20Digital%20Inputs,number)%20
                    <br />
                    you%20are%20referring%20to
                  </a>
                  .
                  <br />
                  ●       Controlling LEDs.
                  <br />
                  ●       Reading data from digital sensors.
                  <br />
                  ●      
                  <a href="https://randomnerdtutorials.com/esp32-dht11-dht22-temperature-humidity-sensor-arduino-ide/">
                    https://randomnerdtutorials.com/esp32-dht11-dht22-temperature-humidity-sensor-arduino-ide/
                  </a>
                  <br />
                  ●       Cloud data logging.
                  <br />
                  <br />
                  ●      
                  <a href="https://tttapa.github.io/ESP8266/Chap16%20-%20Data%20Logging.html">
                    https://tttapa.github.io/ESP8266/Chap16%20-%20Data%20Logging.html
                  </a>
                  <br />
                  ●      
                  <a href="https://circuitdigest.com/microcontroller-projects/nodemcu-datalogger-to-save-temperature-and-pressure-data-on-thinger-io-cloud-platform">
                    https://circuitdigest.com/microcontroller-projects/nodemcu-datalogger-to-save-temperature-and-pressure-data-on-thinger-io-cloud-platform
                  </a>
                  <br />
                  ●      
                  <a href="https://iotdesignpro.com/projects/nodemcu-data-logger-to-upload-data-on-webserver">
                    https://iotdesignpro.com/projects/nodemcu-data-logger-to-upload-data-on-webserver
                  </a>
                  <br />
                  <br />
                  ●       Displaying data on the cloud.
                  <br />
                  ●      {" "}
                  <a href="https://github.com/adesolasamuel/NodeMCU-DHT-Data-to-Arduino-IoT-Cloud">
                    https://github.com/adesolasamuel/NodeMCU-DHT-Data-to-Arduino-IoT-Cloud
                  </a>
                  <br />
                  <br />
                  ●       Controlling controller remotely.
                  <br />
                  ●      {" "}
                  <a href="https://www.instructables.com/Control-ESP8266-Over-the-Internet-from-Anywhere/">
                    https://www.instructables.com/Control-ESP8266-Over-the-Internet-from-Anywhere/
                  </a>
                  <br />
                  <br />
                  ●       Controlling a lamp anywhere in the world.
                  <br />
                  ●       Interacting with different web services.
                </p>
                <br />
              </div>
              

              <div className=" px-5">
                <figure>
                  <img
                    className="w-full"
                    src="https://media.istockphoto.com/id/1154031952/photo/the-cyborgs-fingertips-embedded-with-electronic-circuitry-capture-cells-and-molecules.jpg?s=612x612&w=0&k=20&c=rQGo2ZMKpNyo7QgxIft-fXJp88wAZZ7xObY9nbs2Wio="
                    alt="pic loading"
                  />
                </figure>
              </div>
              <div className="sm:col-start-1">

                <h4 className="font-bold">
                  * Embedded Programming using Rust (Extra Weeks in the Course)
                </h4>
                <p className="text-base text-justify">
                  <a href=""></a>https://www.rust-lang.org/what/embedded
                  <br />
                  <a href=""></a>https://crates.io/crates/esp8266
                  <br />
                  <br />
                </p>
                <h4 className="font-bold">
                  * Hardware Requirements: <br />
                </h4>
                <p className="text-base text-justify">
                  a.      Esp8266 (Node MCU)
                  <br />
                  b.      Jumper Wires
                  <br />
                  c.       Bread Board
                  <br />
                  d.     LEDs
                  <br />
                  e.      Sensors: (Dht11, ultrasonic sensor, IR sensor)
                </p>
              </div>
            

      </div>
      </div>
      </div></div></div></div>
      <Footer />
    </div>
  );
}
