// @ts-nocheck
import styled from 'styled-components';

export const Header = styled.div`
  max-width: 100%;
  width: 100%;
  height: 270px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Image = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  cursor: pointer;
  width: 50%;
`;

export const Nav = styled.div`
  width: 100%;
  height: 65px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    border-bottom: none;
    height: auto;
    padding: 0;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  @media (max-width: 768px) {
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 40px;
    z-index: 3;
  }
`;

export const ListItem = styled.li`
  padding: 18px 10px;
  ${({ selected }) =>
    selected &&
    `color: #fff;
    font-weight: 500;`}
  :hover {
    background-color: #ffffdd24;
    transition: 0.5s ease-in;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    color: #fff;
  }
`;

export const Burger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  flex-direction: column;
  justify-content: space-around;
  flex-flow: column nowrap;
  cursor: pointer;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? '#f1f1f1' : '#333')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.5s ease-out;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
