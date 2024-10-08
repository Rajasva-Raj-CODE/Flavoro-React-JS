import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../Redux/slices/CartSlice";

const ItemsCart = ({ id, name, qty, price, img }) => {
  const dispatch = useDispatch();
  
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3 relative">
      <MdDelete
        className="absolute right-7 text-gray-600 cursor-pointer"
        onClick={() => dispatch(removeFromCart({id}))} 
      />
      <img src={img} alt={name} className="w-[50px] h-[50px]" />  
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold">₹{price}</span>
          <div className="flex justify-center items-center gap-2 right-7 absolute">
            <AiOutlinePlus className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all cursor-pointer ease-linear" />
            <span>{qty}</span>
            <AiOutlineMinus className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all cursor-pointer ease-linear" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsCart;
