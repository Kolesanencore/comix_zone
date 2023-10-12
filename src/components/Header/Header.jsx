import { useState, useEffect } from 'react';

import Logo from '../Logo/Logo';

import SearchInput from '../SearchInput/SearchInput';

import { HeaderWrapper } from './Header.styled';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerStyles = {
    background: isScrolled ? 'rgba(0, 0, 0, 0.511)' : 'transparent',
    transition: 'background 0.3s ease-in-out',
    backdropFilter: isScrolled ? 'blur(20px)' : 'none',
  };

  return (
    <HeaderWrapper style={headerStyles}>
      <Logo />
      <SearchInput />
    </HeaderWrapper>
  );
};

export default Header;
