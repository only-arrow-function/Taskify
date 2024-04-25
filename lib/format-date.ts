export const formatDate = (date: string) => {
  return date.replaceAll('T', ' ');
};

export const formatInputDate = (date: string) => {
  return formatDate(date).replaceAll('-', '.')
}