
const base_endpoint = "https://icanhazdadjoke.com";

const getRandomDadJoke = async () => {
 
  const APIEndpoint = `${base_endpoint}`;
  try {
    const res = await fetch(APIEndpoint, { method: "GET",
  headers: {Accept: "application/json"}  });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};


const getDadJoke = async searchTerm => {
 
  const APIEndpoint = `${base_endpoint}/search?term=${searchTerm}`;
  try {
    const res = await fetch(APIEndpoint, { method: "GET",
  headers: {Accept: "application/json"}  });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};




