export const convertFormatDate = (dataString, locale) => {
  if (!dataString && !locale) {
    throw new Error(
      'Os parametos de datas e  localização precisam ser passados '
    );
  }
  const checkDate = Date.parse(dataString);
  if (isNaN(checkDate)) return 'Não informado';
  return new Date(dataString).toLocaleDateString(locale);
};
