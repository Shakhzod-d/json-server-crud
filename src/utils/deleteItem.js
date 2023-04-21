export const deleteItem = async (url) => {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };

  try {
    const response = await fetch(url, requestOptions);
    const resData = await response.json();
    console.log(resData);
  } catch (error) {
    console.error(error);
  }
};
