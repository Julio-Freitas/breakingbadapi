export const convertStatusCharacters = (string) => {
  if (!string) throw new Error('Valor não foi passado');
  switch (string) {
    case 'Alive':
      return 'Vivo';
    case 'Presumed dead':
      return 'Presumido como morto';
    case 'Deceased':
      return 'Morto';
    default:
      return '';
  }
};
