const Category = () => {
  return (
    <div className="w-[300px]">
      <h2 className="text-xl font-medium">All Category</h2>
      <ul className="space-y-3 mt-5">
        <li className="bg-gray-300 p-2 rounded-md cursor-pointer">All News</li>
        <li className="bg-gray-300 p-2 rounded-md cursor-pointer">
          Breaking News
        </li>
        <li className="bg-gray-300 p-2 rounded-md cursor-pointer">
          Technology
        </li>
        <li className="bg-gray-300 p-2 rounded-md cursor-pointer">Social</li>
        <li className="bg-gray-300 p-2 rounded-md cursor-pointer">
          Entertainment
        </li>
      </ul>
    </div>
  );
};

export default Category;
