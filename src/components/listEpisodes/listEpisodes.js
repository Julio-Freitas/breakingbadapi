import React from 'react';
import PropTypes from 'prop-types';
import { convertFormatDate } from '../../utils/convertFormatData';
import * as Styled from './style';

const ListEpisodes = ({ listEspisodes, viewSeason }) => {
  const _renderList = (item) => {
    const { air_date, characters, episode, season, series, title } = item;
    if (viewSeason === Number(season)) {
      return (
        <Styled.ContainerContent key={`${title}-${season}`}>
          <Styled.TextItem>
            <span>Título:</span> {title}
          </Styled.TextItem>
          <Styled.TextItem>
            <span> Entrou no ar:</span> {convertFormatDate(air_date, 'pt-BR')}
          </Styled.TextItem>
          <Styled.TextItem>
            <span>Personagens:</span>
            {characters.join(', ')}
          </Styled.TextItem>
          <Styled.TextItem>
            <span>Episódio:</span> {episode}
          </Styled.TextItem>
          <Styled.TextItem>
            <span>Temporada: </span>
            {season}
          </Styled.TextItem>
          <Styled.TextItem>
            <span>Série:</span>
            {series}
          </Styled.TextItem>
        </Styled.ContainerContent>
      );
    }
  };
  return (
    <>
      <Styled.ContainerEpisodes>
        {listEspisodes.map((item) => _renderList(item))}
      </Styled.ContainerEpisodes>
    </>
  );
};

ListEpisodes.defaultProps = {
  ListEpisodes: [],
};
ListEpisodes.propTypes = {
  listEspisodes: PropTypes.array.isRequired,
  viewSeason: PropTypes.number,
};

export default ListEpisodes;
