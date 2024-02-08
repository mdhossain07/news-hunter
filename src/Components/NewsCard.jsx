/* eslint-disable react/prop-types */
import thumbnail from "../assets/05chile-wildfires-bhwc-superJumbo.webp";
const NewsCard = ({ item }) => {
  return (
    <div className="space-y-1">
      <img className="rounded-lg mt-5 lg:w-[500px]" src={thumbnail} alt="" />
      <h2 className="text-xl font-medium">{item?.title}</h2>
      <p className="text-sm">{item?.abstract}...</p>
      <a href={item?.url} target="blank">
        <p className="text-orange-600 font-medium my-2">Read More</p>
      </a>
    </div>
  );
};

export default NewsCard;
