import { useEffect } from "react";
import { useState } from "react";
import NewsCard from "./NewsCard";
import Category from "./Category";
import Marquee from "react-fast-marquee";

const Home = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => setNews(data.results));
  }, []);
  return (
    <div>
      <div className="my-10 text-red-600">
        <Marquee>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>

      <div className="flex flex-col lg:flex-row justify-around lg:gap-20">
        <Category />

        <div>
          {news.slice(0, 4)?.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
