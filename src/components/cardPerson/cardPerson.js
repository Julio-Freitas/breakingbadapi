// @ts-nocheck
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { convertFormatDate } from '../../utils/convertFormatData';
import * as Styled from './style';
import Button from '../button';

const CardPerson = ({ character, fallbackClickCard }) => {
  const [controlMouse, setControlMouse] = useState(false);
  return (
    <Styled.CardContainer>
      <Styled.ContainerImg
        onMouseEnter={() => setControlMouse(true)}
        onMouseLeave={() => setControlMouse(false)}
      >
        <Styled.Image
          effectImage={controlMouse}
          src={character.img}
          alt={character.name}
        />

        <Styled.BackFace visibilityButton={controlMouse}>
          <Button
            text="Ver detalhes"
            onClick={() => fallbackClickCard(character)}
          />
        </Styled.BackFace>
      </Styled.ContainerImg>

      <Styled.cardBody>
        <Styled.TitleCard>{character.name}</Styled.TitleCard>
        <Styled.Label>
          Aniverśaio: {convertFormatDate(character.birthday, 'pt-BR')}
        </Styled.Label>
      </Styled.cardBody>
    </Styled.CardContainer>
  );
};

CardPerson.defaultProps = {
  character: {},
  fallbackClickCard: () => {},
};
CardPerson.propTypes = {
  character: PropTypes.shape({
    char_id: PropTypes.number,
    name: PropTypes.string,
    birthday: PropTypes.string,
    occupation: PropTypes.arrayOf(PropTypes.string),
    img: PropTypes.string,
    status: PropTypes.string,
    nickname: PropTypes.string,
    appearance: PropTypes.arrayOf(PropTypes.number),
    portrayed: PropTypes.string,
    category: PropTypes.string,
    better_call_saul_appearance: PropTypes.array,
  }).isRequired,

  fallbackClickCard: PropTypes.func,
};
export default CardPerson;
