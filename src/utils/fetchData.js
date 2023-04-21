export const fetchItem = async (url) => {
  let resData;

  try {
    const response = await fetch(url);
    resData = await response.json();
  } catch (error) {
    console.error(error);
  }

  return resData;
};
