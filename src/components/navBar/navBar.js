// @ts-nocheck
import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import BurgerNav from './burgerNav';
import bb from '../../assets/img/bb.png';
import * as Styled from './style';

const NavBar = ({ history, optionsNav }) => {
  const [newOptionsNav, setVewOtionsNav] = useState(optionsNav);
  useEffect(() => {
    let auxNewOpttion = optionsNav.map((item) => ({
      ...item,
      selected: item.path === history.location.pathname,
    }));
    setVewOtionsNav(auxNewOpttion);
    history.listen((location) => {
      auxNewOpttion = optionsNav.map((item) => ({
        ...item,
        selected: item.path === location.pathname,
      }));
      setVewOtionsNav(auxNewOpttion);
    });
  }, [history, optionsNav]);
  return (
    <Styled.Header>
      <Styled.Image src={bb} alt="logo" onClick={() => history.push('/')} />
      <Styled.Nav>
        <BurgerNav
          optionsNav={newOptionsNav}
          fallbackClickMenu={(clickItem) => history.push(clickItem)}
        />
      </Styled.Nav>
    </Styled.Header>
  );
};

NavBar.defaultProps = {
  optionsNav: [
    {
      value: '',
      path: '',
    },
  ],
};
NavBar.propTypes = {
  optionsNav: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
};
export default NavBar;
