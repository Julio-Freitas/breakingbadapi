import styled from 'styled-components';
export const ContainerProfiler = styled.div`
  padding: 20px 40px;
  display: flex;
  background-color: #ffffdd24;
  margin-bottom: 30px;
`;

export const ImageContainer = styled.div`
  width: 350px;
  height: 290px;
  display: flex;
  justify-content: center;
  img {
    max-width: 100%;
    object-fit: fill;
    width: auto;
    height: 100%;
    object-position: top;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

export const TextItem = styled.span`
  line-height: normal;
  padding: 5px 0;
  font-family: 'Open Sans';
  span {
    font-size: 18px;
    font-weight: 500;
    font-family: 'Roboto';
    color: #fff;
  }
`;
