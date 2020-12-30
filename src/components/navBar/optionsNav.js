// @ts-nocheck
import React from 'react';
import * as Styled from './style';

export default function optionsNav({ open, optionsNav, fallbackClickMenu }) {
  return (
    <Styled.List open={open}>
      {optionsNav.length > 0 &&
        optionsNav.map((option, index) => (
          <Styled.ListItem
            key={index}
            onClick={() => fallbackClickMenu(option.path)}
            selected={option.selected}
          >
            {option.value}
          </Styled.ListItem>
        ))}
    </Styled.List>
  );
}
