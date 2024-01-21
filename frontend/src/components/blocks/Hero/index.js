import React from "react";

import Link from "next/link";

const Hero = ({
  hero_text,
  hero_sub_text,
  hero_image,
  ctas,
  background_color,
}) => {
  return (
    <section
      className={`text-gray-600 body-font flex-grow flex w-screen justify-center items-center ${
        background_color === "Orange" ? "bg-orange" : "bg-green"
      }`}
    >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-7xl text-4xl mb-4 font-medium text-white">
            {hero_text}
          </h1>
          <p className="mb-8 leading-relaxed text-white/90 text-lg font-thin">
            {hero_sub_text}
          </p>

          <div className="flex justify-center">
            {ctas &&
              ctas.map((cta) => {
                return (
                  <Link href={cta.link} key={cta?.id}>
                    <button className="inline-flex text-black bg-yellow border-0 py-4 px-6 focus:outline-none hover:bg-yello-600 rounded-full text-sm">
                      {cta.text}
                    </button>
                  </Link>
                );
              })}
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={`http://localhost:1337${hero_image?.data?.attributes?.url}`}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
