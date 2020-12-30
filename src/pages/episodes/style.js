// @ts-nocheck
import styled from 'styled-components';
export const ContainerEpisodios = styled.div`
  padding: 20px 40px;
  display: flex;
  background-color: #ffffdd24;
  margin-bottom: 30px;
`;

export const TextTitleSeason = styled.span`
  padding: 20px 40px;
  display: flex;
  background-color: #ffffdd24;
  font-size: 20px;
  color: #fff;
`;
export const MoreSeasonContainer = styled.span`
  padding: 0px 40px;
  display: flex;
  background-color: #ffffdd24;
  margin-bottom: 30px;
`;
export const MoreSeason = styled.span`
  font-size: 15px;
  padding: 5px 40px;
  cursor: pointer;
  color: #fff;
  transition: 0.3s;
  ${({ selected }) =>
    selected && '  font-weight: bold; background-color: #ffffdd24;'}
  :hover {
    font-weight: bold;
  }
`;
