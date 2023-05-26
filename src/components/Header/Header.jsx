import React from 'react';

import { Head, Link } from './Header.styled';

const Header = () => {
  return (
    <Head>
      <Link className="navLink" to="/">
        Home
      </Link>
      <Link className="navLink" to="/movies">
        Movies
      </Link>
    </Head>
  );
};

export default Header;
