import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const ItemsCart = () => {
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 ">
      <img
        src="https://w7.pngwing.com/pngs/435/847/png-transparent-pincho-canape-skewer-fruit-others-thumbnail.png"
        alt=""
        className="w-[50px] h-[50px]"
      />
      <div className="">
        <h2 className="font-bold text-gray-800">Onion Pizza</h2>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold">₹120k</span>
          <div className="flex justify-center items-center gap-2 right-7 absolute">
            <AiOutlinePlus className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all cursor-pointer ease-linear" />
            <span>3</span>
            <AiOutlineMinus className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all cursor-pointer ease-linear" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsCart;
