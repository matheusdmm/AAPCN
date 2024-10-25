import React from 'react';

interface Link {
  name: string;
  href: string;
}

interface INavbar {
  links: Link[];
}

const Navbar: React.FC<INavbar> = ({ links }) => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-white fixed top-0 w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://via.placeholder.com/200x100"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#084a60] dark:text-[#084a60]">
            AAPCN
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-4 md:divide-x divide-gray-200 rtl:divide-x-reverse rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-white dark:border-gray-700">
            {links.map((link) => (
              <li key={link.name} className="pl-4">
                <a
                  href={link.href}
                  className="block py-2 px-3 text-[#084a60] rounded hover:text-[#ae1c27] md:border-0 md:p-0 dark:text-[#084a60]"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
