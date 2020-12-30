// @ts-nocheck
import React, { useEffect, useState } from 'react';
import OptionsNav from './optionsNav';

import * as Styled from './style';

export default function BurgerNav({ optionsNav, fallbackClickMenu }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [optionsNav]);
  return (
    <>
      <Styled.Burger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Styled.Burger>
      <OptionsNav
        open={open}
        optionsNav={optionsNav}
        fallbackClickMenu={fallbackClickMenu}
      />
    </>
  );
}
