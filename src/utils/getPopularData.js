import axios from "axios";

const getPopularData = async () => {
  const data = await axios.get(
    `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${
      import.meta.env.VITE_API_KEY
    }`
  );
  return data.data;
};

export default getPopularData;
