import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function CardCategory({ categoryInfo }) {
  // eslint-disable-next-line no-unused-vars, react/prop-types
  const { updatedAt, createdAt, image, name, _id } = categoryInfo;
  return (
    <>
      <div className="group relative rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 bg-white my-1">
        {/* Category Image */}
        <img
          src={image}
          alt="Category"
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category Name */}
        <div className="p-4 space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-600">
            Created at: {new Date(createdAt).toLocaleDateString()}
          </p>
          <p className="text-sm text-gray-600">
            Updated at: {new Date(updatedAt).toLocaleDateString()}
          </p>
          <Link
            to={`/category/${_id}`}
            className="block mt-4 text-center btn bg-primary-800 hover:bg-primary-900 text-white font-semibold"
          >
            View products
          </Link>
        </div>
      </div>
    </>
  );
}
