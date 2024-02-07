import axios from "axios";

const getSharedData = async () => {
  const data = await axios.get(
    `https://api.nytimes.com/svc/mostpopular/v2/shared/7.json?api-key=${
      import.meta.env.VITE_API_KEY
    }`
  );
  return data.data;
};

export default getSharedData;
