import { FaReact } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";





const Tech = () => {
  return (
    <div>
      <h1  className="text-center font-bold	text-2xl mb-5 sm:text-lg sm-font-bold">Technology I Use</h1>
      <div className="devicons grid grid-cols-4 justify-items-center	gap-10 cursor-pointer lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      <FaReact size={100} className="hover:scale-125	hover:text-red-400 "/>
      <FaJava size={100} className="hover:scale-125	hover:text-red-400"/>
      <FaVuejs size={100} className="hover:scale-125	hover:text-red-400"/>
      <FaCss3 size={100} className="animate-bounce hover:scale-125 hover:text-red-400"/>
      <FaPython size={100} className="hover:scale-125	hover:text-red-400"/>
      <FaAngular size={100} className="hover:scale-125	hover:text-red-400"/>







      </div>
    </div>
  )
}
export default Tech