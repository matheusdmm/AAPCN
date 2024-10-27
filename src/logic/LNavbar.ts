import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useNavbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;
  const menuRoutes = ['/', '/sobre', '/projetos', '/como-apoiar', '/contato'];
  const logo = 'https://via.placeholder.com/200x100';

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return {
    isMenuOpen,
    toggleMenu,
    isActive,
    menuRoutes,
    logo,
  };
};
