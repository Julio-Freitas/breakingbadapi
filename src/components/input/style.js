// @ts-nocheck
import Styled from 'styled-components';

export const ContainerInput = Styled.div`
  display: flex;
  flex-direction: column;
  background-color:${({ bgColor }) => (bgColor ? bgColor : '#000 ')} ;
  background-clip: border-box;
  cursor: pointer;
  border-radius: .25rem;
  position: relative;

`;

export const Input = Styled.input`
  padding: 15px 10px;
  text-align: center;
  color: ${({ colorText }) => (colorText ? colorText : '#fff ')} ;
  font-family: 'Roboto';
  width: 150px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
  z-index: 1;
  :focus{
    width: 100%;
  }
  ${({ focus }) => focus && '   width: 100%;'}

`;

export const Label = Styled.span`
  color: ${({ colorLabel }) => (colorLabel ? colorLabel : '#fff ')} ;
  position: absolute;
  display: flex;
  width: 100%;
  text-align: center;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size:18px;
  cursor: default;
`;
