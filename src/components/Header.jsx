import React from 'react'
import { useLocation , useNavigate} from 'react-router-dom'
const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);

  function pathMatchRoutue(route){
    if(route === location.pathname){
      return true;
    }
  }

  return (
    <div className='bg-white-b shadow-sm'>
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto sticky top-0 z-50'>
      <div>
        <img 
        src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" 
        alt="logo"
        className="h-5 cursor-pointer" 
        onClick={()=>navigate("/")}
        />
      </div>
      <div>
        <ul className='flex space-x-10'>
          <li
           className= {`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent
          ${pathMatchRoutue("/") && "text-black border-b-red-500"}`}
          onClick={()=>navigate("/")}>
            Home </li>

          <li
           className= {`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent
          ${pathMatchRoutue("/offers") && "text-black border-b-red-500"}`}
          onClick={()=>navigate("/offers")}>
            Offers</li>
          
          <li 
          className= {`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent
          ${pathMatchRoutue("/sign-in") && "text-black border-b-red-500"}`}
          onClick={()=>navigate("/sign-in")}>
            Sign In</li>
        </ul>
      </div>

      </header>
    </div>
  )
}

export default Header