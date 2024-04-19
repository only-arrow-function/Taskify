export const isFormFilled = (data: any) => {
  for (const key in data) {
    if (key === 'tags' && data[key].length === 0) return false;
    if (!data[key]) return false;
  }
  return true;
}