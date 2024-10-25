import React from 'react';

interface IHeader {
  imgSource: string;
}

const Header: React.FC<IHeader> = ({ imgSource }) => {
  return (
    <header
      id="header"
      className="relative h-[75vh] bg-cover bg-center flex items-end justify-center"
      style={{ backgroundImage: `url(${imgSource})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 mb-12 text-center shadow-2xl">
        <button
          className="shadow-2xl bg-[#ae1c27] hover:bg-[#8a151f] text-white font-bold py-4 px-8 rounded-full"
          aria-label="Doar Agora"
        >
          Doar Agora
        </button>
      </div>
    </header>
  );
};

export default Header;
