import { FaReact } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";





const Tech = () => {
  return (
    <div>
      <h1  className="text-center font-bold	text-2xl mb-5">Technology I Use</h1>
      <div className="devicons grid grid-cols-4 justify-items-center	gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      <FaReact size={100} className="hover:size-[200px] hover:text-red-400"/>
      <FaJava size={100}/>
      <FaVuejs size={100}/>
      <FaCss3 size={100} className="animate-bounce"/>
      <FaPython size={100}/>
      <FaAngular size={100}/>







      </div>
    </div>
  )
}
export default Tech