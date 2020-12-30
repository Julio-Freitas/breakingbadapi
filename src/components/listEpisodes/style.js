// @ts-nocheck
import Styled from 'styled-components';

export const ContainerEpisodes = Styled.div`
    display: flex;
    flex-flow: row wrap;
`;

export const ContainerContent = Styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
  margin: 15px;
  width: 252px;
  padding: 20px;
`;

export const TextItem = Styled.span`
  line-height: normal;
  padding: 5px 0;
  font-family: 'Open Sans';


  span {
    font-size: 18px;
    font-weight: 600;
    font-family: 'Roboto';
    color: rgb(72 127 90);
    padding-right:5px;
  }
`;
