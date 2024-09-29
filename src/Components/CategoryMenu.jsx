import React from "react";

const CategoryMenu = () => {
  return (
    <div className="mx-6">
      <h3>Find the best food</h3>
      <div>
        <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white cursor-pointer ">
          All
        </button>
        <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white cursor-pointer ">
          Lunch
        </button>
        <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white cursor-pointer ">
          Breakfast
        </button>
        <button className="px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white cursor-pointer ">
          Dinner
        </button>
      </div>
    </div>
  );
};

export default CategoryMenu;
