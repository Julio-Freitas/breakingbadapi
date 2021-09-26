// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import * as actionEpisodes from '../../store/modules/episodes/actions';
import ListEpisodes from '../../components/listEpisodes';
import * as Styled from './style';

const Episodes = ({ episodes }) => {
  const [season, setSeason] = useState({});
  const [seasonCurrent, setSeasonCurrent] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionEpisodes.getEpisodes());
  }, [dispatch]);

  useEffect(() => {
    let numberSeason = [];
    let obj = {};
    episodes.forEach((element) => numberSeason.push(element.season.trim()));
    const newValues = [...new Set(numberSeason)];
    newValues.forEach((item, index) => (obj[`temp-${index + 1}`] = item));
    setSeason(obj);
  }, [episodes]);
  return (
    episodes.length > 0 && (
      <>
        <Styled.TextTitleSeason>Mais Temporadas</Styled.TextTitleSeason>
        <Styled.MoreSeasonContainer>
          {Object.keys(season).map((item, index) => (
            <Styled.MoreSeason
              onClick={() => setSeasonCurrent(Number(item.split('-')[1]))}
              selected={seasonCurrent === index + 1}
              key={`${index}`}
            >
              {index + 1}
            </Styled.MoreSeason>
          ))}
        </Styled.MoreSeasonContainer>

        <Styled.ContainerEpisodios>
          <ListEpisodes listEspisodes={episodes} viewSeason={seasonCurrent} />
        </Styled.ContainerEpisodios>
      </>
    )
  );
};
const mapStateToProps = (state) => ({
  episodes: state.episodes.list,
});
export default connect(mapStateToProps, null)(Episodes);
