import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="bg-white fixed top-0 w-full z-50 shadow-[rgba(0,_0,_0,_0.2)_0px_2px_40px_-7px]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://via.placeholder.com/200x100"
              className="h-8"
              alt="AAPCN"
            />
            <span className="self-center text-3xl font-semibold whitespace-nowrap text-[#ae1c27]">
              AAPCN
            </span>
          </Link>
          <div className="hidden w-full md:block md:w-auto">
            <ul className="text-[#ae1c27] font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-4">
              <li className="flex items-center">
                <Link
                  to="/"
                  className={`relative w-fit block py-2 px-3 rounded text-lg text-[#ae1c27] hover:text-[#8a151f] 
                             after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] 
                             after:bg-[#ae1c27] after:w-full after:transition-transform after:duration-300 after:origin-center
                             ${
                               isActive('/')
                                 ? 'after:scale-x-100'
                                 : 'after:scale-x-0 hover:after:scale-x-100'
                             }`}
                >
                  HOME
                </Link>
                <span className="hidden md:block mx-2 border-l border-gray-300 h-6"></span>
              </li>
              <li className="flex items-center">
                <Link
                  to="/sobre"
                  className={`relative w-fit block py-2 px-3 rounded text-lg text-[#ae1c27] hover:text-[#8a151f] 
                             after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] 
                             after:bg-[#ae1c27] after:w-full after:transition-transform after:duration-300 after:origin-center
                             ${
                               isActive('/sobre')
                                 ? 'after:scale-x-100'
                                 : 'after:scale-x-0 hover:after:scale-x-100'
                             }`}
                >
                  SOBRE
                </Link>
                <span className="hidden md:block mx-2 border-l border-gray-300 h-6"></span>
              </li>
              <li className="flex items-center">
                <Link
                  to="/projetos"
                  className={`relative w-fit block py-2 px-3 rounded text-lg text-[#ae1c27] hover:text-[#8a151f] 
                             after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] 
                             after:bg-[#ae1c27] after:w-full after:transition-transform after:duration-300 after:origin-center
                             ${
                               isActive('/projetos')
                                 ? 'after:scale-x-100'
                                 : 'after:scale-x-0 hover:after:scale-x-100'
                             }`}
                >
                  PROJETOS
                </Link>
                <span className="hidden md:block mx-2 border-l border-gray-300 h-6"></span>
              </li>
              <li className="flex items-center">
                <Link
                  to="/como-apoiar"
                  className={`relative w-fit block py-2 px-3 rounded text-lg text-[#ae1c27] hover:text-[#8a151f] 
                             after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] 
                             after:bg-[#ae1c27] after:w-full after:transition-transform after:duration-300 after:origin-center
                             ${
                               isActive('/como-apoiar')
                                 ? 'after:scale-x-100'
                                 : 'after:scale-x-0 hover:after:scale-x-100'
                             }`}
                >
                  COMO APOIAR
                </Link>
                <span className="hidden md:block mx-2 border-l border-gray-300 h-6"></span>
              </li>
              <li className="flex items-center">
                <Link
                  to="/contato"
                  className={`relative w-fit block py-2 px-3 rounded text-lg text-[#ae1c27] hover:text-[#8a151f] 
                             after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] 
                             after:bg-[#ae1c27] after:w-full after:transition-transform after:duration-300 after:origin-center
                             ${
                               isActive('/contato')
                                 ? 'after:scale-x-100'
                                 : 'after:scale-x-0 hover:after:scale-x-100'
                             }`}
                >
                  CONTATO
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
