// @ts-nocheck
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style';
export default function Input({
  text,
  onChange,
  colorText,
  bgColor,
  placeholder,
  type,
  label,
  colorLabel,
}) {
  const [valueInput, setValueInput] = useState('');
  const [focus, setFocus] = useState(false);
  useEffect(() => {
    if (text) setValueInput(text);
  }, [text]);

  const _handleChangeInpput = (event) => {
    const { value } = event.target;
    setValueInput(value);
    if (onChange) onChange(value);
  };
  const _handleFocusInput = () => {
    const input = document.querySelector('input[name=input]');
    input.focus();
    setFocus(true);
  };
  return (
    <Styled.ContainerInput
      bgColor={bgColor}
      onMouseLeave={() => setFocus(false)}
    >
      <Styled.Label colorLabel={colorLabel} onClick={_handleFocusInput}>
        {label}
      </Styled.Label>
      <Styled.Input
        type={type}
        onChange={_handleChangeInpput}
        colorText={colorText}
        value={valueInput}
        placeholder={placeholder}
        focus={focus}
        name="input"
      />
    </Styled.ContainerInput>
  );
}
Input.defaultProps = {
  text: '',
  onclick: () => {},
  colorText: '',
  bgColor: '',
};

Input.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  colorText: PropTypes.string,
  bgColor: PropTypes.string,
};
