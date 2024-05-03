import React from "react";

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
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                At [Your Website Name], we are committed to transforming the
                landscape of agriculture through cutting-edge technology. Our
                computer vision-based solution is designed to address the
                challenges faced by insurance companies and farmers alike.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-2xl text-2xl font-semibold text-green-400 ">
                      {content.count}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
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
