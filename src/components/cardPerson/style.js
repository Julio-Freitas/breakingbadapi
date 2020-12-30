// @ts-nocheck
import Styled from 'styled-components';

export const CardContainer = Styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
  margin: 15px;
  width: 252px;

`;

export const ContainerImg = Styled.div`
  height: 300px;
  padding: 10px;
  overflow: hidden;
  perspective: 1000px;
  position: relative;
  transition: transform 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = Styled.img`
    height: 300px;
    width: 100%;
    object-fit: cover;
    overflow: hidden;
    opacity: .8;
    border-radius: 6px;
    object-position: top;
    transform-style: preserve-3d;
    transition: transform 0.8s;
    position: absolute;

${({ effectImage }) =>
  effectImage &&
  `transform: rotateY(180deg);
      transition: transform 0.8s;
      opacity: 0.3;`}


`;

export const cardBody = Styled.div`
    flex: 1 1 auto;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
`;

export const TitleCard = Styled.span`
     font-weight: 500;
    line-height: 1.2;
    font-size: 1.25rem;
`;

export const Label = Styled.label`
    font-weight: 500;
    font-size: 16px;
`;

export const BackFace = Styled.div`
  position: absolute;
  backface-visibility: hidden;
  transition: transform 0.8s;
  bottom: 0;
    width: 100%;
  ${({ visibilityButton }) =>
    visibilityButton
      ? `
      opacity: 1;
  `
      : `opacity: 0`}
`;
