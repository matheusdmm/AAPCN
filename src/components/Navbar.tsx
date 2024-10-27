import { Link } from 'react-router-dom';
import { useNavbar } from '../logic/LNavbar';

const Navbar = () => {
  const { isMenuOpen, toggleMenu, isActive, menuRoutes, logo } = useNavbar();

  return (
    <nav className="bg-white fixed top-0 w-full z-50 shadow-[rgba(0,_0,_0,_0.2)_0px_2px_40px_-7px]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-8" alt="AAPCN" />
          <span className="self-center text-3xl font-semibold whitespace-nowrap text-[#ae1c27]">
            AAPCN
          </span>
        </Link>

        {/* Botão de Menu Mobile com Efeito */}
        <button
          onClick={toggleMenu}
          className="md:hidden block text-[#ae1c27] focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className={`w-6 h-6 ${
              isMenuOpen ? 'animate__animated animate__jello' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            onAnimationEnd={(e) =>
              e.currentTarget.classList.remove(
                'animate__animated',
                'animate__jello'
              )
            }
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div
          className={`w-full md:block md:w-auto ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="text-[#ae1c27] font-medium flex flex-col md:flex-row md:space-x-4 p-4 md:p-0 mt-4 rounded-lg bg-white md:bg-transparent">
            {menuRoutes.map((path, index) => (
              <li key={index} className="flex items-center">
                <Link
                  to={path}
                  onClick={() => toggleMenu()}
                  className={`relative w-fit block py-2 px-3 rounded text-lg 
                              text-[#ae1c27] hover:text-[#8a151f] 
                              after:content-[''] after:absolute after:left-0 
                              after:bottom-0 after:h-[3px] after:bg-[#ae1c27] 
                              after:w-full after:transition-transform 
                              after:duration-300 after:origin-center
                              ${
                                isActive(path)
                                  ? 'after:scale-x-100'
                                  : 'after:scale-x-0 hover:after:scale-x-100'
                              }`}
                >
                  {path === '/' ? 'HOME' : path.substring(1).toUpperCase()}
                </Link>
                {index < 4 && (
                  <span className="hidden md:block mx-2 border-l border-gray-300 h-6"></span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
