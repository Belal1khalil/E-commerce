

// eslint-disable-next-line react/prop-types
export default function CardBrand({ brandInfo }) {
    // eslint-disable-next-line react/prop-types
    const {  image, name, description } = brandInfo;

  return (
    <>
    <div className="card ">
        <div className="group relative rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 bg-white my-1">
            {/* Product Image */}
            <img
            src={image}
            alt="Brand"
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
    
            {/* Brand Name */}
            <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            <p className="text-sm text-gray-600">{description}</p>
            </div>
        </div>
    </div>
    </>
  )
}
