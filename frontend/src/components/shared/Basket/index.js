import React from "react";

const Basket = ({ baskets, onNext, onPrevious }) => {
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
            Basket
          </h1>
        </div>
        <div className="flex flex-col items-center">
          {baskets && baskets.map((basket) => (
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={basket.id}>
              <div
                className="h-full flex items-center border-orange border p-4 rounded-lg cursor-pointer"
                onClick={onNext}
              >
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium text-xl pb-1">
                    {basket.title}
                  </h2>
                  <p className="text-gray-500 pb-2">{basket.description}</p>
                  <p className="text-gray-900 title-font font-medium text-xl">
                    {basket.price}€ / semaine
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Basket;
