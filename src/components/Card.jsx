const Card = ({ title, description, type }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 hover:shadow-xl transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>

      <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
        {type}
      </span>

      <button className="block mt-4 text-blue-600 font-medium hover:underline">
        View More →
      </button>
    </div>
  );
};

export default Card;
