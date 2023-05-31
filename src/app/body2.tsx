import Image from "next/image";
import picmain from "../../public/mainimage.jpg";
import mainpic from "../../public/mainpic.jpg";

export default function Body2() {
  return (
    <div className="maindiv">
      <div className="body1 sm:col-start-1">
        <h2>Motive of the Program:</h2>
        <p>
          In this brand-new type of curriculum, students will learn how to make
          money and boost exports in the classroom and will begin doing so
          within six months of the program's beginning. It resembles a cross
          between a corporate venture and an educational project.
        </p>
        <h2>Summary of Program:</h2>
        <p>
          This curriculum is intended for beginners who want to learn software
          development from the ground up. The first three quarters are shared by
          all specialties and are dedicated to studying Object-Oriented
          Programming and cutting-edge Full-Stack Web 2.0 development. It is
          going to be a fifteen-month-long hybrid program that includes both
          onsite and online classes and is divided into five quarters of 13
          weeks each. The emphasis will be on hands-on learning by educating
          students to produce projects. To accommodate everyone, courses will be
          held primarily on weekends or after 6:00 p.m. (Pakistan Time) on
          weekdays. It employs a hybrid teaching format, with core onsite
          classes complemented by online Zoom laboratories and recorded videos.
        </p>
      </div>
      {/* Second div */}
      <div  className="body1">
        <figure>
          <Image
            className="grid col-start-1 col-end-1 row-start-1 row-end-1 rounded-lg px-5"
            src={mainpic}
            alt=""
          />

        </figure>
      </div>
     
    </div>
  );
}
