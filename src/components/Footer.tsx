import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#ae1c27] text-white py-8 shadow-[0px_-2px_15px_12px_#00000024]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-4">
            <Link
              to="/sobre"
              className="text-white hover:text-[#FAFAFA] relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#FAFAFA] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              Sobre
            </Link>
            <Link
              to="/projetos"
              className="text-white hover:text-[#FAFAFA] relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#FAFAFA] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              Projetos
            </Link>
            <Link
              to="/como-apoiar"
              className="text-white hover:text-[#FAFAFA] relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#FAFAFA] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              Como Ajudar
            </Link>
            <Link
              to="/contato"
              className="text-white hover:text-[#FAFAFA] relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#FAFAFA] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              Contato
            </Link>
          </div>

          <div className="flex space-x-4">
            <a
              href="#"
              className="text-white hover:text-[#FAFAFA]"
              aria-label="Facebook"
            >
              <svg
                className="h-5 w-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12zm-12.002 3.071V18h-2.744v-3.929H8.949V12h2.305V9.882c0-2.277 1.368-3.41 3.375-3.41.982 0 1.829.073 2.079.106v2.404h-1.423c-1.115 0-1.33.529-1.33 1.305V12h2.667l-.427 2.142h-2.24z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-white hover:text-[#FAFAFA]"
              aria-label="Instagram"
            >
              <svg
                className="h-5 w-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.237 0 3.634.012 4.915.071 1.293.061 2.224.274 2.748.458a5.578 5.578 0 011.963 1.216 5.578 5.578 0 011.216 1.963c.184.524.397 1.455.458 2.748.059 1.281.071 1.678.071 4.915s-.012 3.634-.071 4.915c-.061 1.293-.274 2.224-.458 2.748a5.578 5.578 0 01-1.216 1.963 5.578 5.578 0 01-1.963 1.216c-.524.184-1.455.397-2.748.458-1.281.059-1.678.071-4.915.071s-3.634-.012-4.915-.071c-1.293-.061-2.224-.274-2.748-.458a5.578 5.578 0 01-1.963-1.216 5.578 5.578 0 01-1.216-1.963c-.184-.524-.397-1.455-.458-2.748C2.175 15.797 2.163 15.4 2.163 12s.012-3.634.071-4.915c.061-1.293.274-2.224.458-2.748A5.578 5.578 0 013.8 3.2a5.578 5.578 0 011.963-1.216C6.461 1.784 7.382 1.571 8.675 1.51 9.956 1.5 10.353 1.487 12 1.487s3.634.012 4.915.071zm0-2.163C8.738 0 8.144.012 7.01.078 5.896.145 5.118.388 4.573.644c-1.16.374-2.052.869-2.866 1.683C.869 3.307.374 4.199 0 5.36.244 6.893.687 8.09 1.828 9.43c1.142 1.341 2.541 2.089 4.4 2.089h3.257V11H5.839c-1.348 0-2.5-.78-3.118-1.908C1.367 8.112.746 6.842.7 5.485 1.077 4.037 2.019 2.934 4.927 3.026c1.055.035 1.846.003 2.456.102.685.128 1.418.33 2.058.698.918.522 1.81 1.267 2.53 2.016.554.586 1.032 1.145 1.455 1.758.51.935 1.168 1.913 1.894 2.863C19.437 15.562 18 17 15 17H12v3h3c1.769 0 3.552-.354 5.056-1.059 1.074-.579 2.182-1.459 3.09-2.377C20.165 16.163 22.012 12 22.012 12 22.012 5.878 17.121 0 12 0z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-white hover:text-[#FAFAFA]"
              aria-label="LinkedIn"
            >
              <svg
                className="h-5 w-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14C2.25 0 0 2.25 0 5v14c0 2.75 2.25 5 5 5h14c2.75 0 5-2.25 5-5V5c0-2.75-2.25-5-5-5zM8.85 19.1H5.5V9h3.35v10.1zM7.17 7.9c-1.04 0-1.85-.86-1.85-1.85 0-1.03.85-1.85 1.87-1.85 1.03 0 1.85.82 1.85 1.85 0 1-.85 1.85-1.85 1.85zm13.83 11.2h-3.35v-5.61c0-1.36-.49-2.29-1.71-2.29-.93 0-1.48.62-1.73 1.23-.09.22-.12.52-.12.82v6.45H12.2s.04-10.2 0-11.25h3.35v1.6c-.01.01-.02.02-.02.02h.02v-.02c.45-.69 1.26-1.67 3.06-1.67 2.23 0 3.9 1.46 3.9 4.58v7.77z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-sm">
          <p>&copy; 2024 AAPCN. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
