import React from "react";

const User = ({ onNext, onPrevious }) => {
  return (
    <section className="text-gray-600 body-font mt-10">
      <div className="container px-5 py-4 mx-auto">
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <button onClick={onPrevious} className="w-1/6 mx-auto">
            {"< Retour"}
          </button>
        </div>
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            User
          </h1>
        </div>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 mx-auto">
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-col -m-2">
                <div className="p-4">
                  <div className="relative">
                    <label className="leading-7 text-sm text-gray-600">
                      Adresse Mail
                    </label>
                    <input
                      type="text"
                      id="adresse_mail"
                      name="adresse_mail"
                      placeholder="carotte@tordue.fr"
                      className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-full"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <div className="relative">
                    <label className="leading-7 text-sm text-gray-600">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Pierre Feuille Ciseaux"
                      className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-full"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <div className="relative">
                    <label className="leading-7 text-sm text-gray-600">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:border-orange-500 focus:bg-white focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-full"
                    />
                  </div>
                </div>
                <div className="p-2 w-full text-center">
                  <button
                    onClick={onNext}
                    className="flex mx-auto w-full text-center justify-center font-semibold text-black bg-yellow border-0 py-4 px-6 mt-4 focus:outline-none hover:bg-yello-600 rounded-full text-sm"
                  >
                    {"Créer mon compte >"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default User;
