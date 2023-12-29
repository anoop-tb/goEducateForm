export const callInstitutionDetails = async (id) => {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    return null;
  }
};
