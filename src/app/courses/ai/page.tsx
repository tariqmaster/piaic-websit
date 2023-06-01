import Footer from "@/app/footer";
import Navbar from "@/app/navbar";
import Image from "next/image";

export default function Ai() {
  return (
    <div>
      <Navbar />
      <div className="p-10 w-full course-outline ">
        <div className="bg-blue-300 sm:col-start-1 text-center text-lg font-bold px-10 py-5 rounded-lg">
          <h2 id="q4">Artificial Intelligence (AI) and Deep Learning Specialization</h2>
        </div>
        <div className=" sm:col-start-1 text-center bg-yellow-200 border-white border-solid border-100 rounded-lg">
          <h3>Quarter IV</h3>
          <h1>
            AI-351: Developing Planet-Scale Intelligent APIs and Python
            Programming
          </h1>
          <h3>Duration: 13 Weeks</h3>
        </div>

        {/* 1st component: */}
        <div className=" sm:col-start-1 rounded-lg  text-justify p-5">
          <h3> Course Description:</h3>
          <p className="text-base">
            Artificial intelligence is the simulation of human intelligence
            processes by machines, especially computer systems. The AI and Deep
            Learning Specialization is a foundational program that will aid in
            your comprehension of deep learning's potential, difficulties, and
            effects as well as equip you to take part in the creation of
            cutting-edge AI technology.
            <br />
            We will start this course by understanding the fundamentals and use
            cases for AI and move on to building next-gen intelligent apps using
            OpenAI’s powerful models and Next.js 13.
            <br />
            We'll conclude the course by learning about basic programming
            concepts using Python, such as lists, dictionaries, classes,
            functions, and loops, and practice writing clean and readable code
            with exercises for each topic. We'll also learn how to make your
            programs interactive and how to test your code safely before adding
            it to a project. It is a fast-paced, thorough introduction to
            programming with Python 3.10+ that will have you writing programs,
            solving problems, and making things that work in no time. In this
            quarter we will also learn Git, the distributed version control
            system. We will also review Git-based GitHub services.
          </p>
          <br />

          <div className="grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] py-5 ">
            <h2>Course Outline:</h2>
            <br />
            <br />
            <div className="sm:col-start-1">
              <h3>1. Introduction to Machine Learning, Data Science, and AI</h3>
              <p className="text-base text-justify">
                AI for Everyone
                <br />
                <a href="https://www.coursera.org/learn/ai-for-everyone">
                  https://www.coursera.org/learn/ai-for-everyone
                </a>
                <br />
                <br />
                AI for Everyone Quiz in Week 3 <br />
                Total Questions: 60, Total Time: 75 minutes
                <br />
              </p>
              <br />
              <h3>
                2. Building Next-Gen Intelligent Apps with OpenAI’s Powerful
                Models{" "}
              </h3>
              <p className="text-base text-justify">
                We will cover GPT-4, ChatGPT, etc. and Next.js 13
                <br />
                <a href="https://openai.com/api/">https://openai.com/api/</a>
                <a href="https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45">
                  https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45
                </a>
                <br />
                <br />
                AI for Everyone Quiz in Week 3 <br />
                Total Questions: 60, Total Time: 75 minutes
                <br />
              </p>
              <br />
              <h3>3. Python Crash Course for TypeScript Developers</h3>
              <p className="text-base text-justify">
                Python Crash Course, 2nd Edition: A Hands-On, Project-Based
                Introduction to Programming 2nd Edition
                <br />
                <a href="https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_5">
                  https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_5
                </a>
              </p>
            </div>{" "}
            <div className="px-5">
              <figure>
                <Image
                  className="w-full"
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
                  alt="pic loading"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      {/* Quarter five */}

      <div className="p-10 w-full course-outline ">
        <div className=" sm:col-start-1 text-center bg-yellow-200 border-white border-solid border-100 rounded-lg">
          <h3 id="q5">Quarter V</h3>
          <h1>AI-361: Deep Learning and MLOps</h1>
          <h3>Duration: 13 Weeks</h3>
        </div>

        {/* 1st component: */}
        <div className=" sm:col-start-1 rounded-lg  text-justify p-5">
          <h3> Course Description:</h3>
          <p className="text-base">
            This course will help you understand the capabilities, challenges,
            and consequences of deep learning and prepare you to participate in
            the development of leading-edge AI technology. We will finish the
            program by learning how to envision, create, and maintain integrated
            systems that run constantly in production. Production systems must
            manage constantly changing data, in stark contrast to typical
            machine learning modeling. The production system must also operate
            continuously at the lowest possible cost while delivering the
            highest possible performance.
          </p>
          <br />

          <div className="grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] py-5 ">
            <h2>Course Outline:</h2>
            <br />
            <br />
            <div className="sm:col-start-1">
              <h3>1. Deep Learning with Tensorflow</h3>
              <p className="text-base text-justify">
                Deep Learning with Python, Second Edition 2nd Edition
                <a href="https://www.amazon.com/Learning-Python-Second-Fran%C3%A7ois-Chollet/dp/1617296864/ref=sr_1_2">
                  https://www.amazon.com/Learning-Python-Second-Fran%C3%A7ois-Chollet/dp/1617296864/ref=sr_1_2
                </a>
              </p>
              <br />
              <h3></h3>
              <p className="text-base text-justify"></p>
              <br />
              <h3>
                2. Machine Learning Engineering for Production (MLOps) using
                Terraform for CDK
              </h3>
              <p className="text-base text-justify">
                A Comprehensive Guide to MLOps Terraform: Infrastructure As
                Code(IaC)
                <br />
                <a href="https://betterprogramming.pub/a-comprehensive-guide-to-mlops-infrastructure-as-code-iac-ef4c97742351">
                  https://betterprogramming.pub/a-comprehensive-guide-to-mlops-infrastructure-as-code-iac-ef4c97742351
                </a>
                <br />
                <br />
                MLOps leveraging AWS SageMaker and Terraform
                <br />
                <a href="https://towardsdatascience.com/mlops-leveraging-aws-sagemaker-terraform-and-gitlab-e7d97eaa6dce">
                  https://towardsdatascience.com/mlops-leveraging-aws-sagemaker-terraform-and-gitlab-e7d97eaa6dce
                </a>
              </p>
            </div>
            <div className="px-5">
              <figure>
                <Image
                  className="w-full"
                  src="https://media.istockphoto.com/id/1161853610/photo/robot-hand-shake.jpg?s=612x612&w=0&k=20&c=SS_vVgcoRf7a_CMTbBB2srCHQ3krNhJVd0AY29Mbirw="
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
