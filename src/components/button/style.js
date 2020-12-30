// @ts-nocheck
import Styled from 'styled-components';

export const ContainerButton = Styled.div`
  display: flex;
  flex-direction: column;
  background-color:${({ bgColor }) => (bgColor ? bgColor : '#000 ')} ;
  background-clip: border-box;
  cursor: pointer;
  border-radius: .25rem;
`;

export const Button = Styled.div`
  padding: 5px 10px;
  text-align: center;
  width: 100%;
  color: ${({ colorText }) => (colorText ? colorText : '#fff ')} ;;
  font-family: 'Roboto'
`;
