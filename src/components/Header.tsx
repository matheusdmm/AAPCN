import React, { useState, useEffect } from 'react';

interface IHeader {
  imgSources: string[];
}

const Header: React.FC<IHeader> = ({ imgSources }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const fadeTime = 300;
  const intervalTimer = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, intervalTimer);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNextSlide = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imgSources.length);
      setIsFading(false);
    }, fadeTime);
  };

  const goToPreviousSlide = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? imgSources.length - 1 : prevIndex - 1
      );
      setIsFading(false);
    }, 300);
  };

  return (
    <div className="relative h-[75vh] overflow-hidden">
      <header
        className={`absolute inset-0 h-full w-full bg-cover bg-center transition-opacity duration-700 ${
          isFading ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ backgroundImage: `url(${imgSources[currentIndex]})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </header>

      <div className="relative z-10 flex items-end justify-center h-full mb-20 text-center pointer-events-none">
        <button
          className="pointer-events-auto shadow-2xl bg-[#ae1c27] hover:bg-[#8a151f] text-white font-bold py-4 px-8 rounded-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] mb-20"
          aria-label="Doar Agora"
        >
          Doar Agora
        </button>
      </div>

      {/* Navegação carrosel */}
      <button
        onClick={goToPreviousSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 z-10"
        aria-label="Imagem Anterior"
      >
        &#10094;
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 z-10"
        aria-label="Próxima Imagem"
      >
        &#10095;
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {imgSources.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsFading(true);
              setTimeout(() => {
                setCurrentIndex(index);
                setIsFading(false);
              }, 300);
            }}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-[#ae1c27]' : 'bg-white'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Header;
