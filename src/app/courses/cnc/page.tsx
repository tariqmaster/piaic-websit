import Footer from "@/app/footer";
import Navbar from "@/app/navbar";
import Image from "next/image";

export default function CNC() {
  return (
    <div>
      <Navbar />
      <div className="p-10 w-full course-outline ">
        <div className="bg-blue-300 sm:col-start-1 text-center text-lg font-bold px-10 py-5 rounded-lg">
          <h2>
          Cloud-Native Computing Specialization
          </h2>
        </div>
        <div className=" sm:col-start-1 text-center bg-yellow-200 border-white border-solid border-100 rounded-lg">
          <h3 id="q4">Quarter IV</h3>
          <h1>
          CN-351: Certified Kubernetes Application Developer (CKAD)
          </h1>
          <h3>Duration: 13 Weeks</h3>
        </div>

        {/* 1st component: */}
        <div className=" sm:col-start-1 rounded-lg  text-justify p-5">
          <h3> Course Description:</h3>
          <p className="text-base">
          Cloud-native architecture and technologies are an approach to designing, constructing, and operating workloads that are built in the cloud and take full advantage of the cloud computing model. Cloud-native technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds. Containers, service meshes, microservices, immutable infrastructure, and declarative APIs exemplify this approach.
          <br/><br/>
These techniques enable loosely coupled systems that are resilient, manageable, and observable. Combined with robust automation, they allow engineers to make high-impact changes frequently and predictably with minimal toil.
<br/><br/>
Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications. In this course, you will learn how to develop cloud applications using cloud-native technologies like Containers, Kubernetes, and CDK for Kubernetes.

          </p>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] py-5 ">
          <div className="sm:col-start-1">
            <h2>Course Outline:</h2>
            <p className="text-base">
            1. Kubernetes: Up and Running: Dive into the Future of Infrastructure 3rd Edition
            <br/><a href="https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_3">https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_3</a> 
<br/><br/>
2. Cloud Development Kit for Kubernetes
<br/><a href="https://cdk8s.io/">https://cdk8s.io/</a> 


            </p>
            </div>
           
            <div className="px-5">
              <figure>
                <img
                  className="w-full"
                  src="https://images.unsplash.com/photo-1667372459567-3853510dd5ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
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
          <h1>
          CN-361: Developing Multi-Cloud Apps using CDK for Terraform
          </h1>
          <h3>Duration: 13 Weeks</h3>
        </div>

        {/* 1st component: */}
        <div className=" sm:col-start-1 rounded-lg  text-justify p-5">
          <h3> Course Description:</h3>
          <p className="text-base">
          Terraform lets you use the same workflow to manage multiple providers and handle cross-cloud dependencies. This simplifies management and orchestration for large-scale, multi-cloud infrastructures.
<br/><br/>
Cloud Development Kit for Terraform (CDKTF) allows you to use familiar programming languages to define and provision infrastructure. This gives you access to the entire Terraform ecosystem without learning HashiCorp Configuration Language (HCL) and lets you leverage the power of your existing toolchain for testing, dependency management, etc.

            </p>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] py-5 ">
            <h2>Course Outline:</h2>
            <div className="sm:col-start-1">
              <p className="text-base text-justify">
              CDK for Terraform
              <br/> <a href="https://developer.hashicorp.com/terraform/cdktf">https://developer.hashicorp.com/terraform/cdktf</a>   
              </p>
            </div>
            <div className="px-5">
              <figure>
                <img 
                  src="https://media.istockphoto.com/id/1201248671/photo/science-fiction-city-with-astronauts-and-a-terraforming-dome.webp?s=1024x1024&w=is&k=20&c=uZr7d_OdwdJjkGw4WXcyHuMVSGhCuITdzn-aZ98unHg="
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
