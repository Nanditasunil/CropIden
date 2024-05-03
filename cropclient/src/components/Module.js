import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import mod1 from "../assets/iden.png";
import mod2 from "../assets/age.png";

const Module = () => {
  const skills = [
    {
      logo: mod1,
      level: "Crop Identification",
      desc: "Our cutting-edge computer vision technology excels in accurately identifying various crops, regardless of their growth stage or environmental conditions. This enables insurance companies to streamline their risk assessment process and make informed, data-driven decisions.",
      button: "Identify",
      link: "/cropiden", // URL path for Crop Identification component
    },
    {
      logo: mod2,
      level: "Age Determination",
      desc: "Understanding the precise growth stage of crops is crucial for insurance companies to assess risk accurately. Leveraging advanced algorithms, we determine the age of crops based on visual data, providing invaluable insights for insurance analysis and agricultural management.",
      button: "Age",
      link: "/ageiden", // URL path for Age Determination component
    },
  ];

  return (
    <section id="module" className="py-10 bg-green-300 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          Our <span className="text-cyan-600">Modules</span>
        </h3>
        <div
          className="flex items-center justify-center mt-12 gap-10 flex-wrap"
          style={{ gap: "18rem" }}
        >
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[26rem] bg-green-800 p-10 rounded-xl flex flex-col items-center justify-center"
            >
              <div className="w-32 h-32 flex items-center justify-center rounded-full">
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  <img
                    src={skill.logo}
                    className="w-24 h-24 object-contain "
                    alt={skill.level}
                  />
                </div>
              </div>
              <p className="text-3xl mt-4 text-green-400 font-semibold">
                {skill.level}
              </p>
              <p className="text-1xl mt-3">{skill.desc}</p>
              {/* Use Link from react-router-dom to navigate to the specified components */}
              <Link to={skill.link} className="btn-primary mt-8">
                {skill.button}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Module;
