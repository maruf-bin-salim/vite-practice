import { useState } from "preact/hooks";
import { Link, useLocation } from "react-router-dom";

function MobileNavbar() {
    const [isOpen, setIsOpen] = useState<Boolean>(false);

    let currentRoute = useLocation().pathname;
  
    return (
      <div className="flex items-center justify-between p-4 text-white bg-gray-800">
        <div className="text-xl font-semibold">Logo</div>
        <div className="text-xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          Menu
        </div>
        {
          isOpen && (
            <div className="absolute top-0 left-0 flex flex-col w-full h-screen p-4 text-white bg-gray-800">
              <div className="flex justify-between w-full">
                <div className="text-xl font-semibold">Logo</div>
                <div className="flex justify-end w-full text-xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                  close
                </div>
              </div>
              <div className="flex flex-col items-center justify-center flex-1 w-full text-4xl">
  
                <Link to="/" className="py-2">
                    <p onClick={() => currentRoute === "/" ? setIsOpen(false) : null}>
                        Home
                    </p>
                </Link>
                <Link to="/about" className="py-2">
                    <p onClick={() => currentRoute === "/about" ? setIsOpen(false) : null}>
                        About
                    </p>
                </Link>
                <Link to="/contact" className="py-2">
                    <p onClick={() => currentRoute === "/contact" ? setIsOpen(false) : null}>
                        Contact
                    </p>
                </Link>
              </div>
            </div>
          )
        }
      </div>
    )
  
  }

export default MobileNavbar;