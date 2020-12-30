import React, { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import * as actionCharacters from '../../store/modules/characters/actions';
import CardPerson from '../../components/cardPerson';
import Button from '../../components/button';
import Input from '../../components/input';
import * as Styled from './style';

const Home = ({ home, history }) => {
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(null);

  useEffect(() => {
    dispatch(actionCharacters.getCharacters());
  }, [dispatch]);

  useEffect(() => {
    if (offset !== null) {
      dispatch(
        actionCharacters.getMoreCharacters({
          offset: offset,
        })
      );
    }
  }, [offset, dispatch]);
  const _handleClickcard = (itemClicked) =>
    history.push('/detalhes', {
      profiler: itemClicked,
    });

  const _handleOffsetMore = () => setOffset(home.lastPageOffset + 10);

  const _handleOffsetLess = () => {
    if (offset <= 0) {
      setOffset(0);
    } else {
      setOffset(home.lastPageOffset - 10);
    }
  };
  const _handleSearchCharacters = (text) => {
    const mountQuery = text
      .split(' ')
      .filter((value) => value)
      .join('+');
    dispatch(actionCharacters.getNameCharacters(mountQuery));
  };
  return (
    <>
      <Input
        type="text"
        onChange={_handleSearchCharacters}
        colorText="#000"
        label="Pesquise pelo o nome do seu personagem favorito."
        placeholder="Digite o nome do personagem"
        colorLabel="#ffa"
      />
      <Styled.ContainerAllCard>
        {home.characters.length > 0 &&
          home.characters.map((character, index) => (
            <CardPerson
              character={character}
              key={index}
              fallbackClickCard={_handleClickcard}
            />
          ))}
      </Styled.ContainerAllCard>
      <Styled.ContainerButton>
        <Button text="Voltar" onClick={_handleOffsetLess} />
        <Button text="Avançar" onClick={_handleOffsetMore} />
      </Styled.ContainerButton>
    </>
  );
};

const mapStaeToProps = (state) => ({
  home: state.home,
});
export default connect(mapStaeToProps, null)(Home);
