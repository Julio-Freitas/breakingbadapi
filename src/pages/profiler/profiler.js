// @ts-nocheck
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import * as actionsProfiler from '../../store/modules/profiler/actions';
import { convertFormatDate } from '../../utils/convertFormatData';
import { convertStatusCharacters } from '../../utils/convertStatusCharacters';
import * as Styled from './styled';

const interval = 2000;
const Profiler = ({ history, quotes }) => {
  const dispatch = useDispatch();
  const [profiler, setProfiler] = useState({});
  const [quotesCurrent, setQuotesCurrent] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    return () => dispatch(actionsProfiler.clearQuotes());
  }, [dispatch]);
  useEffect(() => {
    if (history.location.state) {
      const { profiler } = history.location.state;
      setProfiler(profiler);
      dispatch(
        actionsProfiler.getQuotesProfiler(
          profiler.name
            .split(' ')
            .filter((item) => item)
            .join('+')
            .toLocaleLowerCase()
        )
      );
    } else {
      history.push('/');
    }
  }, [history, dispatch]);

  const _handleChangeQuote = useCallback(() => {
    if (quotes.length > 0) {
      setIndex(index + 1);
      if (index === quotes.length) setIndex(0);
      if (quotes[index]) setQuotesCurrent(quotes[index].quote);
    }
  }, [quotes, setQuotesCurrent, index]);

  useEffect(() => {
    setTimeout(() => {
      _handleChangeQuote();
    }, interval);
  }, [_handleChangeQuote]);

  return (
    Object.keys(profiler).length && (
      <>
        <Styled.ContainerProfiler>
          <Styled.ImageContainer>
            <img src={profiler.img} alt="" />
          </Styled.ImageContainer>
          <Styled.DetailsContainer>
            <Styled.TextItem>
              <span>Nome:</span> {profiler.name}
            </Styled.TextItem>
            <Styled.TextItem>
              <span>Apelido:</span> {profiler.nickname}
            </Styled.TextItem>
            <Styled.TextItem>
              <span>Aniverśario:</span>{' '}
              {convertFormatDate(profiler.birthday, 'pt-BR')}
            </Styled.TextItem>
            <Styled.TextItem>
              <span>Ocupação:</span> {profiler.occupation.join(' ')}
            </Styled.TextItem>
            <Styled.TextItem>
              <span>Categoria:</span> {profiler.category}
            </Styled.TextItem>
            <Styled.TextItem>
              <span>Status:</span> {convertStatusCharacters(profiler.status)}
            </Styled.TextItem>
            {quotesCurrent && (
              <Styled.TextItem>
                <span>Citações:</span> {quotesCurrent}
              </Styled.TextItem>
            )}
          </Styled.DetailsContainer>
        </Styled.ContainerProfiler>
      </>
    )
  );
};

const mapStaeToProps = (state) => ({
  quotes: state.profiler.quotes,
});
export default connect(mapStaeToProps, null)(Profiler);
