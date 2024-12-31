import React from "react";

const Loader1 = ({ numLoaders }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-20 animate-pulse">
      {Array(numLoaders)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="flex flex-col rounded-lg h-[460px] bg-gray-200"
          >
            <div className="flex-1 p-3">
              <div className="h-6 w-3/4 bg-gray-300 rounded mb-3"></div>
              <div className="h-6 w-1/2 bg-gray-300 rounded"></div>
            </div>
            <div className="flex mt-2 justify-between p-3">
              <div className="h-6 w-1/4 bg-gray-300 rounded"></div>
              <div className="h-6 w-1/4 bg-gray-300 rounded"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Loader1;
