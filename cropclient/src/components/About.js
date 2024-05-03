import React from "react";
import { LuBrainCircuit } from "react-icons/lu"; // Importing the LuBrainCircuit icon from react-icons
import { MdOutlineGppGood } from "react-icons/md";
import aboutImg from "../assets/about.jpg";

const About = () => {
  const info = [
    {
      text: "Our platform utilizes advanced artificial intelligence to identify crops and analyze growth stages accurately.",
      count: "AI-Based Technology",
    },
    {
      text: "We provide insights into crop development, enabling insurance companies to improve risk assessment and management.",
      count: "Enhanced Agri Practices",
    },
  ];
  return (
    <section id="about" className="py-10 text-white bg-green-700">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-green-400">Us</span>
        </h3>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-100 my-3">
              <p
                className="text-justify text-l leading-7 w-11/12 mx-auto"
                style={{ fontSize: "18px" }}
              >
                <p>
                  At CropPal, we're committed to revolutionizing agriculture
                  with cutting-edge technology. Our computer vision solution,
                  powered by ResNet395, offers unparalleled accuracy in crop
                  identification and growth stage analysis.
                </p>
                <br />
                <p>
                  By addressing challenges faced by insurance companies and
                  farmers, we provide insights for enhanced agricultural
                  practices.
                </p>
                <br />
                <p>
                  With ResNet395's high accuracy, we're reshaping the landscape
                  of agriculture, paving the way for a more sustainable future.
                </p>
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content, index) => (
                  <div key={index} className="flex flex-col items-center">
                    {index === 0 ? (
                      <LuBrainCircuit className="border rounded-full text-white text-7xl px-2 mt-2 mb-3" /> // First icon
                    ) : (
                      <MdOutlineGppGood className="border rounded-full text-white text-7xl px-2 mt-2 mb-3" /> // Second icon
                    )}
                    <h3 className="md:text-2xl text-2xl font-semibold text-green-400 mt-2">
                      {content.count}
                    </h3>
                    <span className="md:text-base text-xs mt-3">
                      {content.text}
                    </span>
                  </div>
                ))}
              </div>
              <br />
              <br />
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-45 relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
