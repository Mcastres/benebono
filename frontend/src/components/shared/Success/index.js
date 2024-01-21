import React from "react";

import SuccessIcon from "./successIcon";

const Success = () => {
  return (
    <section className="text-gray-600 body-font mt-10">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <SuccessIcon />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 mt-5 font-medium text-gray-900">
            Vous êtes quelqu'un de bien
          </h1>
          <p className="mb-8 leading-relaxed">
            Votre compte a bien été créé ! Il n'y a plus qu'à vous laisser
            porter...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Success;
