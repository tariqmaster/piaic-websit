import Image from "next/image";
import Aiimage from "../../public/robo.jpg";

export default function Cards() {
  return (
    <div className="maindiv">
      <div className="item">
        <img
          src="https://images.unsplash.com/photo-1642403711737-8e89f8d92b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          alt=""
        />
        <div className="desc">
          <h2>I. Web 3.0 (Blockchain) and Metaverse Specialization:</h2>
          <p>
            This Web 3.0 and Metaverse specialization focuses on developing
            full-stack Web 3.0 and Metaverse experiences for the next generation
            of the internet by specializing in building worlds that merge the
            best of cutting-edge decentralized distributed blockchains with 3D
            metaverse client experiences.
          </p>
          <h3>Quarter IV</h3>
          <p>
            W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
          </p>
          <h3>Quarter V</h3>
          <p>
            MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse
            Experiences
          </p>
          <a href="#">Read more</a>
        </div>
      </div>

      <div className="item">
        <img
          src="https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
        <div className="desc">
          <h2>
            II. Artificial Intelligence (AI) and Deep Learning Specialization:
          </h2>
          <p>The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.</p>
          <h3>Quarter IV</h3>
          <p>AI-351: Developing Planet-Scale Intelligent APIs and Python Programming</p>
          <h3>Quarter V</h3>
          <p>AI-361: Deep Learning and MLOps</p>
          <h3></h3>
          <p></p>

          <a href="#">Read more</a>
        </div>
      </div>

      <div className="item">
        <img
          src="https://images.unsplash.com/photo-1644088379091-d574269d422f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1093&q=80"
          alt=""
        />
        <div className="desc">
          <h2>
          III. Cloud-Native Computing Specialization
          </h2>
          <p>The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes. </p>
          <h3>Quarter IV</h3>
          <p>CN-351: Certified Kubernetes Application Developer (CKAD)</p>
          <h3>Quarter V</h3>
          <p>CN-361: Developing Multi-Cloud APIs using CDK for Terraform</p>
          <h3></h3>
          <p></p>

          <a href="#">Read more</a>
        </div>
      </div>

      <div className="item">
        <img
          src="https://images.unsplash.com/photo-1649959149294-d0bbf3d4b9d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
          alt=""
        />
        <div className="desc">
          <h2>
          IV. Ambient Computing and IoT Specialization:
          </h2>
          <p>The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices. </p>
          <h3>Quarter IV</h3>
          <p>AC-351: Ambient Computing with Voice Assistants and Matter Protocol Devices</p>
          <h3>Quarter V</h3>
          <p>AC-361: Embedded Programming using C and Rust</p>
          <h3></h3>
          <p></p>

          <a href="#">Read more</a>
        </div>
      </div>

      <div className="item">
        <img
          src="https://plus.unsplash.com/premium_photo-1676029883697-159cfaf67f60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <div className="desc">
          <h2>
          V. Genomics and Bioinformatics Specialization:
          </h2>
          <p>Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.</p>
          <h3>Quarter IV</h3>
          <p>Bio-351: Python for Biologists</p>
          <h3>Quarter V</h3>
          <p>Bio-361: Bioinformatics with Python</p>

          <a href="#">Read more</a>
        </div>
      </div>

      <div className="item">
        <img
          src="https://plus.unsplash.com/premium_photo-1677094310899-02303289cadf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          alt=""
        />
        <div className="desc">
          <h2>
          VI. Network Programmability and Automation Specialization:
          </h2>
          <p>More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.</p>
          <h3>Quarter IV</h3>
          <p>NPA-351: CCNA 200-301 Certification</p>
          <h3>Quarter V</h3>
          <p>NPA-361: Network Programmability and Automation:</p>

          <a href="#">Read more</a>
        </div>
      </div>

      

    </div>
  );
}
