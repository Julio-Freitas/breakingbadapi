// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style';
export default function Button({ text, onClick, colorText, bgColor }) {
  return (
    <Styled.ContainerButton bgColor={bgColor}>
      <Styled.Button onClick={onClick} colorText={colorText}>
        {text}
      </Styled.Button>
    </Styled.ContainerButton>
  );
}
Button.defaultProps = {
  text: '',
  onclick: () => {},
  colorText: '',
  bgColor: '',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired,
  colorText: PropTypes.string,
  bgColor: PropTypes.string,
};
